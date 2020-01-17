import React from 'react';
const myIcon = require("../assets/me.png");

const Footer = ({ onFaceClick }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", borderTop: "1px", borderTopStyle: "solid", borderColor: "silver", flexWrap: "wrap" }}>
            <div style={{flexBasis: "50%"}} className="footer-item">
                <h3 style={{ display: "inline" }}>About AI Generated Facemash</h3>
                <p>Choose which AI generated face has a nicer smile. You can check your result on ranking page. Reload the page if you want to start over.</p>
                <p style={{ marginTop: "1rem" }}>GitHub repository is <a  target="_blank" rel="noopener noreferrer" href="https://github.com/shoheihagiwara/ai-generated-facemash">here</a>.</p>
                <p style={{ marginTop: "1rem" }}> All imsages were downloaded from <a  target="_blank" rel="noopener noreferrer" href="https://generated.photos">https://generated.photos/</a> </p>
            </div>

            <article style={{flexBasis: "50%"}} className="tc footer-item center bg-white br3 ba b--black-10 ma3 mw5">
                <div className="tc">
                    <img src={myIcon} alt="My Icon" className="br-100 w3 dib" title="Shohei Hagiwara icon"></img>
                    <h1 className="f4">Shohei Hagiwara</h1>
                </div>
                <p className="lh-copy center f6 black-70"> Web Application Developer. </p>
                <p><a  target="_blank" rel="noopener noreferrer" href="https://github.com/shoheihagiwara">GitHub</a> | <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shoheihagiwara">LinkedIn</a></p>
            </article>

        </div>
    );
}

export default Footer