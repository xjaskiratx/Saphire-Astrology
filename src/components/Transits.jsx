import React from 'react'
import '../styles/Transits.css'

export default function Transits(){
  return (
    <div className="space">
      <div className="sun"></div>

      {/* Orbits for 8 planets */}
      <div className="orbit" data-radius="100" style={{width: 200, height: 200}}></div>
      <div className="orbit" data-radius="140" style={{width: 280, height: 280}}></div>
      <div className="orbit" data-radius="180" style={{width: 360, height: 360}}></div>
      <div className="orbit" data-radius="220" style={{width: 440, height: 440}}></div>
      <div className="orbit" data-radius="260" style={{width: 520, height: 520}}></div>
      <div className="orbit" data-radius="300" style={{width: 600, height: 600}}></div>
      <div className="orbit" data-radius="340" style={{width: 680, height: 680}}></div>
      <div className="orbit" data-radius="380" style={{width: 760, height: 760}}></div>

      {/* 8 planets */}
      <div className="planet p1" data-radius="100" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p2" data-radius="140" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p3" data-radius="180" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p4" data-radius="220" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p5" data-radius="260" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p6" data-radius="300" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p7" data-radius="340" style={{top:'50%', left:'50%'}}></div>
      <div className="planet p8" data-radius="380" style={{top:'50%', left:'50%'}}></div>

      <div className="coming">Coming Soon</div>
    </div>
  )
}