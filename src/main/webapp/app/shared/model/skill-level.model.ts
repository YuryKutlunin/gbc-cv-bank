import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';

export interface ISkillLevel {
  id?: number;
  levelDesc?: string;
  employeeskillskilllevels?: IEmployeeSkill[];
}

export const defaultValue: Readonly<ISkillLevel> = {};
