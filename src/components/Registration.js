import React, { useState , useEffect } from "react";
import { Form, Button } from 'semantic-ui-react';

export function Registration() {
    const [user, setUser ]= useState({
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        loginError: false,
        emailError: false,
        passwordError: false,
        confirmPasswordError: false
    })
    const [toogleHideClass, setToogleHideClass ] = useState(false);

    useEffect(() => {
        const arrayUserData = {
            login: user.login,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        }
            localStorage.setItem('arrayUserData', JSON.stringify(arrayUserData))

    }, [user.login, user.email, user.password, user.confirmPassword])

    const onInputChangeLogin = (e) => {
        if (e.target.value.length <= 8) {
            setUser({
                ...user,
                loginError: true
            });
        } else {
            setUser({
                ...user,
                login: e.target.value,
                loginError:false
            })
        }
    }

    const onInputChangeMail = (e) => {
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value))) {
            setUser ({
                ...user,
                emailError: true
            })
        } else {
            setUser ({
                ...user,
                email: e.target.value,
                emailError:false
            })
        }
    }

    const onInputChangePassword = (e) => {
        const passwordValue = e.target.value;
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/g.test(passwordValue)) {
                setUser({
                    ...user,
                    passwordError: true
                })
            } else {
                setUser ({
                    ...user,
                    password: e.target.value,
                    passwordError: false
                })
            }
    }

    const onInputChangeConfirmPassword = (e) => {
        if (user.password !== e.target.value) {
            setUser ({
                ...user,
                confirmPasswordError: true
            })
        } else {
            setUser ({
                ...user,
                confirmPassword: e.target.value,
                confirmPasswordError: false
            })
        }
    }

    function shouldDisable() {
        if (
          (user.loginError || user.emailError || user.passwordError || user.confirmPasswordError ) 
          ||
          (!user.login.length || !user.email.length || !user.password.length || !user.confirmPassword.length)
        ) {
          return true;
        }
      
        return false;
      }
      
    
    const handleSubmit = (e) => {
        setToogleHideClass(true);
    }

    return (
        <div className="Registration">
            <Form
            onSubmit={(e) => {handleSubmit(e)}}
            className="registration_form"
            className={
                toogleHideClass ? 'hide' : 'show'
            }
            >
                <Form.Input
                label="Login"
                name="login"
                placeholder='Login'
                onChange={(e) => {onInputChangeLogin(e)}}
                error={user.loginError ? 'Login should contain min 8 letters.' : null}
                />
                <Form.Input
                label="E-mail"
                name="email"
                placeholder='e-mail'
                type="email"
                onChange={(e) => {onInputChangeMail(e)}}
                error={user.emailError ? 'Uncorrect email.' : null}
                />
                <Form.Input
                label="Password"
                name="password"
                placeholder='password'
                type="password"
                onChange={(e) => {onInputChangePassword(e)}}
                error={user.passwordError ? 'Password should contain min 8 letters, at least 1 special character and big letter.' : null}
                />
                <Form.Input
                label='Confirm password'
                placeholder='password'
                name="confirmPassword"
                type="password"
                onChange={(e) => {onInputChangeConfirmPassword(e)}}
                error={user.confirmPasswordError ? 'Incorrect conforming password' : null}
                />
                <Button
                type='submit'
                disabled={shouldDisable()}
                >Register</Button>
            </Form>
            <div className={toogleHideClass ? 'show' : 'hide'}>
                <div className="registation_success">
                    <h2 >
                    Congratulations!
                </h2>
                <p>You create new acount!</p>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;