import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>
                                We help People to outsource their tax
                                <br/>
                                preparation concerns
                            </h2>
                            <p>
                                We work with individuals, households, smaller organizations and also well – established corporate <br/>organizations who would want to outsource their tax preparation concerns.
                            </p>
                            <form action="">
                                <input type="email" placeholder="Email"/>
                                <button type="submit"> Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
