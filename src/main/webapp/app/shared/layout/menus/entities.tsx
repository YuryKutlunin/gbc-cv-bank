import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/employee">
      Employee
    </MenuItem>
    <MenuItem icon="asterisk" to="/resource-pool">
      Resource Pool
    </MenuItem>
    <MenuItem icon="asterisk" to="/job-title">
      Job Title
    </MenuItem>
    <MenuItem icon="asterisk" to="/education">
      Education
    </MenuItem>
    <MenuItem icon="asterisk" to="/university">
      University
    </MenuItem>
    <MenuItem icon="asterisk" to="/educ-type">
      Educ Type
    </MenuItem>
    <MenuItem icon="asterisk" to="/project">
      Project
    </MenuItem>
    <MenuItem icon="asterisk" to="/project-technology">
      Project Technology
    </MenuItem>
    <MenuItem icon="asterisk" to="/technology">
      Technology
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee-project">
      Employee Project
    </MenuItem>
    <MenuItem icon="asterisk" to="/project-role">
      Project Role
    </MenuItem>
    <MenuItem icon="asterisk" to="/certificate">
      Certificate
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee-certif">
      Employee Certif
    </MenuItem>
    <MenuItem icon="asterisk" to="/skill">
      Skill
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee-skill">
      Employee Skill
    </MenuItem>
    <MenuItem icon="asterisk" to="/skill-level">
      Skill Level
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
