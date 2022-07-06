import React,{useState} from 'react'
import './SignInForm.css'
export default function SignInForm(props) {
  const [pass,setpass]=useState('');
const [disable,setenability]=React.useState(false);

    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const generatePassword=()=>{//function to randomly generate password
      if(username.trim().length===0 || password.trim().length===0)
      {
        return;
      }
  const randomPassword=Math.random().toString(36).slice(2);
  setpass(randomPassword);
     };
    const change_in_username=(event)=>{
        setusername(event.target.value);
    }
    const change_in_password=(event)=>{
        setpassword(event.target.value);
    }
const clickme=(event)=>{
    event.preventDefault();
    if(username.trim().length===0 || password.trim().length===0)
    {
      alert("Please enter details properly");
    }
    else{
  props.onSignIn(username,password);//this is the main line that displays data on the screen
  alert(`Scroll down to see PASSWORD allocated to you.Positively do not share with anyone.`);
  setenability(true);
    }
setusername('');
setpassword('');
};
 return (
    <div>
         <h2>Sign In</h2>
        <form onSubmit={clickme}>
        
        <div className="form_1">
        <br/>
        <br/>
            <input type='text' className='username' placeholder='Username' value={username} onChange={change_in_username}/>
            <br/><br/><br/>
            <input type='email' className='email' placeholder='Email Id' value={password} onChange={change_in_password}/>
            <br/><br/><br/>
            <button type='submit' className='btn' value='submit' disabled={disable} onClick={generatePassword}>Sign In</button>
            </div>
        </form>
        <br/>
        <br/>
        <div className="password">{pass}</div>
        
        {/* <br/>
        <br/> */}
       
        {/* <ul>
        <li>{username}</li>
        <li>{password}</li>
    </ul> */}
    </div>
  )
  }
