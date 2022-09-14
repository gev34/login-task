import Button from './Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [email , setEmail] = useState();
  const [pw , setPw] = useState() 


  return (
    <div className="App">
       <form>
        <input type = "email" onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <input type = "password" onChange={(e) => {
          setPw(e.target.value)}}/>
        <Button onClick = {(e) => {
          e.preventDefault()
        }}
        />
       </form>
    </div>
  );
}

export default App;
