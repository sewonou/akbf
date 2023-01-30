import React, {Fragment} from 'react';
import Header from "./Header/Header";
import "./Home.css";
import Services from "./Sevices/Services";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Services/>
        </Fragment>

    );
};

export default Home;
