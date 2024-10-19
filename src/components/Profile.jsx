import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Profile () {
    const [SearchParams] = useSearchParams();
    const name= SearchParams.get("name");
    const age= SearchParams.get("age");
    console.log(name,age);
  return (
    <div>profile page is loaded... 
      { name && <div>Hi, {name} you are {age} years old.</div>}
    </div>
  )
}

export default Profile 