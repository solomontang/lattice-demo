import React, { PureComponent } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

class MenuBar extends PureComponent {

  render() {
    return (
      <Menu pointing secondary color='purple'>
        <Menu.Item header>OpenLattice</Menu.Item>
        {/* <Menu.Item as={NavLink} to='/propertyTypes' name='Property Types'/>
        <Menu.Item as={NavLink} to='/entityTypes' name='Entity Types'/> */}
        <Menu.Item as={NavLink} to='/associationTypes' name='Association Types'/>
      </Menu>
    )
  }
}

export default withRouter(MenuBar);