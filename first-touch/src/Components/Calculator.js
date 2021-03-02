import React, {useState} from "react";


//hooks só podem ser usados em function components
//não funcionam em class components
// os hooks correm ordenadamente
// tem de estar dentro da função

//useState(4) default state 4
//const [count, setCount] = useState(4) primeiro indice é o valor associado / o segundo indice serve para associar um valor
function Calculator() {

    const [count, setCount] = useState(4);

    function decrement() {
      setCount(count - 1);
    }

    function increment() {
        setCount(count + 1);
    }

  return (
    <div>
      <button onClick={decrement}> - </button> 
      <span> {count} </span>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Calculator;
