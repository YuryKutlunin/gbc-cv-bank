import { IEmployee } from 'app/shared/model/employee.model';

export interface IResourcePool {
  id?: number;
  resourcePoolCode?: string;
  resourcePoolNm?: string;
  poolLeader?: string;
  employees?: IEmployee[];
}

export const defaultValue: Readonly<IResourcePool> = {};
