import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const distDir = path.resolve(root, 'dist')

const routes = [
  '/',
  '/services',
  '/blog',
  '/transits',
  '/about-us',
  '/faqs',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8')

const vite = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

  await Promise.all(
    routes.map(async (route) => {
      const { html, head } = await render(route)
      const pageHtml = template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', head)

      const routePath = route === '/' ? '' : route.replace(/^\/+/, '')
      const filePath = path.join(distDir, routePath, 'index.html')
      await fs.mkdir(path.dirname(filePath), { recursive: true })
      await fs.writeFile(filePath, pageHtml, 'utf-8')
    })
  )
} finally {
  await vite.close()
}
