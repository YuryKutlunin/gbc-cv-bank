import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntities as getEmployees } from 'app/entities/employee/employee.reducer';
import { IResourcePool } from 'app/shared/model/resource-pool.model';
import { getEntities as getResourcePools } from 'app/entities/resource-pool/resource-pool.reducer';
import { IJobTitle } from 'app/shared/model/job-title.model';
import { getEntities as getJobTitles } from 'app/entities/job-title/job-title.reducer';
import { getEntity, updateEntity, createEntity, reset } from './employee.reducer';
import { IEmployee } from 'app/shared/model/employee.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEmployeeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeUpdate = (props: IEmployeeUpdateProps) => {
  const [employeeId, setEmployeeId] = useState('0');
  const [emplId, setEmplId] = useState('0');
  const [resourcePoolId, setResourcePoolId] = useState('0');
  const [jobtitleId, setJobtitleId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { employeeEntity, employees, resourcePools, jobTitles, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/employee');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getEmployees();
    props.getResourcePools();
    props.getJobTitles();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.birthDt = convertDateTimeToServer(values.birthDt);

    if (errors.length === 0) {
      const entity = {
        ...employeeEntity,
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
          <h2 id="gbccvBankApp.employee.home.createOrEditLabel">Create or edit a Employee</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : employeeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="employee-id">ID</Label>
                  <AvInput id="employee-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="firstNmLabel" for="employee-firstNm">
                  First Nm
                </Label>
                <AvField id="employee-firstNm" type="text" name="firstNm" />
              </AvGroup>
              <AvGroup>
                <Label id="lastNmLabel" for="employee-lastNm">
                  Last Nm
                </Label>
                <AvField id="employee-lastNm" type="text" name="lastNm" />
              </AvGroup>
              <AvGroup>
                <Label id="middleNmLabel" for="employee-middleNm">
                  Middle Nm
                </Label>
                <AvField id="employee-middleNm" type="text" name="middleNm" />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="employee-email">
                  Email
                </Label>
                <AvField id="employee-email" type="text" name="email" />
              </AvGroup>
              <AvGroup>
                <Label id="phoneNumLabel" for="employee-phoneNum">
                  Phone Num
                </Label>
                <AvField id="employee-phoneNum" type="text" name="phoneNum" />
              </AvGroup>
              <AvGroup>
                <Label id="workTypeLabel" for="employee-workType">
                  Work Type
                </Label>
                <AvField id="employee-workType" type="text" name="workType" />
              </AvGroup>
              <AvGroup>
                <Label id="birthDtLabel" for="employee-birthDt">
                  Birth Dt
                </Label>
                <AvInput
                  id="employee-birthDt"
                  type="datetime-local"
                  className="form-control"
                  name="birthDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.employeeEntity.birthDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="idTitleLabel" for="employee-idTitle">
                  Id Title
                </Label>
                <AvField id="employee-idTitle" type="string" className="form-control" name="idTitle" />
              </AvGroup>
              <AvGroup>
                <Label id="resourcePoolCodeLabel" for="employee-resourcePoolCode">
                  Resource Pool Code
                </Label>
                <AvField id="employee-resourcePoolCode" type="text" name="resourcePoolCode" />
              </AvGroup>
              <AvGroup>
                <Label id="emailCuratorLabel" for="employee-emailCurator">
                  Email Curator
                </Label>
                <AvField id="employee-emailCurator" type="text" name="emailCurator" />
              </AvGroup>
              <AvGroup>
                <Label for="employee-empl">Empl</Label>
                <AvInput id="employee-empl" type="select" className="form-control" name="empl.id">
                  <option value="" key="0" />
                  {employees
                    ? employees.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.email}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="employee-resourcePool">Resource Pool</Label>
                <AvInput id="employee-resourcePool" type="select" className="form-control" name="resourcePool.id">
                  <option value="" key="0" />
                  {resourcePools
                    ? resourcePools.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.resourcePoolCode}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="employee-jobtitle">Jobtitle</Label>
                <AvInput id="employee-jobtitle" type="select" className="form-control" name="jobtitle.id">
                  <option value="" key="0" />
                  {jobTitles
                    ? jobTitles.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.idTitle}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/employee" replace color="info">
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
  employees: storeState.employee.entities,
  resourcePools: storeState.resourcePool.entities,
  jobTitles: storeState.jobTitle.entities,
  employeeEntity: storeState.employee.entity,
  loading: storeState.employee.loading,
  updating: storeState.employee.updating,
  updateSuccess: storeState.employee.updateSuccess,
});

const mapDispatchToProps = {
  getEmployees,
  getResourcePools,
  getJobTitles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeUpdate);
