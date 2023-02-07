import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
    let loginInput = useRef(null);
    let passwordInput = useRef(null);
    const navigate = useNavigate();


    const [user, setUser ]= useState({
        login: '',
        password: '',
    })

    useEffect(() => {
        let savedLoginAndPassword = JSON.parse(localStorage.getItem("arrayUserLoged"));
        if(savedLoginAndPassword) {
            navigate('/');
        }
    })

    

    function ContactForm() {

        const dataCompareLogin = (e) => { 
            setUser({
                ...user,
                login: e.target.value})
            setTimeout(() => {
                loginInput.current.focus()
              });
        }

        const dataComparePassword = (e) => {
            setUser({
                ...user,
                password: e.target.value})
            setTimeout(() => {
                passwordInput.current.focus()
              });
        }

        function dataCompare(e) {
            let users = JSON.parse(localStorage.getItem("arrayUserData")); 
            if(users) {
                const elem = users.find((element) => {
                    return element.login === user.login && element.password === user.password;
                });
                if(elem) {
                    localStorage.setItem('arrayUserLoged', JSON.stringify(elem.login));
                    navigate('/');
                } else {
                console.error('error');
                }
            }
            else {
                console.error('error');
            }
        }

          return (
              <Form className="login_form">
                <Form.Field>
                <label>Login</label>
                <input placeholder='Login' className="login_input" 
                ref={loginInput}
                value={user.login}
                onChange={(e) => dataCompareLogin(e)}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password'
                ref={passwordInput}
                value={user.password}
                type="password"
                onChange={(e) => dataComparePassword(e)}
                 />
                </Form.Field>
                <Button type='submit'onClick={(e) => {dataCompare(e)}}>Log In</Button>
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