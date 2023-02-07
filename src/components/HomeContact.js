import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import pictureContact from "../assets/volunteer.png";

export function HomeContact() {
    const [userContact, setUserContact ]= useState({
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false
    })

    const [toogleHideClass, setToogleHideClass ] = useState(false);

    const onInputName = (e) => {
        if (!(/^[\p{L} ,.'-]+$/u.test(e.target.value))) {
            setUserContact ({
                ...userContact,
                nameError: true
            })
        } else {
            setUserContact ({
                ...userContact,
                name: e.target.value,
                nameError:false
            })
        }
    }

    const onInputMail = (e) => {
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value))) {
            setUserContact ({
                ...userContact,
                emailError: true
            })
        } else {
            setUserContact ({
                ...userContact,
                email: e.target.value,
                emailError:false
            })
        }
    }

    const onInputMessage = (e) => {
        if (e.target.value.length <= 50) {
            setUserContact({
                ...userContact,
                messageError: true
            });
        } else {
            setUserContact({
                ...userContact,
                message: e.target.value,
                messageError:false
            })
        }
    }

    const sendMessage = () => {
        if (userContact.name && userContact.email && userContact.message) {
            setToogleHideClass(true);
        }
    }

    
    return (
        <div className="home_contact">
            <div>
                <h2>Contact Us</h2>
            </div>
            <div className="home_contact-content">
                <div className="home_contact_infograph">
                    <img src={pictureContact} />
                </div>
                <div className={toogleHideClass ? "hide" : "home_contact_form"}>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input
                            fluid
                            label='Name'
                            placeholder='Name'
                            className="form_input"
                            onChange={(e) => {onInputName(e)}}
                            error={userContact.nameError ? 'Uncorrect name.' : null}/>
                            <Form.Input
                            fluid
                            label='E-mail'
                            placeholder='E-mail'
                            className="form_input"
                            onChange={(e) => {onInputMail(e)}}
                            error={userContact.emailError ? 'Uncorrect email.' : null}/>
                        </Form.Group>
                        <Form.TextArea
                        label='Message'
                        placeholder='Tell us more about you...'
                        className="form_input form_input_message"
                        onChange={(e) => {onInputMessage(e)}}
                        error={userContact.messageError ? 'Login should contain min 50 letters.' : null}/>
                        <Button className="home_contact_form_btn" onClick={sendMessage}>
                            Send
                        </Button>
                    </Form>
                    
                </div> 
                <div className={toogleHideClass ? "successMessage" : "hide"}>
                    <span>Greate! Your message was send.</span>
                </div>
            </div>         
        </div>
    )
}

export default HomeContact;