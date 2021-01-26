import React from 'react';
// import { Link } from "react-router-dom"

function Header(props) {
    const { heading, subHeading, backgroundImage } = props
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{heading}</h1>
                                <span className="subheading">{subHeading}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;