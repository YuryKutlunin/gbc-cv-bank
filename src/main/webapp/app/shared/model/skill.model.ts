import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';

export interface ISkill {
  id?: number;
  skillNm?: string;
  employeeskillskills?: IEmployeeSkill[];
}

export const defaultValue: Readonly<ISkill> = {};
