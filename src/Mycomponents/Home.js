import React from 'react'
import About from './About'
import Contact from './Contact'
import { HashLink as Link } from 'react-router-hash-link'
import Services from './Services'
import Tools from './Tools'
import { useState , useEffect } from 'react'
import Analytics from './Analytics'
import Keywords from './Keywords'
import Audience from './Audience'


export default function Home() {
    const [active, setActive] = useState("")

    return (
        <div id="home">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center align-content-center mt-5 p-1">
                    <div className="col-md-6 mt-3">
                        <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png" alt="socialmeda" className="w-100 h-100 bg-transparent" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <h1 className="display-4 fw-normal titlecolor text-center">Social Media Marketing</h1>
                        <p className="lead fw-light fs-4 text-center">Social media marketing provides companies with a way to engage with existing customers and reach new ones while allowing them to promote their desired culture, mission, or tone. </p>
                        {/* <button className="btncolor rounded-pill px-3 py-2 w-50 ms-auto me-auto justify-content-center d-flex my-1">Get Started</button> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                    <button className="btncolor rounded-pill px-2 py-1" to=""  onClick={() => setActive("tools")}>Tools</button>
                        <button className="btncolor rounded-pill px-2 py-1 ms-2" to = "" onClick={() => setActive("analytics")}>Analytics</button>
                        <button className="btncolor rounded-pill px-2 py-1 ms-2" to=""  onClick={() => setActive("keywords")}>Keywords</button> 
                        <button className="btncolor rounded-pill px-2 py-1 ms-2" to="" onClick={() => setActive("audience")}>Audience</button>
                        <button className="ms-2 btn-close" to="" onClick={() => setActive("")}></button>
                  
                    </div>
                </div>
            </div>
            {/* {this.state.isActive ? <Tools/> : null} */}
             
                 
             {active === "tools" && <Tools/>}
             {active === "analytics" && <Analytics/>}
             {active === "keywords" && <Keywords/>}
             {active === "audience" && <Audience/>}
             {active === "" }
            <About/>
            <Services/>
            <Contact/>
        </div>
    )
}
