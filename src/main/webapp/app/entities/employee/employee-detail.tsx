import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employee.reducer';
import { IEmployee } from 'app/shared/model/employee.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeDetail = (props: IEmployeeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { employeeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Employee [<b>{employeeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="firstNm">First Nm</span>
          </dt>
          <dd>{employeeEntity.firstNm}</dd>
          <dt>
            <span id="lastNm">Last Nm</span>
          </dt>
          <dd>{employeeEntity.lastNm}</dd>
          <dt>
            <span id="middleNm">Middle Nm</span>
          </dt>
          <dd>{employeeEntity.middleNm}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{employeeEntity.email}</dd>
          <dt>
            <span id="phoneNum">Phone Num</span>
          </dt>
          <dd>{employeeEntity.phoneNum}</dd>
          <dt>
            <span id="workType">Work Type</span>
          </dt>
          <dd>{employeeEntity.workType}</dd>
          <dt>
            <span id="birthDt">Birth Dt</span>
          </dt>
          <dd>{employeeEntity.birthDt ? <TextFormat value={employeeEntity.birthDt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="idTitle">Id Title</span>
          </dt>
          <dd>{employeeEntity.idTitle}</dd>
          <dt>
            <span id="resourcePoolCode">Resource Pool Code</span>
          </dt>
          <dd>{employeeEntity.resourcePoolCode}</dd>
          <dt>
            <span id="emailCurator">Email Curator</span>
          </dt>
          <dd>{employeeEntity.emailCurator}</dd>
          <dt>Employee</dt>
          <dd>{employeeEntity.employee ? employeeEntity.employee.id : ''}</dd>
          <dt>Resource Pool</dt>
          <dd>{employeeEntity.resourcePool ? employeeEntity.resourcePool.id : ''}</dd>
          <dt>Job Title</dt>
          <dd>{employeeEntity.jobTitle ? employeeEntity.jobTitle.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/employee" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employee/${employeeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ employee }: IRootState) => ({
  employeeEntity: employee.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);
