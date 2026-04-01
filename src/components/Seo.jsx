import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE = {
  name: 'Saphire Astro',
  url: 'https://saphireastro.in',
  defaultImage: '/images/logo_final.webp',
}

const toAbsoluteUrl = (path) => {
  if (!path) return SITE.url
  if (path.startsWith('http')) return path
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
  const canonical = toAbsoluteUrl(path)
  const imageUrl = toAbsoluteUrl(image || SITE.defaultImage)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={canonical} />

      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      {jsonLd
        ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
            <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
          ))
        : null}
    </Helmet>
  )
}
