import { IEmployee } from 'app/shared/model/employee.model';
import { ISkill } from 'app/shared/model/skill.model';
import { ISkillLevel } from 'app/shared/model/skill-level.model';

export interface IEmployeeSkill {
  id?: number;
  email?: string;
  idSkill?: number;
  idLevel?: number;
  employee?: IEmployee;
  skill?: ISkill;
  skillLevel?: ISkillLevel;
}

export const defaultValue: Readonly<IEmployeeSkill> = {};
