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
import { IProject } from 'app/shared/model/project.model';
import { getEntities as getProjects } from 'app/entities/project/project.reducer';
import { IProjectRole } from 'app/shared/model/project-role.model';
import { getEntities as getProjectRoles } from 'app/entities/project-role/project-role.reducer';
import { getEntity, updateEntity, createEntity, reset } from './employee-project.reducer';
import { IEmployeeProject } from 'app/shared/model/employee-project.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEmployeeProjectUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeProjectUpdate = (props: IEmployeeProjectUpdateProps) => {
  const [emailId, setEmailId] = useState('0');
  const [idProjectId, setIdProjectId] = useState('0');
  const [idRoleId, setIdRoleId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { employeeProjectEntity, employees, projects, projectRoles, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/employee-project');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getEmployees();
    props.getProjects();
    props.getProjectRoles();
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
        ...employeeProjectEntity,
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
          <h2 id="gbccvBankApp.employeeProject.home.createOrEditLabel">Create or edit a EmployeeProject</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : employeeProjectEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="employee-project-id">ID</Label>
                  <AvInput id="employee-project-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="responsibilityNmLabel" for="employee-project-responsibilityNm">
                  Responsibility Nm
                </Label>
                <AvField id="employee-project-responsibilityNm" type="text" name="responsibilityNm" />
              </AvGroup>
              <AvGroup>
                <Label id="startDtLabel" for="employee-project-startDt">
                  Start Dt
                </Label>
                <AvInput
                  id="employee-project-startDt"
                  type="datetime-local"
                  className="form-control"
                  name="startDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.employeeProjectEntity.startDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="endDtLabel" for="employee-project-endDt">
                  End Dt
                </Label>
                <AvInput
                  id="employee-project-endDt"
                  type="datetime-local"
                  className="form-control"
                  name="endDt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.employeeProjectEntity.endDt)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="employee-project-email">Email</Label>
                <AvInput id="employee-project-email" type="select" className="form-control" name="email.id">
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
                <Label for="employee-project-idProject">Id Project</Label>
                <AvInput id="employee-project-idProject" type="select" className="form-control" name="idProject.id">
                  <option value="" key="0" />
                  {projects
                    ? projects.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="employee-project-idRole">Id Role</Label>
                <AvInput id="employee-project-idRole" type="select" className="form-control" name="idRole.id">
                  <option value="" key="0" />
                  {projectRoles
                    ? projectRoles.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/employee-project" replace color="info">
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
  projects: storeState.project.entities,
  projectRoles: storeState.projectRole.entities,
  employeeProjectEntity: storeState.employeeProject.entity,
  loading: storeState.employeeProject.loading,
  updating: storeState.employeeProject.updating,
  updateSuccess: storeState.employeeProject.updateSuccess,
});

const mapDispatchToProps = {
  getEmployees,
  getProjects,
  getProjectRoles,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeProjectUpdate);
