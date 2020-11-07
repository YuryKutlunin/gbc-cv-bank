package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.EmployeeProject;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the EmployeeProject entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmployeeProjectRepository extends JpaRepository<EmployeeProject, Long> {}
