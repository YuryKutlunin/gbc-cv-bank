import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './job-title.reducer';
import { IJobTitle } from 'app/shared/model/job-title.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJobTitleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const JobTitleDetail = (props: IJobTitleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { jobTitleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          JobTitle [<b>{jobTitleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="titleNM">Title NM</span>
          </dt>
          <dd>{jobTitleEntity.titleNM}</dd>
        </dl>
        <Button tag={Link} to="/job-title" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/job-title/${jobTitleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ jobTitle }: IRootState) => ({
  jobTitleEntity: jobTitle.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(JobTitleDetail);
