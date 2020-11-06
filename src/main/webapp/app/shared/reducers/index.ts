import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import employee, {
  EmployeeState
} from 'app/entities/employee/employee.reducer';
// prettier-ignore
import resourcePool, {
  ResourcePoolState
} from 'app/entities/resource-pool/resource-pool.reducer';
// prettier-ignore
import jobTitle, {
  JobTitleState
} from 'app/entities/job-title/job-title.reducer';
// prettier-ignore
import education, {
  EducationState
} from 'app/entities/education/education.reducer';
// prettier-ignore
import university, {
  UniversityState
} from 'app/entities/university/university.reducer';
// prettier-ignore
import educType, {
  EducTypeState
} from 'app/entities/educ-type/educ-type.reducer';
// prettier-ignore
import project, {
  ProjectState
} from 'app/entities/project/project.reducer';
// prettier-ignore
import projectTechnology, {
  ProjectTechnologyState
} from 'app/entities/project-technology/project-technology.reducer';
// prettier-ignore
import technology, {
  TechnologyState
} from 'app/entities/technology/technology.reducer';
// prettier-ignore
import employeeProject, {
  EmployeeProjectState
} from 'app/entities/employee-project/employee-project.reducer';
// prettier-ignore
import projectRole, {
  ProjectRoleState
} from 'app/entities/project-role/project-role.reducer';
// prettier-ignore
import certificate, {
  CertificateState
} from 'app/entities/certificate/certificate.reducer';
// prettier-ignore
import employeeCertif, {
  EmployeeCertifState
} from 'app/entities/employee-certif/employee-certif.reducer';
// prettier-ignore
import skill, {
  SkillState
} from 'app/entities/skill/skill.reducer';
// prettier-ignore
import employeeSkill, {
  EmployeeSkillState
} from 'app/entities/employee-skill/employee-skill.reducer';
// prettier-ignore
import skillLevel, {
  SkillLevelState
} from 'app/entities/skill-level/skill-level.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly employee: EmployeeState;
  readonly resourcePool: ResourcePoolState;
  readonly jobTitle: JobTitleState;
  readonly education: EducationState;
  readonly university: UniversityState;
  readonly educType: EducTypeState;
  readonly project: ProjectState;
  readonly projectTechnology: ProjectTechnologyState;
  readonly technology: TechnologyState;
  readonly employeeProject: EmployeeProjectState;
  readonly projectRole: ProjectRoleState;
  readonly certificate: CertificateState;
  readonly employeeCertif: EmployeeCertifState;
  readonly skill: SkillState;
  readonly employeeSkill: EmployeeSkillState;
  readonly skillLevel: SkillLevelState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  employee,
  resourcePool,
  jobTitle,
  education,
  university,
  educType,
  project,
  projectTechnology,
  technology,
  employeeProject,
  projectRole,
  certificate,
  employeeCertif,
  skill,
  employeeSkill,
  skillLevel,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
});

export default rootReducer;
