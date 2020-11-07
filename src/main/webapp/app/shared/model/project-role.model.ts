import { IEmployeeProject } from 'app/shared/model/employee-project.model';

export interface IProjectRole {
  id?: number;
  idRole?: number;
  roleNm?: string;
  employeeprojects?: IEmployeeProject[];
}

export const defaultValue: Readonly<IProjectRole> = {};
