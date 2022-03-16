import React, { Component } from 'react';
import Sidebar from './Sidebar';
class Contact extends Component {
    render() { 
        return (
            <div>
                <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-envelope-o"></i> Contact us</h2>
                    </div>
                                        
                </div>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Who we are</h4>
                                    <p>Zero Sand is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                </div>

                                <div className="col-lg-6">
                                    <h4>How we help?</h4>
                                    <p>If you’d like to write for us, <a href="#">advertise with us</a> or just say hello, fill out the form below and we’ll get back to you as soon as possible.</p>
                                </div>

                                
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <form className="form-wrapper">
                                    <h4>Contact form</h4>
                                        <input type="text" className="form-control" placeholder="Your name"/>
                                        <input type="text" className="form-control" placeholder="Email address"/>
                                        <input type="text" className="form-control" placeholder="Phone"/>
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                        <textarea className="form-control" placeholder="Your message"></textarea>
                                        <button type="submit" className="btn btn-primary">Send <i className="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>

            </div>
        );
    }
}
 
export default Contact;