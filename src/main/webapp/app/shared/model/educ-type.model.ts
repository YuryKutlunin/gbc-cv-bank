import { IEducation } from 'app/shared/model/education.model';

export interface IEducType {
  id?: number;
  educTypeNm?: string;
  educationeductypes?: IEducation[];
}

export const defaultValue: Readonly<IEducType> = {};
