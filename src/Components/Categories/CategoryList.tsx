import * as React from 'react';
import Category from '../../Models/Entities/Category';
import { Button, Item } from 'semantic-ui-react';

export interface ICategoryListProps {
    categories: Category[];
    selectCategory: (id: number) => void;
}

export function CategoryList(props: ICategoryListProps) {
    return (
        <div style={{ marginTop: '80px' }}>
            <Item.Group divided>
                {props.categories.map(category => (
                    <Item key={category.id}>
                        <Item.Content>
                            <Item.Header as='a'>{category.name}</Item.Header>
                            <Item.Header as='a'>{category.name}</Item.Header>
                            <Item.Header as='a'>{category.name}</Item.Header>
                        </Item.Content>
                        <Item.Extra>
                            <Button
                                onClick={() => props.selectCategory(category.id)}
                                floated='right'
                                content='View'
                                color='blue'
                            />
                        </Item.Extra>
                    </Item>
                ))}
            </Item.Group>
        </div>
    );
}
