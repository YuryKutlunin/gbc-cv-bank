import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Employee from './employee';
import ResourcePool from './resource-pool';
import JobTitle from './job-title';
import Education from './education';
import University from './university';
import EducType from './educ-type';
import Project from './project';
import ProjectTechnology from './project-technology';
import Technology from './technology';
import EmployeeProject from './employee-project';
import ProjectRole from './project-role';
import Certificate from './certificate';
import EmployeeCertif from './employee-certif';
import Skill from './skill';
import EmployeeSkill from './employee-skill';
import SkillLevel from './skill-level';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}employee`} component={Employee} />
      <ErrorBoundaryRoute path={`${match.url}resource-pool`} component={ResourcePool} />
      <ErrorBoundaryRoute path={`${match.url}job-title`} component={JobTitle} />
      <ErrorBoundaryRoute path={`${match.url}education`} component={Education} />
      <ErrorBoundaryRoute path={`${match.url}university`} component={University} />
      <ErrorBoundaryRoute path={`${match.url}educ-type`} component={EducType} />
      <ErrorBoundaryRoute path={`${match.url}project`} component={Project} />
      <ErrorBoundaryRoute path={`${match.url}project-technology`} component={ProjectTechnology} />
      <ErrorBoundaryRoute path={`${match.url}technology`} component={Technology} />
      <ErrorBoundaryRoute path={`${match.url}employee-project`} component={EmployeeProject} />
      <ErrorBoundaryRoute path={`${match.url}project-role`} component={ProjectRole} />
      <ErrorBoundaryRoute path={`${match.url}certificate`} component={Certificate} />
      <ErrorBoundaryRoute path={`${match.url}employee-certif`} component={EmployeeCertif} />
      <ErrorBoundaryRoute path={`${match.url}skill`} component={Skill} />
      <ErrorBoundaryRoute path={`${match.url}employee-skill`} component={EmployeeSkill} />
      <ErrorBoundaryRoute path={`${match.url}skill-level`} component={SkillLevel} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
