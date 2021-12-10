import React from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = React.useState("");
  const [repos, setRepos]= React.useState([]);

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
    setRepos(data.items);
  });
 },[inputValue])
 console.log(repos);

  return (
    <div className='app'>
      <form onSubmit={evt=>{
        evt.preventDefault();
        setinputValue(evt.target.elements.query.value);
      }} >
      <input className='form__input' type="text" name="query" placeholder="Поиск"/>
      </form>
      <ul>
        {repos.map(repo=>{
          return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
