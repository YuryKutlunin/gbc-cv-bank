import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './resource-pool.reducer';
import { IResourcePool } from 'app/shared/model/resource-pool.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IResourcePoolUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ResourcePoolUpdate = (props: IResourcePoolUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { resourcePoolEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/resource-pool');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...resourcePoolEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gbccvBankApp.resourcePool.home.createOrEditLabel">Create or edit a ResourcePool</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : resourcePoolEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="resource-pool-id">ID</Label>
                  <AvInput id="resource-pool-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="resourcePoolNmLabel" for="resource-pool-resourcePoolNm">
                  Resource Pool Nm
                </Label>
                <AvField id="resource-pool-resourcePoolNm" type="text" name="resourcePoolNm" />
              </AvGroup>
              <AvGroup>
                <Label id="poolLeaderLabel" for="resource-pool-poolLeader">
                  Pool Leader
                </Label>
                <AvField id="resource-pool-poolLeader" type="text" name="poolLeader" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/resource-pool" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  resourcePoolEntity: storeState.resourcePool.entity,
  loading: storeState.resourcePool.loading,
  updating: storeState.resourcePool.updating,
  updateSuccess: storeState.resourcePool.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ResourcePoolUpdate);
