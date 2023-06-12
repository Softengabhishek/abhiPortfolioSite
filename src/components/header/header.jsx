import React, { useState } from 'react'

const Header = () => {
    // Change Background Header
    window.addEventListener("scroll" , function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("show_header");
        else header.classList.remove("show_header");
    })

    // Toggle Menu
    const[activeNav , setActiveNav] = useState("#home");
    const[Toggle,showMenu] = useState(false);
  return (
    <header className = "header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo"><b><span>Soft</span><span>Eng</span><span>Abhishek</span></b></a>
            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className="nav_list grid">

                    <li className="nav_item">
                        <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-estate nav_icon active-link"></i>Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-user nav_icon"></i>About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-file-alt nav_icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-briefcase-alt nav_icon"></i>Services
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-scenery nav_icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? "nav_link active_link":"nav_link"}>
                            <i className="uil uil-message nav_icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={()=> showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header