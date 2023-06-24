import { useImperativeHandle, useState } from "react";
import "./App.css"

function App() {
  // console.log(eval('03'))
  const str="+-/*";
  const st="0123456789"
  const [arr,setArr]=useState([]);
  const [b,setb]=useState(0);
  const[history,setHistory]=useState("");
  const [res,setRes]=useState(0);
  const sum=(val)=>{
    if(b!=0 ){if(str.includes(val)){setHistory(b +val);setb(0);return; }
    setHistory(val);
    setRes(val);
    setb(0);
return;    }
    if((history.length===0 && (str.includes(val))) || val==="=")return;
   
    
    if(history.length!=0){
      // if(str.includes(history[history.length-1]) && val==='0')
      if(st.includes(val) && ((history.length===1 && history[0]==='0') || (arr.length!=0 && str.includes(history[history.length-2])&& history[history.length-1]=='0'))){
        const s=history.substring(0,history.length-1)+val;
        console.log(s);
        setHistory(s);
        setRes(eval(s));
        return;
      }
     if(val==="."){
     const str2= arr.length===0?history:history.substring(arr[arr.length-1]+1,(history.length));
     console.log(str2)
     if(str2.includes("."))return ;
     else{
      if(str.includes(history[history.length-1]))setHistory(history+"0.");
     else {setHistory(history+".");
      setRes(eval(history+"."));}
     }
     return;
     }
     if(str.includes(val)){
      const str3=history.substring(0,history.length-1);
      if(str.includes(history[history.length-1]))setHistory(str3+val);
      else {
        setArr(arr=>[...arr,history.length]);
        setHistory(history+val);}
      
      return ;
     }
     setRes(eval(history+val));
    setHistory(history+val);
    }
    else {
      if(val==="."){setHistory("0.");setRes(0)}
      else { setRes(eval(history+val));
        setHistory(history+val);}
    }
    
     return;
     
  }
  const clear=()=>{
    setRes(0);
    setHistory("");
  }
  const del=()=>{
    if(history.length>=2){
      const str4=history.substring(0,history.length-1);
      setHistory(str4);
     if(str.includes(str4[str4.length-1]))setRes(eval(str4.substring(0,str4.length-1)));
     else setRes(eval(str4));
     return;
     
    }
    setRes(0);
    setHistory("");
  }
  const equal=()=>{
    if(history.length!==0){
      setHistory("");
      setb(res);
    }
  }
  return (
    <div >
     <div class="calculator">
    <div >
<div className="values">{history}</div>
<div className="result">{res}</div>

    </div>
    <div className="grid_container">
       <div onClick={()=>{clear()}} className="clear">AC</div>
       <div onClick={()=>{del()}}className="delete">DEL</div>
       <div onClick={()=>{sum("/")}} className="divide" value="/">/</div>
       <div onClick={()=>{sum("1")}} className="1" >1</div>
       <div onClick={()=>{sum("2")}} className="2">2</div>
       <div onClick={()=>{sum("3")}} className="3">3</div>
       <div  onClick={()=>{sum("*")}} className="*">*</div>
       <div onClick={()=>{sum("4")}} className="4">4</div>
       <div onClick={()=>{sum("5")}} className="5">5</div>
       <div onClick={()=>{sum("6")}} className="6">6</div>
       <div onClick={()=>{sum("+")}} className="+">+</div>
       <div onClick={()=>{sum("7")}} className="7">7</div>
       <div onClick={()=>{sum("8")}} className="8">8</div>
       <div onClick={()=>{sum("9")}} className="9">9</div>
       <div onClick={()=>{sum("-")}} className="-">-</div>
       <div onClick={()=>{sum(".")}} className=".">.</div>
       <div onClick={()=>{sum("0")}} className="0">0</div>
       <div onClick={()=>{equal()}} className="res">Result</div>
       
       
    </div>
     </div>
     <div>
      
     </div>
    </div>
  );
}

export default App;
  