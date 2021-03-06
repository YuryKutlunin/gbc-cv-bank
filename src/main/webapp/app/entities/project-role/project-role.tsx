import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './project-role.reducer';
import { IProjectRole } from 'app/shared/model/project-role.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProjectRoleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ProjectRole = (props: IProjectRoleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { projectRoleList, match, loading } = props;
  return (
    <div>
      <h2 id="project-role-heading">
        Project Roles
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Project Role
        </Link>
      </h2>
      <div className="table-responsive">
        {projectRoleList && projectRoleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Role Nm</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {projectRoleList.map((projectRole, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${projectRole.id}`} color="link" size="sm">
                      {projectRole.id}
                    </Button>
                  </td>
                  <td>{projectRole.roleNm}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${projectRole.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${projectRole.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${projectRole.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Project Roles found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ projectRole }: IRootState) => ({
  projectRoleList: projectRole.entities,
  loading: projectRole.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRole);
