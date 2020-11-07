import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './resource-pool.reducer';
import { IResourcePool } from 'app/shared/model/resource-pool.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IResourcePoolProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const ResourcePool = (props: IResourcePoolProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { resourcePoolList, match, loading } = props;
  return (
    <div>
      <h2 id="resource-pool-heading">
        Resource Pools
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Resource Pool
        </Link>
      </h2>
      <div className="table-responsive">
        {resourcePoolList && resourcePoolList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Resource Pool Nm</th>
                <th>Pool Leader</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {resourcePoolList.map((resourcePool, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${resourcePool.id}`} color="link" size="sm">
                      {resourcePool.id}
                    </Button>
                  </td>
                  <td>{resourcePool.resourcePoolNm}</td>
                  <td>{resourcePool.poolLeader}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${resourcePool.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${resourcePool.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${resourcePool.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Resource Pools found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ resourcePool }: IRootState) => ({
  resourcePoolList: resourcePool.entities,
  loading: resourcePool.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ResourcePool);
