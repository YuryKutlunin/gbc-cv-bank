import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './technology.reducer';
import { ITechnology } from 'app/shared/model/technology.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITechnologyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TechnologyDetail = (props: ITechnologyDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { technologyEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Technology [<b>{technologyEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="technologyNm">Technology Nm</span>
          </dt>
          <dd>{technologyEntity.technologyNm}</dd>
        </dl>
        <Button tag={Link} to="/technology" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/technology/${technologyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ technology }: IRootState) => ({
  technologyEntity: technology.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyDetail);
