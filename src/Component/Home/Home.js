import React, {Fragment} from 'react';
import Header from "./Header/Header";
import "./Home.css";
import Services from "./Sevices/Services";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Counter from "./Counter/Counter";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Services/>
            <Banner/>
            <Counter/>

        </Fragment>

    );
};

export default Home;
