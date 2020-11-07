import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './project-technology.reducer';
import { IProjectTechnology } from 'app/shared/model/project-technology.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProjectTechnologyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ProjectTechnologyDetail = (props: IProjectTechnologyDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { projectTechnologyEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          ProjectTechnology [<b>{projectTechnologyEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>Id Project</dt>
          <dd>{projectTechnologyEntity.idProject ? projectTechnologyEntity.idProject.id : ''}</dd>
          <dt>Id Technology</dt>
          <dd>{projectTechnologyEntity.idTechnology ? projectTechnologyEntity.idTechnology.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/project-technology" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/project-technology/${projectTechnologyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ projectTechnology }: IRootState) => ({
  projectTechnologyEntity: projectTechnology.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTechnologyDetail);
