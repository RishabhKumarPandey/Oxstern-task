import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 
function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  let location = useLocation();
  let navigate  = useNavigate();

  const { key, data } = location.state || {}
  console.log(key)
 
  const login = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (name && email && password){

      const userData = {
        name,
        email,
        password : "*****",
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      setIsLoggedin(true);
      setName('');
      setEmail('');
      setPassword('');

      navigate("app")
    }else{
      alert("fill all field")
    }
    }

 
 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>This is React WebApp </h1>
          <>
            <form action="">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                autoComplete='off'
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                autoComplete="off"
              />
              <button type="submit" onClick={login}>
                <Link state={{ key: key }} >LogIn</Link>
              </button>
            </form>
          </>
      </div>
    </>
  );
}
 
export default HomePage;