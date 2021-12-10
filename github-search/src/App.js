import React from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = React.useState("")

 React.useEffect(()=>{
   if(!inputValue){
     return;
   }

   fetch('https://api.github.com/search/repositories?q='+ inputValue)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
 },[inputValue])

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
