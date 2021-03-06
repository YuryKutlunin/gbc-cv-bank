package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.Education;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Education entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
}
