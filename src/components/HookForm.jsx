import React, { useState } from 'react';


const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfpass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpass };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Firstname: </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                {
                    firstname.length<2?
                    "Firstname must be greater than two characters":
                    ""
                }
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
                {
                    lastname.length<2?
                    "Lastname must be greater than two characters":
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length<2?
                    "Email must be at least two characters":
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {
                    password.length<2?
                    "Password must be at least 8 characters":
                    "Passwords must match"
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfpass(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
            <p>Display:</p>
            <p>
                Firstname: {firstname}
            </p>
            <p>
                Lastname: {lastname}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Password: {password}
            </p>
            <p>
                Confirm Password: {confpass}
            </p>
        </form>
    );
};

export default HookForm;
