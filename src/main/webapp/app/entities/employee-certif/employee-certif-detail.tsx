import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employee-certif.reducer';
import { IEmployeeCertif } from 'app/shared/model/employee-certif.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeCertifDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmployeeCertifDetail = (props: IEmployeeCertifDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { employeeCertifEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          EmployeeCertif [<b>{employeeCertifEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{employeeCertifEntity.email}</dd>
          <dt>
            <span id="idCertificate">Id Certificate</span>
          </dt>
          <dd>{employeeCertifEntity.idCertificate}</dd>
          <dt>
            <span id="startDt">Start Dt</span>
          </dt>
          <dd>
            {employeeCertifEntity.startDt ? <TextFormat value={employeeCertifEntity.startDt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="endDt">End Dt</span>
          </dt>
          <dd>
            {employeeCertifEntity.endDt ? <TextFormat value={employeeCertifEntity.endDt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>Employee</dt>
          <dd>{employeeCertifEntity.employee ? employeeCertifEntity.employee.email : ''}</dd>
          <dt>Certificate</dt>
          <dd>{employeeCertifEntity.certificate ? employeeCertifEntity.certificate.idCertificate : ''}</dd>
        </dl>
        <Button tag={Link} to="/employee-certif" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employee-certif/${employeeCertifEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ employeeCertif }: IRootState) => ({
  employeeCertifEntity: employeeCertif.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCertifDetail);
