package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.Employee;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Employee entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<List<Employee>> findByEmail(String email);
}
