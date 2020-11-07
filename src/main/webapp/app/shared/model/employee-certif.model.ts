import { Moment } from 'moment';
import { IEmployee } from 'app/shared/model/employee.model';
import { ICertificate } from 'app/shared/model/certificate.model';

export interface IEmployeeCertif {
  id?: number;
  email?: string;
  idCertificate?: number;
  startDt?: string;
  endDt?: string;
  employee?: IEmployee;
  certificate?: ICertificate;
}

export const defaultValue: Readonly<IEmployeeCertif> = {};
