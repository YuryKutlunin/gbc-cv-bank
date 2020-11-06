import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './project-technology.reducer';
import { IProjectTechnology } from 'app/shared/model/project-technology.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProjectTechnologyProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ProjectTechnology = (props: IProjectTechnologyProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { projectTechnologyList, match, loading } = props;
  return (
    <div>
      <h2 id="project-technology-heading">
        Project Technologies
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Project Technology
        </Link>
      </h2>
      <div className="table-responsive">
        {projectTechnologyList && projectTechnologyList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Id Project</th>
                <th>Id Technology</th>
                <th>Project</th>
                <th>Technology</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {projectTechnologyList.map((projectTechnology, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${projectTechnology.id}`} color="link" size="sm">
                      {projectTechnology.id}
                    </Button>
                  </td>
                  <td>{projectTechnology.idProject}</td>
                  <td>{projectTechnology.idTechnology}</td>
                  <td>
                    {projectTechnology.project ? (
                      <Link to={`project/${projectTechnology.project.id}`}>{projectTechnology.project.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {projectTechnology.technology ? (
                      <Link to={`technology/${projectTechnology.technology.id}`}>{projectTechnology.technology.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${projectTechnology.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${projectTechnology.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${projectTechnology.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Project Technologies found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ projectTechnology }: IRootState) => ({
  projectTechnologyList: projectTechnology.entities,
  loading: projectTechnology.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTechnology);
