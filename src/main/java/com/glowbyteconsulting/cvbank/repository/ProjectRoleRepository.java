package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.ProjectRole;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ProjectRole entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProjectRoleRepository extends JpaRepository<ProjectRole, Long> {
}
