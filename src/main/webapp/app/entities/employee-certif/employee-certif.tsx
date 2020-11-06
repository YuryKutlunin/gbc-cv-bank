import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './employee-certif.reducer';
import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeCertifProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const EmployeeCertif = (props: IEmployeeCertifProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { employeeCertifList, match, loading } = props;
  return (
    <div>
      <h2 id="employee-certif-heading">
        Employee Certifs
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Employee Certif
        </Link>
      </h2>
      <div className="table-responsive">
        {employeeCertifList && employeeCertifList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Id Certificate</th>
                <th>Start Dt</th>
                <th>End Dt</th>
                <th>Employee</th>
                <th>Certificate</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {employeeCertifList.map((employeeCertif, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${employeeCertif.id}`} color="link" size="sm">
                      {employeeCertif.id}
                    </Button>
                  </td>
                  <td>{employeeCertif.email}</td>
                  <td>{employeeCertif.idCertificate}</td>
                  <td>
                    {employeeCertif.startDt ? <TextFormat type="date" value={employeeCertif.startDt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{employeeCertif.endDt ? <TextFormat type="date" value={employeeCertif.endDt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {employeeCertif.employee ? <Link to={`employee/${employeeCertif.employee.id}`}>{employeeCertif.employee.id}</Link> : ''}
                  </td>
                  <td>
                    {employeeCertif.certificate ? (
                      <Link to={`certificate/${employeeCertif.certificate.id}`}>{employeeCertif.certificate.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${employeeCertif.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${employeeCertif.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${employeeCertif.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Employee Certifs found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ employeeCertif }: IRootState) => ({
  employeeCertifList: employeeCertif.entities,
  loading: employeeCertif.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCertif);
