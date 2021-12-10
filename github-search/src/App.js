import React from 'react';
import './App.css';

function App() {
  const [inputValue, setinputValue] = React.useState("");
  const [repos, setRepos]= React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const token = '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';
 React.useEffect(()=>{
   if(!inputValue){
     return;
   }
   
   setIsLoading(true);

   fetch('https://api.github.com/search/repositories?q='+ inputValue, {
    headers: {
      Authorization: `token ${token}`
    }
   })
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
      <h1 align="center">GitHub Search</h1>
      <form onChange={evt=>{
        evt.preventDefault();
        setinputValue(evt.target.value);
      }} >
      <input className='form__input' type="text" name="query" placeholder="Поиск"/>
      </form>
      
      {isLoading ? <div className='loading'>Loading</div> : <ul>
        {repos ? 
        repos.map(repo=>{
          return <li key={repo.id}>
             <a  href={repo.html_url}> {repo.name}</a>
             <p>{repo.description}</p>
             <p> Количество  = {repo.forks_count}</p>
          </li>
        }): null}
        
      </ul>}

  
    </div>
  );
}

export default App;
