import React, { useState } from 'react';
import  './InputForm.css';

import {useNavigate} from 'react-router-dom';


const InputForm = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email,password}=formData
  const changeHandler=e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  
  const clearHandler = () => {
    
    setFormData({
      email: '',
      password: ''
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    nav('/navbar');
  };

  const SubmitDisable = !email || !password ;
  return (

     

<center>
    
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        <label htmlFor="email">Email</label><br/>
        <input type="email" id="email" name="email" value={email} onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" value={password} onChange={changeHandler}/>
      </div>
      <div>
      <button type="submit" disabled={SubmitDisable}>Login</button>
      </div>
      <div>
      <button type="button" onClick={clearHandler}>Clear</button>
      </div>
    </form>
</center>

  );
};

export default InputForm;