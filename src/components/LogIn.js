import React from "react";
import { Form, Button } from 'semantic-ui-react';

export function LogIn() {

    function ContactForm() {
        // const form = useForm({
        //     initialValues: { email: '', title: '', message: '' },
        
        //     validate: {
              
        //       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny email'),
        //       title: (value) => (value.length < 2 ? 'Tytuł musi składać się z minimum 2 liter' : null),
        //       message: (value) => (value.length < 15 ? 'Treść musi składać się z minimum 15 liter' : null),
        //     },
        //   });

          return (
              <Form className="login_form">
                <Form.Field>
                <label>Login</label>
                <input placeholder='Login'/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password'/>
                </Form.Field>
                <Button type='submit'>Log In</Button>
            </Form>
          )
          }
    return (
        <div className="LogIn">
            <div className="inputs">
                <ContactForm />
            </div>   
        </div>
    )
}

export default LogIn;