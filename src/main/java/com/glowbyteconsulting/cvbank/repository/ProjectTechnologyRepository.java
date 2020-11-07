package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.ProjectTechnology;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ProjectTechnology entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProjectTechnologyRepository extends JpaRepository<ProjectTechnology, Long> {}
