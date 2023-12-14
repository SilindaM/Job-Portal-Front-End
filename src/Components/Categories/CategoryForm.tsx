import * as React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Category from '../../Models/Entities/Category';

export interface ICategoryFormProps {
  category:Category | undefined;
  closeForm: ()=>void;
}

export function CategoryForm (props: ICategoryFormProps) {
  return (
    <div style={{ marginTop: '20px' }}>
 <Segment clearing>
    <Form>
        <Form.Input placeholder='Name'></Form.Input>
        <Button floated='right' type='submit' content='Submit'></Button>
        <Button floated='right' onClick={props.closeForm} type='button' content='Cancel'></Button>
    </Form>
   </Segment>
    </div>
  
  );
}
