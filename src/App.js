
import './App.css';




import React ,{useEffect, useState} from 'react';



function App() 
{
  const [value,setValue]=useState('');


 
  const [theme,setTheme]=useState(false);
  const handleClick=()=>{
    setTheme(!theme)
  }
  useEffect(()=>{
    if(theme==true)
    {
      document.body.classList.add("dark");
    }
    else
    {
      document.body.classList.remove("dark");
    }
  })
  return (
  
  <>
  
  <div className='container'>

  
    <div className='calculator'>
      <h3 style={{color:'white'}}>CALC</h3>
     <button onClick={handleClick}>TOGGLE</button>
     <br></br>

      <form action="">
        <div className="display">
          <input type="text " value={value}/>
        </div>

        <div>
          <input type="button " value="AC"  onClick={e=>setValue(' ')}/>
          <input type="button " value="DEL"  onClick={e=>setValue(value.slice(0,-1))}/>
          <input type="button " value="."  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="/"  onClick={e=>setValue(value+e.target.value)}/>
        </div>

        <div>
          <input type="button " value="7" onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="8"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="9"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="*"  onClick={e=>setValue(value+e.target.value)}/>
        </div>

        <div>
          <input type="button " value="4"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="5"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="6"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="+"  onClick={e=>setValue(value+e.target.value)}/>
        </div>
        <div>
          <input type="button " value="1"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="2"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="3"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="-"  onClick={e=>setValue(value+e.target.value)}/>
        </div>

        <div>
          <input type="button " value="00"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="0"  onClick={e=>setValue(value+e.target.value)}/>
          <input type="button " value="=" className='equal'  onClick={e=> setValue(eval(value))}/>
        </div>

      </form>

    </div>
  </div>

  
  
  
  
  </>
   
  );
}

export default App;
