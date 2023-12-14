import * as React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import Category from '../../Models/Entities/Category';

export interface ICategoryDetailsProps {
    category: Category;
    cancelSelectedCategory: () => void;
    openForm:(id:number)=>void;

}

export function CategoryDetails(categoryProps: ICategoryDetailsProps) {
    return (
        // Use a div with inline styles to apply margin-top
        <div style={{ marginTop: '200px' }}>
            <Card fluid>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                    <Card.Header>{categoryProps.category.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{categoryProps.category.name}</span>
                    </Card.Meta>
                    <Card.Description>
                        {categoryProps.category.name}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button basic onClick={()=> categoryProps.openForm(categoryProps.category.id)} color='blue' content='Edit' />
                        <Button basic color='orange' content='Cancel' onClick={categoryProps.cancelSelectedCategory} />
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    );
}
