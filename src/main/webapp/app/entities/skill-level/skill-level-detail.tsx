import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './skill-level.reducer';
import { ISkillLevel } from 'app/shared/model/skill-level.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISkillLevelDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const SkillLevelDetail = (props: ISkillLevelDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { skillLevelEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          SkillLevel [<b>{skillLevelEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="levelDesc">Level Desc</span>
          </dt>
          <dd>{skillLevelEntity.levelDesc}</dd>
        </dl>
        <Button tag={Link} to="/skill-level" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/skill-level/${skillLevelEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ skillLevel }: IRootState) => ({
  skillLevelEntity: skillLevel.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SkillLevelDetail);
