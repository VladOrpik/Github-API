import React from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = React.useState("")
  console.log(inputValue)
 React.useEffect(()=>{
   if(!inputValue){
     console.log("введите запрос")
   }
 })

  return (
    <div className='app'>
      <form onSubmit={evt=>{
        evt.preventDefault();
        setinputValue(evt.target.elements.query.value);
      }} >
      <input className='form__input' type="text" name="query" placeholder="Поиск"/>
      </form>
    </div>
  );
}

export default App;
