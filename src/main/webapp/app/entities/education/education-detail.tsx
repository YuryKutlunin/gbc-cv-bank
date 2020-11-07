import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './education.reducer';
import { IEducation } from 'app/shared/model/education.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEducationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EducationDetail = (props: IEducationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { educationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Education [<b>{educationEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="faculty">Faculty</span>
          </dt>
          <dd>{educationEntity.faculty}</dd>
          <dt>
            <span id="specialty">Specialty</span>
          </dt>
          <dd>{educationEntity.specialty}</dd>
          <dt>
            <span id="specialization">Specialization</span>
          </dt>
          <dd>{educationEntity.specialization}</dd>
          <dt>
            <span id="startYear">Start Year</span>
          </dt>
          <dd>{educationEntity.startYear}</dd>
          <dt>
            <span id="endYear">End Year</span>
          </dt>
          <dd>{educationEntity.endYear}</dd>
          <dt>Email</dt>
          <dd>{educationEntity.email ? educationEntity.email.email : ''}</dd>
          <dt>Id Univer</dt>
          <dd>{educationEntity.idUniver ? educationEntity.idUniver.id : ''}</dd>
          <dt>Id Educ Type</dt>
          <dd>{educationEntity.idEducType ? educationEntity.idEducType.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/education" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/education/${educationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ education }: IRootState) => ({
  educationEntity: education.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EducationDetail);
