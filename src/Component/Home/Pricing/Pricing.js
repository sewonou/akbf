import React from 'react';
import Data from "../../../Data";
import "./Pricing.css"

const Pricing = () => {
    const itemPrice = Data.pricing.map((itembox)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                    <ul>
                        <li>{itembox.title}</li>
                        <li>{itembox.price}</li>
                        <li>{itembox.details}</li>
                        <li>{itembox.extra}</li>
                    </ul>
                    <a href={itembox.link} className="btn btn-link">Learn More</a>
                </div>


            </div>
        )
    });

    return (
        <section className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Reserve a services</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio dolor doloribus exercitationem nostrum placeat quia quis quod. Deleniti, unde?
                        </p>
                    </div>
                    <div className="row">
                        {itemPrice}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
