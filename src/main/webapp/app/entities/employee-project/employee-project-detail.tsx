import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employee-project.reducer';
import { IEmployeeProject } from 'app/shared/model/employee-project.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeProjectDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeProjectDetail = (props: IEmployeeProjectDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { employeeProjectEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          EmployeeProject [<b>{employeeProjectEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{employeeProjectEntity.email}</dd>
          <dt>
            <span id="idProject">Id Project</span>
          </dt>
          <dd>{employeeProjectEntity.idProject}</dd>
          <dt>
            <span id="idRole">Id Role</span>
          </dt>
          <dd>{employeeProjectEntity.idRole}</dd>
          <dt>
            <span id="responsibilityNm">Responsibility Nm</span>
          </dt>
          <dd>{employeeProjectEntity.responsibilityNm}</dd>
          <dt>
            <span id="startDt">Start Dt</span>
          </dt>
          <dd>
            {employeeProjectEntity.startDt ? (
              <TextFormat value={employeeProjectEntity.startDt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="endDt">End Dt</span>
          </dt>
          <dd>
            {employeeProjectEntity.endDt ? <TextFormat value={employeeProjectEntity.endDt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>Email</dt>
          <dd>{employeeProjectEntity.email ? employeeProjectEntity.email.id : ''}</dd>
          <dt>Id Project</dt>
          <dd>{employeeProjectEntity.idProject ? employeeProjectEntity.idProject.id : ''}</dd>
          <dt>Id Role</dt>
          <dd>{employeeProjectEntity.idRole ? employeeProjectEntity.idRole.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/employee-project" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employee-project/${employeeProjectEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ employeeProject }: IRootState) => ({
  employeeProjectEntity: employeeProject.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeProjectDetail);
