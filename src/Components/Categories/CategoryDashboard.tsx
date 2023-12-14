import * as React from 'react';
import { Grid, List } from 'semantic-ui-react';
import Category from '../../Models/Entities/Category';
import { CategoryList } from './CategoryList';
import { CategoryDetails } from './CategoryDetails';
import { CategoryForm } from './CategoryForm';

export interface ICategoryDashboardProps {
    categories : Category[];
    selectedCategory: Category | undefined;
    selectCategory: (id:number)=>void;
    cancelSelectedCategory:()=>void;
    editMode:boolean;
    openForm:(id:number)=>void;
    closeForm:()=>void;

}

export function CategoryDashboard (props: ICategoryDashboardProps) {
  return (
    <div>
      <Grid>
      <Grid.Column width='10'>
         <CategoryList categories={props.categories} selectCategory={props.selectCategory}/>
      </Grid.Column>
      <Grid.Column width='6'>
        { props.selectedCategory  && !props.editMode &&
         <CategoryDetails category={props.selectedCategory} cancelSelectedCategory={props.cancelSelectedCategory}
         openForm={props.openForm} />}
         {props.editMode&&
         <CategoryForm closeForm={props.closeForm} category={props.selectedCategory}/>}
      </Grid.Column>
      </Grid>
    </div>
  );
}
