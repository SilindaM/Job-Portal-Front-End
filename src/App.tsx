import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Vacancy from './Models/Entities/Vacancy';
import { Header, List } from 'semantic-ui-react';


const apiEndpoint = 'https://localhost:7182/Vacancy';

function App() {
  const  [vacancies,setActivities] =useState([]);  useEffect(()=>{
    axios.get(apiEndpoint).then(response=>{
      setActivities(response.data)
    })
  },[])
  return (
  <>
     
    <Header icon='briefcase' as='h6'>Vacancies</Header>
      <ul>
        {
          vacancies.map((vacancy:Vacancy)=>(
            <List.Item key={vacancy.id}>
              {vacancy.vacancyTitle}
            </List.Item>
          ))
        }
      </ul>
  </>
  );
}

export default App;
