import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './educ-type.reducer';
import { IEducType } from 'app/shared/model/educ-type.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEducTypeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const EducType = (props: IEducTypeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { educTypeList, match, loading } = props;
  return (
    <div>
      <h2 id="educ-type-heading">
        Educ Types
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Educ Type
        </Link>
      </h2>
      <div className="table-responsive">
        {educTypeList && educTypeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Educ Type Nm</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {educTypeList.map((educType, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${educType.id}`} color="link" size="sm">
                      {educType.id}
                    </Button>
                  </td>
                  <td>{educType.educTypeNm}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${educType.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${educType.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${educType.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Educ Types found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ educType }: IRootState) => ({
  educTypeList: educType.entities,
  loading: educType.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EducType);
