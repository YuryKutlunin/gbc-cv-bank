import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './certificate.reducer';
import { ICertificate } from 'app/shared/model/certificate.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICertificateDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CertificateDetail = (props: ICertificateDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { certificateEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Certificate [<b>{certificateEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="certificateNm">Certificate Nm</span>
          </dt>
          <dd>{certificateEntity.certificateNm}</dd>
          <dt>
            <span id="certScopeNm">Cert Scope Nm</span>
          </dt>
          <dd>{certificateEntity.certScopeNm}</dd>
        </dl>
        <Button tag={Link} to="/certificate" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/certificate/${certificateEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ certificate }: IRootState) => ({
  certificateEntity: certificate.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CertificateDetail);
