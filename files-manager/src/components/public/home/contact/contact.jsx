import React from "react";
import './contact.scss'
function contact() {
    return (
            <div class="container">
                <div class="col-12 text-center">
                    <h1>Contact Us</h1>
                </div>
                <br/>
                <div class="img_contact">
                    <div class="contact shadow p-3 mb-5 bg-white rounded">
                        <form action="#" method="POST">
                            <div class="row">
                                <h3 class="text-black mb-1">Contact Form</h3>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="name"> Name</label>
                                    <input type="text" name="name" class="form-control rounded-0" placeholder="Abd" />
                                </div>
                              
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" class="form-control rounded-0" placeholder="@mail" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="subject">Subject</label>
                                    <input type="text" name="subject" class="form-control rounded-0" placeholder="Subject" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label class="text-black" for="message">Message</label>
                                    <textarea name="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Leave your message here..."></textarea>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <button class="btn btn-primary rounded-pill" type="button" >Submit form</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br/>
                </div>
            </div>
    );
}

export default contact;