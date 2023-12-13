import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Vacancy from '../Models/Entities/Vacancy';
import { Header, List } from 'semantic-ui-react';
import { NavBar } from '../Components/NavBar';


const apiEndpoint = 'https://localhost:7182/Vacancy';

function App() {
  const  [vacancies,setActivities] =useState<Vacancy[]>([]); 
   useEffect(()=>{
    axios.get(apiEndpoint).then(response=>{
      setActivities(response.data)
    })
  },[])
  return (
  <>
     <NavBar/>
      <List>
        {
          vacancies.map((vacancy:Vacancy)=>(
            <List.Item key={vacancy.id}>
              {vacancy.vacancyTitle}
            </List.Item>
          ))
        }
      </List>
  </>
  );
}

export default App;
