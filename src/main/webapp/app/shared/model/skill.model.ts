import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';

export interface ISkill {
  id?: number;
  idSkill?: number;
  skillNm?: string;
  employeeskills?: IEmployeeSkill[];
}

export const defaultValue: Readonly<ISkill> = {};
