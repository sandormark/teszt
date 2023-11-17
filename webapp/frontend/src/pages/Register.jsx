import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [err, setError] = useState(null);
    const navigate = useNavigate();


    console.log(inputs);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/api/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);

        }

    }
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type='text' placeholder='username' name="username" onChange={handleChange} />
                <input required type='password' placeholder='password' name="password" onChange={handleChange} />
                <input required type='email' placeholder='email' name="email" onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Van felhasználod <Link to="/login">Login</Link></span>
            </form>

        </div>
    )
}

export default Register