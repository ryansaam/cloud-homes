import React from 'react'
import '../css/home.css'
import img1 from '../images/home.jpg'
import locationImg from '../images/location-photo.jpeg'

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

const LocationPicker = props => {
  return (
    <div className="location-picker-container">
      <div className="location-tag-slides">
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
        <LocationTag img={locationImg} city="New York" country="United States" />
      </div>
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