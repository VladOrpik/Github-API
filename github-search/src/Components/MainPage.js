import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import RepoInfo from './RepoInfo';

function MainPage() {
    const [inputValue, setinputValue] = React.useState("");
    const [repos, setRepos]= React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [userNameQuery, setUserNamrQuery]= React.useState(null);
   
  
  function Filter(){
     fetch(`https://api.github.com/search/repositories?q=${inputValue}${userNameQuery? ' user:' + userNameQuery:""}`, {
   
     })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      setRepos(data.items);
    })
    .catch(err=>{
      console.log(err)
      setIsLoading(false);
      setError(true);
    }) 
    return;
  }
  
   React.useEffect(()=>{
     if(!inputValue){
       return;
     }
     setIsLoading(true);
     Filter();
   },[inputValue])
   
   React.useEffect(()=>{
    Filter();
  
   },[userNameQuery])
  
    return (
      <div className='app'>
        <h1 align="center">GitHub Search</h1>
        <form onChange={evt=>{
        setinputValue(evt.target.value);
        }} >
        <input className='form__input' type="text" name="query" placeholder="Введите название репозитория"/>
        </form>
        <h2 align="center">Фильтрация</h2>
        <input  className='form__input2' onChange={evt=>{
        setUserNamrQuery(evt.target.value);
        }} type='text' name='query' placeholder="Введети полное имя пользователя"/>
        {isLoading ? <div className='loading'>Loading</div> : <ul>
          {repos ? 
          repos.map(repo=>{
            return (
                <div className='newli'>
            <Link  key={repo.id} to ={`/repo/${repo.id}`}>
               <a> {repo.name}</a>
               <p>{repo.description}</p>
               <p> Количество forks  = {repo.forks_count}</p>
            </Link> 
            </div>
            )
          }): null}
          
        </ul>}
          
  
      </div>
      
    );
  }
  export default MainPage;
  