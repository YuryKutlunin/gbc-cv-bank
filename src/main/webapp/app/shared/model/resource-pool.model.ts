import { IEmployee } from 'app/shared/model/employee.model';

export interface IResourcePool {
  id?: number;
  resourcePoolNm?: string;
  poolLeader?: string;
  employeeresourcepools?: IEmployee[];
}

export const defaultValue: Readonly<IResourcePool> = {};
