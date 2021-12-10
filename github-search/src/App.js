import React from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = React.useState("");
  const [repos, setRepos]= React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

 React.useEffect(()=>{
   if(!inputValue){
     return;
   }
   
   setIsLoading(true);

   fetch('https://api.github.com/search/repositories?q='+ inputValue)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    setIsLoading(false);
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
      
      {isLoading ? <div>Loading</div> : null}

      <ul>
        {repos.map(repo=>{
          return <li key={repo.id}>
             <a href={repo.html_url}> {repo.name}</a>
             <p>{repo.description}</p>
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
