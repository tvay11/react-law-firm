import React from "react";
import './App.css'
import {auth} from "./Firebase";
import header from "./Header";
import {NavLink} from "react-router-dom";

function FrontPage(){
    document.title="Law Firm"
        return (
            <>
                <header className="header">
                    <div className="overlay">
                        <p className="frontText">We have 10 attorneys with over 200 years of combined experience. We are
                            here to help you move forward.</p>
                    </div>
                </header>
                <header className="headerr">
                    <div className="overlay">
                        <p className="frontText">For the family</p>
                    </div>
                </header>
                <header className="headerrr">

                    <div className="overlay">
                        <p className="frontText">For the next generation</p>
                    </div>
                </header>
                {/*<section id="service" className="section pt-0">*/}
                {/*    <div className="container">*/}
                {/*        <h6 className="section-title text-center" >Updates</h6>*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}
                {/*                        <h5 className="card-title mt-3"> Case 1</h5>*/}
                {/*                            <p className="mb-0">We won</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}
                {/*                        <h5 className="card-title mt-3"> Case 2 </h5>*/}
                {/*                            <p className="mb-0">We lose</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}
                {/*                        <h5 className="card-title mt-3"> Case 3 </h5>*/}
                {/*                            <p className="mb-0">We lose</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}

                {/*                        <h5 className="card-title mt-3">Case 4*/}
                {/*                            </h5>*/}
                {/*                                <p className="mb-0">We won</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}
                {/*                        <h5 className="card-title mt-3">Case 5*/}
                {/*                            </h5>*/}
                {/*                                <p className="mb-0">We lose</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="card mb-4 mb-md-0">*/}
                {/*                    <div className="card-body">*/}
                {/*                        <h5 className="card-title mt-3">Case 6</h5>*/}
                {/*                                <p className="mb-0">We won</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                </>

        )
}

export default FrontPage;