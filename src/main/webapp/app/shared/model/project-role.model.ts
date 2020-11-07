import { IEmployeeProject } from 'app/shared/model/employee-project.model';

export interface IProjectRole {
  id?: number;
  roleNm?: string;
  employeeprojectprojectroles?: IEmployeeProject[];
}

export const defaultValue: Readonly<IProjectRole> = {};
