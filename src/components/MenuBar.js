import React, { PureComponent } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import OpenLatticeLogo from "../assets/images/logo_and_name.png";

const MenuBar = () => (
  <Menu pointing secondary color='violet'>
    <Menu.Item >
      <Image src={OpenLatticeLogo} size='small'/>
    </Menu.Item>
    <Menu.Item as={NavLink} to='/entityTypes' name='Entity Types'/>
    <Menu.Item as={NavLink} to='/associationTypes' name='Association Types'/>
  </Menu>
)

export default withRouter(MenuBar);