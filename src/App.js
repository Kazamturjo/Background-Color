import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[color,setColor]= useState("olive")
  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-5 px-2 '> 
       <div className='flex-flex-wrap justify-center
       bg-white rounded-3xl gap-3 shadow-lg px-5 py-2 '> 
       <button onClick ={()=> setColor("red")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"red"}}>Red</button>
       <button onClick ={()=> setColor("green")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"Green"}}>Green</button>
       <button onClick ={()=> setColor("blue")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"blue"}}>Blue</button>
       <button onClick ={()=> setColor("gray")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"gray"}}>Gray</button>
       <button onClick ={()=> setColor("Purple")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"Purple"}}>Purple</button>
       <button onClick ={()=> setColor("orange")}
        className="outline-none px-4 rounded-full text-white shadow-lg py-1"
       style={{backgroundColor:"orange"}}>Orange</button>

       
       
       </div>
      </div>
   </div>
  );
}

export default App;
