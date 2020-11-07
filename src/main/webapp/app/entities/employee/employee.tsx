import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './employee.reducer';
import { IEmployee } from 'app/shared/model/employee.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Employee = (props: IEmployeeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { employeeList, match, loading } = props;
  return (
    <div>
      <h2 id="employee-heading">
        Employees
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Employee
        </Link>
      </h2>
      <div className="table-responsive">
        {employeeList && employeeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Nm</th>
                <th>Last Nm</th>
                <th>Middle Nm</th>
                <th>Email</th>
                <th>Phone Num</th>
                <th>Work Type</th>
                <th>Birth Dt</th>
                <th>Email Curator</th>
                <th>Resource Pool Id</th>
                <th>Id Title</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {employeeList.map((employee, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${employee.id}`} color="link" size="sm">
                      {employee.id}
                    </Button>
                  </td>
                  <td>{employee.firstNm}</td>
                  <td>{employee.lastNm}</td>
                  <td>{employee.middleNm}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNum}</td>
                  <td>{employee.workType}</td>
                  <td>{employee.birthDt ? <TextFormat type="date" value={employee.birthDt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {employee.emailCurator ? <Link to={`employee/${employee.emailCurator.id}`}>{employee.emailCurator.email}</Link> : ''}
                  </td>
                  <td>
                    {employee.resourcePoolId ? (
                      <Link to={`resource-pool/${employee.resourcePoolId.id}`}>{employee.resourcePoolId.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{employee.idTitle ? <Link to={`job-title/${employee.idTitle.id}`}>{employee.idTitle.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${employee.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${employee.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${employee.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Employees found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ employee }: IRootState) => ({
  employeeList: employee.entities,
  loading: employee.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
