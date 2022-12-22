import React from "react";

import "./App.css"
import immigrationLaw from './imgs/immigrationLaw.jpeg'
import lawbook from './imgs/lawbooks.jpg'
import justice from './imgs/justice.jpg'
import family from './imgs/familyLaw.jpg'

function About(){
    document.title="About Us"
        return(
            <main>
            <section class="section" id="about">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-6 pr-md-5 mb-4 mb-md-0">
                            <h6 class="section-title mb-0">About Law Firm</h6>
                            <h6 class="section-subtitle mb-4">Saint Louis, Missouri</h6>
                            <p style={{fontSize: '18px', opacity: 1}}>Since our establishment in 1977,We devoted to helping clients get through their legal issues.
                                With our expertises in family and immigration laws along with year of experience, we are more than ready to solve our clients' legal issues.
                                Our legal services can handle any legal matters from the most simple to the most complex legal issues.
                                From our partners to our attorneys, we are committed from all level in Vay Law Firm.
                                We are specialized in Family law and Immigration Services.</p>
                            <img src={justice} alt="justice" class="w-100 mt-3 shadow-sm"></img>
                        </div>
                        <div class="col-md-6 pl-md-5">
                            <div class="row">
                                <div class="col-6">
                                    <img src={immigrationLaw} alt="Picture of a gavel" class="w-100 shadow-sm"></img>
                                </div>
                                <div class="col-6">
                                    <img src={family} alt="Picture of a family" class="w-100 shadow-sm"></img>
                                </div>
                                <img src={lawbook} alt="Picture of law books" class="w-100 mt-3 shadow-sm"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        )
}
export default About;