import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Vacancy from '../Models/Entities/Vacancy';
import { Container, Header, List } from 'semantic-ui-react';
import { NavBar } from '../Components/Common/NavBar';
import { CategoryDashboard } from '../Components/Categories/CategoryDashboard';
import Category from '../Models/Entities/Category';



const apiEndpoint = 'https://localhost:7182/Category';

function App() {
  const  [categories,setCategories] =useState<Category[]>([]); 
 const [selectedCategory,setSelectedCategory] = useState<Category | undefined>(undefined);
 const [editMode,setEditMode]= useState(false);

   useEffect(()=>{
    axios.get(apiEndpoint).then(response=>{
      setCategories(response.data)
    })
  },[])

  function handleSelectedCategory(id:number){
      setSelectedCategory(categories.find(x=>x.id===id));
  }
  function handleCancelCatetegory(){
     setSelectedCategory(undefined);
  }
  function handleFormOpen(id?:number){
      id? handleSelectedCategory(id): handleCancelCatetegory();
      setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }
  return (
  <>
     <NavBar openForm={handleFormOpen}/>
     <Container>
      <CategoryDashboard categories={categories} 
      selectCategory={handleSelectedCategory}
      cancelSelectedCategory={handleCancelCatetegory}
      selectedCategory={selectedCategory}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose} />
     </Container>
  </>
  );
}

export default App;
