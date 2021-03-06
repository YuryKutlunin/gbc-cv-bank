import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employee-skill.reducer';
import { IEmployeeSkill } from 'app/shared/model/employee-skill.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeSkillDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeSkillDetail = (props: IEmployeeSkillDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { employeeSkillEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          EmployeeSkill [<b>{employeeSkillEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>Email</dt>
          <dd>{employeeSkillEntity.email ? employeeSkillEntity.email.email : ''}</dd>
          <dt>Id Skill</dt>
          <dd>{employeeSkillEntity.idSkill ? employeeSkillEntity.idSkill.id : ''}</dd>
          <dt>Id Level</dt>
          <dd>{employeeSkillEntity.idLevel ? employeeSkillEntity.idLevel.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/employee-skill" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employee-skill/${employeeSkillEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ employeeSkill }: IRootState) => ({
  employeeSkillEntity: employeeSkill.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSkillDetail);
