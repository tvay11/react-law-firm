import React from "react";
import './App.css';
import white from './assets/imgs/white.jpg'
function PracticeArea()
{
    document.title="Practice Areas"
        const mystyle =
            {
        textAlign: "center",
        position: "relative",
        top: "-200px"
}
        const mystyle2 =
            {
                fontSize: "18px",
                opacity: "1"
        }
        return(
            <section id="portfolio" className="section portfolio-section">
                <div className="container">
                    <h6 className="section-title text-center">Practice Areas</h6>
                </div>
                <div className="portfolio-container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={white} className="img-fluid"
                                     alt="none"/>
                                <h2 style={mystyle}>Marriage Dissolution</h2>
                                <div className="content-holder">
                                    <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                    <div className="text-holder">
                                        <p style={mystyle2}>When someone wants to end their marriage.
                                            Marriage can be ended by divorce or annulment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={white} className="img-fluid"
                                     alt="none"/>
                                <h2 style={mystyle}>Domestic Violence</h2>
                                <div className="content-holder">
                                    <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                    <div className="text-holder">
                                        <p style={mystyle2}>Victim of domestic violence can ask the
                                            court to keep the abuser away.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={white} className="img-fluid"
                                     alt="none"/>
                                <h2 style={mystyle}>Child Custody and
                                    Paternity</h2>
                                <div className="content-holder">
                                    <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                    <div className="text-holder">
                                        <p style={mystyle2}>When someone wants to be declared a parent
                                            of a child, they can file a case for paternity. This also include child
                                            support, custody, and visitation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="portfolio-container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 web new" style={{display:"flex"}}>
                                <div className="portfolio-item">
                                    <img src={white} className="img-fluid"
                                         alt="none"/>
                                        <h2 style={mystyle}>Visa</h2>
                                        <div className="content-holder">
                                            <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div className="text-holder">
                                                <p style={mystyle2}>When someone need an endorsement for Visa.
                                                    This includes tourist, student, transit and work visas.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 web new">
                                <div className="portfolio-item">
                                    <img src={white} className="img-fluid"
                                         alt="none"/>
                                        <h2 style={mystyle}>Citizenship</h2>
                                        <div className="content-holder">
                                            <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div className="text-holder">
                                                <p style={mystyle2}>When someone need to solve legal matters
                                                    due to citizenship.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 web new">
                                <div className="portfolio-item">
                                    <img src={white} className="img-fluid"
                                         alt="none"/>
                                        <h2 style={mystyle}>Greencard</h2>
                                        <div className="content-holder">
                                            <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div className="text-holder">
                                                <p style={mystyle2}>When someone wants to end their marriage.
                                                    Marriage can be ended by divorce or annulment.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                        <div className="portfolio-container">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                            <h2 style={mystyle}>Name Change</h2>
                                            <div className="content-holder">
                                                <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                                <div className="text-holder">
                                                    <p style={mystyle2}>When someone wants to legally change their
                                                        name through the family court.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                            <h2 style={mystyle}>Guardianship</h2>
                                            <div className="content-holder">
                                                <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                                <div className="text-holder">
                                                    <p style={mystyle2}>When a parent is unable to care for
                                                        themself or the child, they can file a case to determine the guardianship of
                                                        the child.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                            <h2 style={mystyle}>Naturalization</h2>
                                            <div className="content-holder">
                                                <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                                <div className="text-holder">
                                                    <p style={mystyle2}>When someone need help getting a green
                                                        card for family or employment.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                            <h2 style={mystyle}>Deportation</h2>
                                            <div className="content-holder">
                                                <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                                <div className="text-holder">
                                                    <p style={mystyle2}>When someone need legal help regarding
                                                        their deportation status.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                            <h2 style={mystyle}>Asylum</h2>
                                            <div className="content-holder">
                                                <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                                <div className="text-holder">
                                                    <p style={mystyle2}>When someone need legal help regarding
                                                        their asylum status.</p>
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                <div className="col-md-6 col-lg-4 web new">
                                    <div className="portfolio-item">
                                        <img src={white} className="img-fluid"
                                             alt="none"/>
                                        <h2 style={mystyle}>Adoption</h2>
                                        <div className="content-holder">
                                            <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div className="text-holder">
                                                <p style={mystyle2}>When the court believe that the family
                                                    should no longer have parental rights to the child due to their
                                                    negligence.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                </div>





                        </div>
                    </div>
                </div>
            </section>
        )
}
export default PracticeArea