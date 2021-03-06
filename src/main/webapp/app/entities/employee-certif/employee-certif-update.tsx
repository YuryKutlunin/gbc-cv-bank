import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IEmployee } from 'app/shared/model/employee.model';
import { getEntities as getEmployees } from 'app/entities/employee/employee.reducer';
import { ICertificate } from 'app/shared/model/certificate.model';
import { getEntities as getCertificates } from 'app/entities/certificate/certificate.reducer';
import { getEntity, updateEntity, createEntity, reset } from './employee-certif.reducer';
import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEmployeeCertifUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeCertifUpdate = (props: IEmployeeCertifUpdateProps) => {
  const [emailId, setEmailId] = useState('0');
  const [idCertificateId, setIdCertificateId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { employeeCertifEntity, employees, certificates, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/employee-certif');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getEmployees();
    props.getCertificates();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.startDt = convertDateTimeToServer(values.startDt);
    values.endDt = convertDateTimeToServer(values.endDt);

    if (errors.length === 0) {
      const entity = {
        ...employeeCertifEntity,
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
          <h2 id="gbccvBankApp.employeeCertif.home.createOrEditLabel">Create or edit a EmployeeCertif</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : employeeCertifEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="employee-certif-id">ID</Label>
                  <AvInput id="employee-certif-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="startDtLabel" for="employee-certif-startDt">
                  Start Dt
                </Label>
                <AvInput
                  id="employee-certif-startDt"
                  type="datetime-local"
                  className="form-control"
                  name="startDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.employeeCertifEntity.startDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="endDtLabel" for="employee-certif-endDt">
                  End Dt
                </Label>
                <AvInput
                  id="employee-certif-endDt"
                  type="datetime-local"
                  className="form-control"
                  name="endDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.employeeCertifEntity.endDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="employee-certif-email">Email</Label>
                <AvInput id="employee-certif-email" type="select" className="form-control" name="email.id">
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
                <Label for="employee-certif-idCertificate">Id Certificate</Label>
                <AvInput id="employee-certif-idCertificate" type="select" className="form-control" name="idCertificate.id">
                  <option value="" key="0" />
                  {certificates
                    ? certificates.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/employee-certif" replace color="info">
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
  certificates: storeState.certificate.entities,
  employeeCertifEntity: storeState.employeeCertif.entity,
  loading: storeState.employeeCertif.loading,
  updating: storeState.employeeCertif.updating,
  updateSuccess: storeState.employeeCertif.updateSuccess,
});

const mapDispatchToProps = {
  getEmployees,
  getCertificates,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCertifUpdate);
