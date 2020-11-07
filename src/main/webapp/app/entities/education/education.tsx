import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './education.reducer';
import { IEducation } from 'app/shared/model/education.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEducationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Education = (props: IEducationProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { educationList, match, loading } = props;
  return (
    <div>
      <h2 id="education-heading">
        Educations
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Education
        </Link>
      </h2>
      <div className="table-responsive">
        {educationList && educationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Faculty</th>
                <th>Specialty</th>
                <th>Specialization</th>
                <th>Start Year</th>
                <th>End Year</th>
                <th>Email</th>
                <th>Id Univer</th>
                <th>Id Educ Type</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {educationList.map((education, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${education.id}`} color="link" size="sm">
                      {education.id}
                    </Button>
                  </td>
                  <td>{education.faculty}</td>
                  <td>{education.specialty}</td>
                  <td>{education.specialization}</td>
                  <td>{education.startYear}</td>
                  <td>{education.endYear}</td>
                  <td>{education.email ? <Link to={`employee/${education.email.id}`}>{education.email.email}</Link> : ''}</td>
                  <td>{education.idUniver ? <Link to={`university/${education.idUniver.id}`}>{education.idUniver.id}</Link> : ''}</td>
                  <td>{education.idEducType ? <Link to={`educ-type/${education.idEducType.id}`}>{education.idEducType.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${education.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${education.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${education.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Educations found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ education }: IRootState) => ({
  educationList: education.entities,
  loading: education.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Education);
