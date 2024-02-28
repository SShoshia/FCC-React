import React from "react"

export default function Footer() {
    return (
        <div className="footer-imgs-container">
            <img className="footer-img" src={require("../images/twitter.png")}/>
            <img className="footer-img" src={require("../images/facebook.png")}/>
            <img className="footer-img" src={require("../images/instagram.png")}/>
            <img className="footer-img" src={require("../images/github.png")}/>
        </div>
    )
}