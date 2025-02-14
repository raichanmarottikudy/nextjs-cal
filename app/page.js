'use client'

import { useState } from "react";

export default function Home() {
  const[result,setResult]= useState('')
  const handleClick =(value)=>{
    if (value === '=') {
      try {
          setResult(eval(result) || '');
      } catch (error) {
          setResult('Error');
      }
  } else if (value === 'C') {
      setResult('');
  } else if (value === 'CE') {
      setResult(result.slice(0, -1));
  } else {
      setResult(result + value);
  }
};
  
   
    return (
      <div className="flex min-h-screen flex-col items-center  p-24">
        <h1 className="text-4xl">Calculator</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
          <input type="text" className="w-full mb-2 border-gray-400 focus:outline-none text-4xl" value={result} readOnly/>
          <div className="grid grid-cols-4 gap-2 border-grey-400">
          <button onClick={() =>
                          handleClick('7')} className="bg-stone-100 text-2xl">7</button>
                      <button onClick={() =>
                          handleClick('8')} className="bg-stone-100 text-2xl">8</button>
                      <button onClick={() =>
                          handleClick('9')} className="bg-stone-100 text-2xl">9</button>
                      <button className="operator bg-stone-100 text-2xl" onClick={() =>
                          handleClick('CE')}>CE</button>
  
  
                      <button onClick={() => 
                          handleClick('4')} className="bg-stone-100 text-2xl">4</button>
                      <button onClick={() => 
                          handleClick('5')} className="bg-stone-100 text-2xl">5</button>
                      <button onClick={() => 
                          handleClick('6')} className="bg-stone-100 text-2xl">6</button>
                      <button className="operator bg-stone-100 text-2xl" onClick={() => 
                          handleClick('/')}>/</button>
  
  
                      <button onClick={() => 
                          handleClick('1')} className="bg-stone-100 text-2xl">1</button>
                      <button onClick={() => 
                          handleClick('2')} className="bg-stone-100 text-2xl">2</button>
                      <button onClick={() => 
                          handleClick('3')} className="bg-stone-100 text-2xl">3</button>
                      <button className="operator bg-stone-100 text-2xl" onClick={() => 
                          handleClick('*')}>*</button>
  
  
                      <button onClick={() => 
                          handleClick('0')} className="bg-stone-100 text-2xl">0</button>
                      <button onClick={() => 
                          handleClick('.')} className="bg-stone-100 text-2xl">.</button>
                      <button onClick={() => 
                          handleClick('00')} className="bg-stone-100 text-2xl">00</button>
  
                      <button className="operator bg-stone-100 text-2xl" onClick={() => 
                          handleClick('-')} >-</button>
                      <button className="operator wide bg-stone-100 text-2xl" id='clear' onClick={() => 
                          handleClick('C')}>C</button>
  
                      <button className="operator bg-stone-100 text-2xl" onClick={() => 
                          handleClick('=')}>=</button>
  
                      <button className="operator bg-stone-100 text-2xl col-span-2" onClick={() => 
                          handleClick('+')}>+</button>
          </div>
        </div>
      </div>
  );
}
