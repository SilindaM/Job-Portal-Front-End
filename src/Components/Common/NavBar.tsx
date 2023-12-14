import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button, Container, Menu } from 'semantic-ui-react';

export interface INavBarProps {
openForm: ()=>void;
}


export function NavBar (props: INavBarProps) {
  return (
   <Menu inverted fixed='top'>
    <Container>
        <Menu.Item header>
            <img src='' alt='logo'/>
            Categories
        </Menu.Item>
        <Menu.Item name='Categories'/>
        <Menu.Item>
            <Button onClick={props.openForm} positive content='Create'/>
        </Menu.Item>
    </Container>
   </Menu>
  );
}
