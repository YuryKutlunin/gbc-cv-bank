import { Moment } from 'moment';
import { IResourcePool } from 'app/shared/model/resource-pool.model';

export interface IEmployee {
  id?: number;
  firstNm?: string;
  lastNm?: string;
  middleNm?: string;
  email?: string;
  phoneNum?: string;
  workType?: string;
  birthDt?: string;
  idTitle?: number;
  resourcePoolCode?: string;
  emailCurator?: string;
  resourcepool?: IResourcePool;
}

export const defaultValue: Readonly<IEmployee> = {};
