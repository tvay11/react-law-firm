import React from "react";
import './App.css'
import person1 from './imgs/person1.jpg'
import person2 from './imgs/person2.jpg'
import person3 from './imgs/person3.jpeg'


function OurTeam(){
    document.title="Our Team"
        return(
            <section class="section" id="blog">
                <div class="container">
                    <h6 class="section-title mb-0 text-center">Our Partners</h6>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card border-0 mb-4">
                                <img src={person1} alt="Picture of Elizabeth Harris" class="card-img-top w-100"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Elizabeth J. Harris</h6>
                                        <p>Elizabeth earned her Juris Doctorate degree in Saint Louis University School of Law. She specialized in Family Law after joining Vay Law firm in 2013.
                                            Elizabeth is licensed to practice in Illinois and Missouri.</p>

                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-4">
                                <img src={person2} alt="Picture of Jean Valazquez" class="card-img-top w-100"/>
                                    <div class="card-body">
                                        <h6 class="card-title"> Jean K. Valazquez</h6>
                                        <p>Jean is a Saint Louis native.
                                            She earned her Juris Doctorate Degree in  Southern Illinois University School of Law.
                                            She specialized in immigration services.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-4">
                                <img src={person3} alt="Picture of Donald Oconnell" class="card-img-top w-100"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Donald C. Oconnell</h6>
                                        <p>Donald grew up in New York, but he earn his Doctorate Degree in Florida State University School of Law.
                                            He specialized in Family Law.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default OurTeam