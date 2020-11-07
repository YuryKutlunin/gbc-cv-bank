import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './university.reducer';
import { IUniversity } from 'app/shared/model/university.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IUniversityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const University = (props: IUniversityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { universityList, match, loading } = props;
  return (
    <div>
      <h2 id="university-heading">
        Universities
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new University
        </Link>
      </h2>
      <div className="table-responsive">
        {universityList && universityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Id Univer</th>
                <th>Univer Nm</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {universityList.map((university, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${university.id}`} color="link" size="sm">
                      {university.id}
                    </Button>
                  </td>
                  <td>{university.idUniver}</td>
                  <td>{university.univerNm}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${university.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${university.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${university.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Universities found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ university }: IRootState) => ({
  universityList: university.entities,
  loading: university.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(University);
