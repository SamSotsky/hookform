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
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
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
