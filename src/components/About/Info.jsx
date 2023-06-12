import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class='bx bx-award about_icon'></i>
            <h3 className="about_title">Experiance</h3>
            <span className="about_subtitle">2 Years Working</span>
        </div>
        <div className="about_box">
        <i class='bx bx-briefcase-alt about_icon' ></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">3+ Projects</span>
        </div>
        <div className="about_box">
        <i class='bx bx-support about_icon' ></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">online 24/7</span>
        </div>
    </div>
  )
}

export default Info