import React, { useEffect, useState } from 'react'

const Data = () => {
    const [user, setUser] = useState([]);
    const [value, setValue] = useState()
    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((data) => setUser(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

      const getData = () => {
        return fetch("https://jsonplaceholder.typicode.com/albums")
              .then((response) => response.json())
              .then((data) => setValue(data));
      }
    
      useEffect(() => {
        getData();
      },[])
    
  return (
    <>
    <div>
    <h1>Data Fetch of First API</h1>
    <main>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
     </div>
     <h1>Data Fetch of Secound Await</h1>
     <main>
     <ul>
        {value && value.length > 0 && value.map((valueObj, index) => (
            <li key={valueObj.id}>{valueObj.title}</li>
          ))}
      </ul>
    </main>
</>
      
  )
}

export default Data