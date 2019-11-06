import React, { useState } from 'react';


export default function Register() {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    return (
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Register</h2>
            <form
                style={{
                    display: "grid",
                    alignItems: "center",
                    justifyItems: "center"
                }}
            >
                <input 
                    type="text" 
                    placeholder="Username"
                />
                <input 
                    type="email" 
                    placeholder="Email addres"
                />
                <input 
                    type="text" 
                    placeholder="Password"
                />
                <button type="submit">Submit </button>
            </form>    
        </div>
    )
}