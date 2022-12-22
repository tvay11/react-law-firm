import React from "react";
import './App.css';
const ContactUs = () => {
    document.title="Contact Us"
        return(
            <main>
                <section id="contact" className="section has-img-bg pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5 my-3">
                                <h5 className="mb-0">Phone</h5>
                                <p className="mb-4">123-456-7890</p>

                                <h5 className="mb-0">Address</h5>
                                <p className="mb-4">111 Grand St. Louis, Mo</p>

                                <h5 className="mb-0">Email</h5>
                                <p className="mb-0" >who@google.com</p>
                                <p></p>
                            </div>
                            <div className="col-md-7">
                                <h2 className="mb-4">Contact Us</h2>
                                <h5 className="mb-4"style={{height:100, top:75}}>Send Us a message</h5>
                                <form>


                                    <div className="form-group col-sm-4">
                                            <input type="text" className="form-control text-white rounded-0 bg-transparent"
                                                   name="name" placeholder={'name'}/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input type="email"
                                                   className="form-control text-white rounded-0 bg-transparent"
                                                   name="Email" placeholder={'Email'}/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input type="text"
                                                   className="form-control text-white rounded-0 bg-transparent"
                                                   name="subject" placeholder={'Subject'}/> 
                                        </div>
                                        <div className="form-group col-12">
                                            <textarea name="message" id="" cols="30" rows="4"
                                                      className="form-control text-white rounded-0 bg-transparent"
                                                      placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group col-12 mb-0">
                                            <button type="submit" className="btn btn-primary rounded w-md mt-3" style={{top:-10,height:40}}>Send</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
}
export default ContactUs;
