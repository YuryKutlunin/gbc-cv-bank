import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './resource-pool.reducer';
import { IResourcePool } from 'app/shared/model/resource-pool.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IResourcePoolDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ResourcePoolDetail = (props: IResourcePoolDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { resourcePoolEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          ResourcePool [<b>{resourcePoolEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="resourcePoolCode">Resource Pool Code</span>
          </dt>
          <dd>{resourcePoolEntity.resourcePoolCode}</dd>
          <dt>
            <span id="resourcePoolNm">Resource Pool Nm</span>
          </dt>
          <dd>{resourcePoolEntity.resourcePoolNm}</dd>
          <dt>
            <span id="poolLeader">Pool Leader</span>
          </dt>
          <dd>{resourcePoolEntity.poolLeader}</dd>
        </dl>
        <Button tag={Link} to="/resource-pool" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/resource-pool/${resourcePoolEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ resourcePool }: IRootState) => ({
  resourcePoolEntity: resourcePool.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ResourcePoolDetail);
