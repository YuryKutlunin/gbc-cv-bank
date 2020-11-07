package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.University;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the University entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UniversityRepository extends JpaRepository<University, Long> {}
