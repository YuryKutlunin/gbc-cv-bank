import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './job-title.reducer';
import { IJobTitle } from 'app/shared/model/job-title.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJobTitleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const JobTitle = (props: IJobTitleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { jobTitleList, match, loading } = props;
  return (
    <div>
      <h2 id="job-title-heading">
        Job Titles
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Job Title
        </Link>
      </h2>
      <div className="table-responsive">
        {jobTitleList && jobTitleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Id Title</th>
                <th>Title NM</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {jobTitleList.map((jobTitle, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${jobTitle.id}`} color="link" size="sm">
                      {jobTitle.id}
                    </Button>
                  </td>
                  <td>{jobTitle.idTitle}</td>
                  <td>{jobTitle.titleNM}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${jobTitle.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${jobTitle.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${jobTitle.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Job Titles found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ jobTitle }: IRootState) => ({
  jobTitleList: jobTitle.entities,
  loading: jobTitle.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(JobTitle);
