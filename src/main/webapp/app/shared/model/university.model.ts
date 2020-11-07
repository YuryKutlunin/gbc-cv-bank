import { IEducation } from 'app/shared/model/education.model';

export interface IUniversity {
  id?: number;
  univerNm?: string;
  educationuniversities?: IEducation[];
}

export const defaultValue: Readonly<IUniversity> = {};
