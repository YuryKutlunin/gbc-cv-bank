import { IProjectTechnology } from 'app/shared/model/project-technology.model';

export interface ITechnology {
  id?: number;
  technologyNm?: string;
  projecttechnologytechnologies?: IProjectTechnology[];
}

export const defaultValue: Readonly<ITechnology> = {};
