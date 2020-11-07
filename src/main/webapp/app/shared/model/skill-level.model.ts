import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';

export interface ISkillLevel {
  id?: number;
  idLevel?: number;
  levelDesc?: string;
  employeeskills?: IEmployeeSkill[];
}

export const defaultValue: Readonly<ISkillLevel> = {};
