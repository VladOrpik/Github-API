import React from 'react';
import {useParams} from "react-router-dom";
import '../Components/Repo-info.css'
import { useState, useEffect } from 'react';

const RepoInfo = () =>
{
    const {id}= useParams();
    
    const [repos, setRepos]= React.useState(null);

    React.useEffect(()=>{
        fetch(`https://api.github.com/repositories/${id}}`, {
        })
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         console.log(data);
         setRepos(data)
        
       })
       .catch(err=>{
         console.log(err)
      
       }) 
      
       },[id])
    
    return (
        <div className='newPage'>
            {repos ?  <div className='asd'>
                    <h1>{repos.name}</h1>
                    <ul>
                        <li>{repos.url}</li>
                        <li>{repos.visibility}</li>
                        <li>{repos.node_id}</li>
                        <li>{repos.watchers}</li>
                    </ul>

                </div>
                :console.log(id) }
        </div>
    )
}


export default RepoInfo;