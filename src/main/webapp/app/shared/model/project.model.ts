import { Moment } from 'moment';
import { IProjectTechnology } from 'app/shared/model/project-technology.model';
import { IEmployeeProject } from 'app/shared/model/employee-project.model';

export interface IProject {
  id?: number;
  projectNm?: string;
  companyNM?: string;
  startDt?: string;
  endDt?: string;
  projecttechnologyprojects?: IProjectTechnology[];
  employeeprojectprojects?: IEmployeeProject[];
}

export const defaultValue: Readonly<IProject> = {};
