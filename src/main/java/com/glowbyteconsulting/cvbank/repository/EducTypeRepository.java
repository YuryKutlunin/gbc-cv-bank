package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.EducType;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the EducType entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EducTypeRepository extends JpaRepository<EducType, Long> {
}
