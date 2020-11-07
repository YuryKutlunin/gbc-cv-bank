import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './project-role.reducer';
import { IProjectRole } from 'app/shared/model/project-role.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProjectRoleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ProjectRoleDetail = (props: IProjectRoleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { projectRoleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          ProjectRole [<b>{projectRoleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="idRole">Id Role</span>
          </dt>
          <dd>{projectRoleEntity.idRole}</dd>
          <dt>
            <span id="roleNm">Role Nm</span>
          </dt>
          <dd>{projectRoleEntity.roleNm}</dd>
        </dl>
        <Button tag={Link} to="/project-role" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/project-role/${projectRoleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ projectRole }: IRootState) => ({
  projectRoleEntity: projectRole.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRoleDetail);
