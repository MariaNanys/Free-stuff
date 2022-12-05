import React from "react";
import { Form, Button } from "semantic-ui-react";
import pictureContact from "../assets/volunteer.png";

export function HomeContact() {
    return (
        <div className="home_contact">
            <div>
                <h2>Contact Us</h2>
            </div>
            <div className="home_contact-content">
                <div className="home_contact_infograph">
                    <img src={pictureContact} />
                </div>
                <div className="home_contact_form">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name' placeholder='Name' className="form_input"/>
                            <Form.Input fluid label='E-mail' placeholder='E-mail'  className="form_input"/>
                        </Form.Group>
                        <Form.TextArea label='Message' placeholder='Tell us more about you...' className="form_input form_input_message"/>
                        <Button color='olive' className="home_contact_form_btn" >
                            Send
                        </Button>
                    </Form>
                    
                </div> 
            </div>         
        </div>
    )
}

export default HomeContact;