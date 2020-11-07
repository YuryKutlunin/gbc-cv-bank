import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';

export interface ICertificate {
  id?: number;
  certificateNm?: string;
  certScopeNm?: string;
  employeecertifcertificates?: IEmployeeCertif[];
}

export const defaultValue: Readonly<ICertificate> = {};
