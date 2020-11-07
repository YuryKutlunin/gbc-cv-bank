package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.EmployeeCertif;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the EmployeeCertif entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmployeeCertifRepository extends JpaRepository<EmployeeCertif, Long> {}
