import React from 'react'

export default function Contact() {
    return (
        <div id="contact">
             <div className="container">
            <h6 className="display-6 text-center mt-3">Contact Us</h6>
            <div className="underline mx-auto"></div>
                <div className="row p-5">          
                    <div className="col-md-6">
                        <h3 className="display-4">Welcome to Social Media Marketing</h3>
                        <p className="lead">
                        For social media marketing please message us.
                        </p>
                        <p className="lead">
                        Have a Question? Give Us a Call <strong className="text-black">+34385482954</strong>
                        </p>
                    </div>

                    <div className="col-md-6">
                        <form action="">
                            <div className="mb-2">
                                <label htmlFor="" className="form-label">Enter your Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="form-label">Enter your Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                               <textarea name="" id="" rows="5" className="form-control"></textarea>
                            </div>
                            <button className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
