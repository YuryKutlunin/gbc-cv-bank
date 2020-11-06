import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './skill.reducer';
import { ISkill } from 'app/shared/model/skill.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISkillDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const SkillDetail = (props: ISkillDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { skillEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Skill [<b>{skillEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="idSkill">Id Skill</span>
          </dt>
          <dd>{skillEntity.idSkill}</dd>
          <dt>
            <span id="skillNm">Skill Nm</span>
          </dt>
          <dd>{skillEntity.skillNm}</dd>
        </dl>
        <Button tag={Link} to="/skill" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/skill/${skillEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ skill }: IRootState) => ({
  skillEntity: skill.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SkillDetail);
