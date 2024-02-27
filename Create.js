import React,{useState} from 'react'
import  './InputForm.css';


const App=()=>{
  const[data,setData]=useState({
    firstname:"",
    lastname:"",
    gender:"",
    email:""

  })
  const {firstname,lastname,gender,email}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(data)
  }
  const clearHandler = () => {
    
    setData({
      firstname: '',
      lastname:'',
      gender:'',
      email:''
    });
  };

  const SubmitDisable = !firstname || !lastname || !gender || !email ;
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>

          <div>
            <label htmlFor="firstname">First Name</label><br/>
            <input type="text" name="firstname" value={firstname} onChange={changeHandler} /><br/>
          </div>

          <div>
            <label htmlFor="lastname">Last Name</label><br/>
            <input type="text" name="lastname" value={lastname} onChange={changeHandler}/><br/> <br/>
          </div>
            
          <div>
            <label htmlFor="gender">Gender</label><br/>
            <select id="gender" name="gender" value={gender} onChange={changeHandler}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
              <label htmlFor="email">Email</label><br/>
              <input type="email" id="email" name="email" value={email} onChange={changeHandler} />
          </div>
          <div>
          <button type="submit" disabled={SubmitDisable}>Submit</button>
          </div>
          <button type="button" onClick={clearHandler}>Clear</button>
        </form>
      </center>
    </div>
  )
}
  export default App;