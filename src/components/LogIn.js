import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from 'semantic-ui-react';

export function LogIn() {
    let savedLogin = JSON.parse(localStorage.getItem("arrayUserData")); 
    let userLogin = savedLogin.login;
    let userPassword = savedLogin.password;
    let loginInput = useRef(null);
    let passwordInput = useRef(null);

    const [user, setUser ]= useState({
        login: '',
        password: '',
    })

    useEffect(() => {
        const arrayUserLogin = {
            login: user.login,
            password: user.password,
        }
    }, [user.login, user.password])

    

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
            console.log(user.login);
            console.log(user.password);
            console.log(userLogin);
            console.log(userPassword);
            if(userLogin === user.login && userPassword === user.password) {
                console.log('true');
            } else {
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