
import { useState } from 'react'; 

function Suma() {

  const [result,setresult] = useState(Number)
  // acá va la logica
  const [num1,setnum1] = useState(Number);
  const [num2,setnum2] = useState(Number);
  function suma (){
    setresult(num1+num2) 
}
    return (

// acá ca todo lo q es html

    <div>
        <h1> componente sumar </h1>
        <input type="number"  onChange={(event)=>{
          setnum1(parseInt(event.target.value))
          
        }}/> 
        <input type="number"  onChange={(event)=>{
          setnum2(parseInt(event.target.value))

        }
        
        }/> 
        <button onClick={suma}>calcular</button>
        <div>{result}</div>
               
    </div>
  )
}

export default Suma