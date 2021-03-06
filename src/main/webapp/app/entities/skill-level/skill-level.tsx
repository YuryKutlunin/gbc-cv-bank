import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './skill-level.reducer';
import { ISkillLevel } from 'app/shared/model/skill-level.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISkillLevelProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const SkillLevel = (props: ISkillLevelProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { skillLevelList, match, loading } = props;
  return (
    <div>
      <h2 id="skill-level-heading">
        Skill Levels
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Skill Level
        </Link>
      </h2>
      <div className="table-responsive">
        {skillLevelList && skillLevelList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Level Desc</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {skillLevelList.map((skillLevel, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${skillLevel.id}`} color="link" size="sm">
                      {skillLevel.id}
                    </Button>
                  </td>
                  <td>{skillLevel.levelDesc}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${skillLevel.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${skillLevel.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${skillLevel.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Skill Levels found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ skillLevel }: IRootState) => ({
  skillLevelList: skillLevel.entities,
  loading: skillLevel.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SkillLevel);
