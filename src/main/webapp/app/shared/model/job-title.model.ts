import { IEmployee } from 'app/shared/model/employee.model';

export interface IJobTitle {
  id?: number;
  titleNM?: string;
  employeejobtitles?: IEmployee[];
}

export const defaultValue: Readonly<IJobTitle> = {};
