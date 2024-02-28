import React from "react" 

export default function Info () {
    return (
        <div className="info-container">
            <img className="main-img" src={require("../images/main-pic.png")}/>
            <h1 className="name">Saba Shoshiashvili</h1>
            <h3 className="role">Software Developer</h3>
            <a href="https://example.org" className="site">saba.shoshiashvili</a>
            <div className="info-buttons-container">
                <a className="info-button-content email" href="https://example.org">
                    <img className="info-img" src={require("../images/mail.png")}/>
                    <h4>Email</h4>
                </a>
                <a className="info-button-content linkedin" href="https://example.org">
                    <img className="info-img" src={require("../images/linkedin.png")}/>
                    <h4>LinkedIn</h4>
                </a>
            </div>
        </div>
    )
}
