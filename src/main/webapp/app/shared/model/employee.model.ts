import { Moment } from 'moment';
import { IEducation } from 'app/shared/model/education.model';
import { IEmployeeProject } from 'app/shared/model/employee-project.model';
import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';
import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';
import { IResourcePool } from 'app/shared/model/resource-pool.model';
import { IJobTitle } from 'app/shared/model/job-title.model';

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
  employees?: IEmployee[];
  educations?: IEducation[];
  employeeprojects?: IEmployeeProject[];
  employeecertifs?: IEmployeeCertif[];
  employeeskills?: IEmployeeSkill[];
  empl?: IEmployee;
  resourcePool?: IResourcePool;
  jobtitle?: IJobTitle;
}

export const defaultValue: Readonly<IEmployee> = {};
