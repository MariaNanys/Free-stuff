import React from "react";

export function LogIn() {
    return (
        <div className="LogIn">
            <div>
                <label>Login</label>
                <input type="text" name="login"></input>  
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"></input>  
            </div>
            
        </div>
    )
}

export default LogIn;