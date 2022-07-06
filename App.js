import React,{useState} from 'react';
import './App.css';
import DisplayDetails from './Components/DisplayDetails';
import MainContent from './Components/MainContent';
import Navbar from './Components/Navbar';
import SignInForm from './Components/SignInForm';
function App() {
  const [user,seetuser]=useState([]);
  const SignInHandeler=(Username,Password)=>{
seetuser(prev=>{
  return [...prev,{name:Username,word:Password}];
});
  };
  return (
    <>
<Navbar/>
<MainContent/>
<br/>
<br/>
<SignInForm onSignIn={SignInHandeler}/>
{/* <GeneratePassword genp={generateP}/> */}
<DisplayDetails users={user}/>
    </>
  );
}

export default App;
