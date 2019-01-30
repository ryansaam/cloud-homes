import React, { useState, useEffect } from 'react'
import '../css/home.css'
import img1 from '../images/home.jpg'
import locationImg from '../images/location-photo.jpeg'

const btn1 = {
  position: "absolute",
  top: "50%",
  left: "-16px",
  transform: "translateY(-50%) rotate(180deg)"
}

const btn2 = {
  position: "absolute",
  top: "50%",
  right: "-16px",
  transform: "translateY(-50%)"
}

const LocationTag = props => {
  return (
    <span style={{whiteSpace: "nowrap"}} >
      <div className="location-tag-container">
        <div className="location-tag-padding">
          <div className="location-tag">
            <div className="location-image-container">
              <div className="location-img" style={{backgroundImage: `url(${props.img})`}} alt="vaction location" />
            </div>
            <div className="loaction-span-info-container">
              <span style={{fontSize: "20px", fontWeight: "700", opacity: "0.9"}} >{props.city}</span>
              <span style={{opacity: "0.6"}} >{props.country}</span>
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}

const SlidesBtn = props => {
  return (
    <div style={{...props.style}} >
      <button type="button" className="location-tag-slides-btn" onClick={props.onClick} >
        <svg viewBox="0 0 50 50">
          <g style={{transformOrigin: "50% 50%", transform: "rotate(50deg)"}} >
          <rect rx="3" x="4" y="19" width="30" height="5" style={{fill: "#313131"}}/>
          </g>
          <g style={{transformOrigin: "50% 50%", transform: "rotate(-50deg)"}} >
          <rect rx="3" x="0" y="30" width="30" height="5" style={{fill: "#313131"}}/>
          </g>
        </svg>
      </button>
    </div>
  )
}

const LocationPicker = props => {
  const [slidesPosition, setSlidesPosition] = useState(0)
  const [btn1IsShowing, setBtn1IsShowing] = useState(true)
  const [btn2IsShowing, setBtn2IsShowing] = useState(true)

  function handleBtn1Click() {
    if (btn1IsShowing) {
      setSlidesPosition(slidesPosition+25)
    }
  }

  function handleBtn2Click() {
      if (btn2IsShowing) {
        setSlidesPosition(slidesPosition-25)
      }
  }

  useEffect(() => {
    if (slidesPosition === 0) {
      setBtn1IsShowing(false)
    } else {
      setBtn1IsShowing(true)
    }
    if (slidesPosition === -100) {
      setBtn2IsShowing(false)
    } else {
      setBtn2IsShowing(true)
    }
  }, [slidesPosition])

  return (
    <div className="location-picker-container">
      <div className="location-tag-slides-container">
        <div className="location-tag-slides" style={{transform: `translateX(${slidesPosition}%)`}}>
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="London" country="United Kingdom" />
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="New York" country="United States" />
          <LocationTag img={locationImg} city="New York" country="United States" />
        </div>
      </div>
      {btn1IsShowing ? <SlidesBtn onClick={handleBtn1Click} style={btn1} /> : null}
      {btn2IsShowing ? <SlidesBtn onClick={handleBtn2Click} style={btn2} /> : null}
    </div>
  )
}

const Home = props => {
  return (
    <div className="home" style={{backgroundImage: `url(${img1})`}} >
      <LocationPicker />
    </div>
  )
}

export default Home