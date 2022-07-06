import React from 'react'

export default function DisplayDetails(props) {
  return (
    <div>
      <ul>
{props.users.map(user=><h2>Username:-{user.name}<br/>Email Id:-{user.word}</h2>)}
{/* <ul>
  <li>usename-{props.user}</li>
  <li>password-{props.pass}</li>
</ul> */}
</ul>
    </div>
  )
}
//here create an array named "users" for sign in purpose