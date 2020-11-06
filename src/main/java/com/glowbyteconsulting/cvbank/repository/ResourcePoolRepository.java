package com.glowbyteconsulting.cvbank.repository;

import com.glowbyteconsulting.cvbank.domain.ResourcePool;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ResourcePool entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResourcePoolRepository extends JpaRepository<ResourcePool, Long> {
}
