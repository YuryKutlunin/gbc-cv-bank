import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';

export interface ICertificate {
  id?: number;
  idCertificate?: number;
  certificateNm?: string;
  certScopeNm?: string;
  employeecertifs?: IEmployeeCertif[];
}

export const defaultValue: Readonly<ICertificate> = {};
