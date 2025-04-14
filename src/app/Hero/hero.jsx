import React from 'react'
import './style.css'
import { FaSolarPanel } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div id='Hero'>
        <h1 className='hero-heading'>Lorem ipsum dolor sit amet consectetur.</h1>
      </div>

      <div className="hero-box">
        <div className="box-content">
          <p>Potencia Fase 1</p>
          <h1>360 MW</h1>
        </div>

        <div className="box-content">
          <p>Energía Anual</p>
          <h1>390 GWh</h1>
        </div>

        <div className="box-content">
          <p>Avance</p>
          <h1>50%</h1>
        </div>
      </div>

      <div className="hero-box2">
        <div className="box2-content">
          <div className="icon"><FaSolarPanel size={20} /></div>
          <div className='txt-box'>
            <p>Tipo de proyecto</p>
            <h1>Solar</h1>
          </div>
        </div>

        <div className='box2-content'>
          <div className="icon"><FaDollarSign size={20} /></div>
          <div className="txt-box">
            <p>Inversionista</p>
            <h1>Extranjero</h1>
          </div>
        </div>
        <div className='box2-content'>
          <div className="icon"><MdOutlineAccessTime size={20} /></div>
          <div className="txt-box">
            <p>Fecha de inicio</p>
            <h1>Diciembre 2025</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
