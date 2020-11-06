import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IEmployee } from 'app/shared/model/employee.model';
import { getEntities as getEmployees } from 'app/entities/employee/employee.reducer';
import { IUniversity } from 'app/shared/model/university.model';
import { getEntities as getUniversities } from 'app/entities/university/university.reducer';
import { IEducType } from 'app/shared/model/educ-type.model';
import { getEntities as getEducTypes } from 'app/entities/educ-type/educ-type.reducer';
import { getEntity, updateEntity, createEntity, reset } from './education.reducer';
import { IEducation } from 'app/shared/model/education.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEducationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EducationUpdate = (props: IEducationUpdateProps) => {
  const [emailId, setEmailId] = useState('0');
  const [idUniverId, setIdUniverId] = useState('0');
  const [idEducTypeId, setIdEducTypeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { educationEntity, employees, universities, educTypes, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/education');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getEmployees();
    props.getUniversities();
    props.getEducTypes();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...educationEntity,
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
          <h2 id="gbccvBankApp.education.home.createOrEditLabel">Create or edit a Education</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : educationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="education-id">ID</Label>
                  <AvInput id="education-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="emailLabel" for="education-email">
                  Email
                </Label>
                <AvField id="education-email" type="text" name="email" />
              </AvGroup>
              <AvGroup>
                <Label id="idUniverLabel" for="education-idUniver">
                  Id Univer
                </Label>
                <AvField id="education-idUniver" type="string" className="form-control" name="idUniver" />
              </AvGroup>
              <AvGroup>
                <Label id="idEducTypeLabel" for="education-idEducType">
                  Id Educ Type
                </Label>
                <AvField id="education-idEducType" type="text" name="idEducType" />
              </AvGroup>
              <AvGroup>
                <Label id="facultyLabel" for="education-faculty">
                  Faculty
                </Label>
                <AvField id="education-faculty" type="text" name="faculty" />
              </AvGroup>
              <AvGroup>
                <Label id="specialtyLabel" for="education-specialty">
                  Specialty
                </Label>
                <AvField id="education-specialty" type="text" name="specialty" />
              </AvGroup>
              <AvGroup>
                <Label id="specializationLabel" for="education-specialization">
                  Specialization
                </Label>
                <AvField id="education-specialization" type="text" name="specialization" />
              </AvGroup>
              <AvGroup>
                <Label id="startYearLabel" for="education-startYear">
                  Start Year
                </Label>
                <AvField id="education-startYear" type="string" className="form-control" name="startYear" />
              </AvGroup>
              <AvGroup>
                <Label id="endYearLabel" for="education-endYear">
                  End Year
                </Label>
                <AvField id="education-endYear" type="string" className="form-control" name="endYear" />
              </AvGroup>
              <AvGroup>
                <Label for="education-email">Email</Label>
                <AvInput id="education-email" type="select" className="form-control" name="email.id">
                  <option value="" key="0" />
                  {employees
                    ? employees.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="education-idUniver">Id Univer</Label>
                <AvInput id="education-idUniver" type="select" className="form-control" name="idUniver.id">
                  <option value="" key="0" />
                  {universities
                    ? universities.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="education-idEducType">Id Educ Type</Label>
                <AvInput id="education-idEducType" type="select" className="form-control" name="idEducType.id">
                  <option value="" key="0" />
                  {educTypes
                    ? educTypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/education" replace color="info">
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
  universities: storeState.university.entities,
  educTypes: storeState.educType.entities,
  educationEntity: storeState.education.entity,
  loading: storeState.education.loading,
  updating: storeState.education.updating,
  updateSuccess: storeState.education.updateSuccess,
});

const mapDispatchToProps = {
  getEmployees,
  getUniversities,
  getEducTypes,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EducationUpdate);
