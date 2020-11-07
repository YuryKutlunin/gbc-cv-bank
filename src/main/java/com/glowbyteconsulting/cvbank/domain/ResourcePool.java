package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A ResourcePool.
 */
@Entity
@Table(name = "resource_pool")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ResourcePool implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "resource_pool_nm")
    private String resourcePoolNm;

    @Column(name = "pool_leader")
    private String poolLeader;

    @OneToMany(mappedBy = "resourcePoolId")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Employee> employeeresourcepools = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getResourcePoolNm() {
        return resourcePoolNm;
    }

    public ResourcePool resourcePoolNm(String resourcePoolNm) {
        this.resourcePoolNm = resourcePoolNm;
        return this;
    }

    public void setResourcePoolNm(String resourcePoolNm) {
        this.resourcePoolNm = resourcePoolNm;
    }

    public String getPoolLeader() {
        return poolLeader;
    }

    public ResourcePool poolLeader(String poolLeader) {
        this.poolLeader = poolLeader;
        return this;
    }

    public void setPoolLeader(String poolLeader) {
        this.poolLeader = poolLeader;
    }

    public Set<Employee> getEmployeeresourcepools() {
        return employeeresourcepools;
    }

    public ResourcePool employeeresourcepools(Set<Employee> employees) {
        this.employeeresourcepools = employees;
        return this;
    }

    public ResourcePool addEmployeeresourcepool(Employee employee) {
        this.employeeresourcepools.add(employee);
        employee.setResourcePoolId(this);
        return this;
    }

    public ResourcePool removeEmployeeresourcepool(Employee employee) {
        this.employeeresourcepools.remove(employee);
        employee.setResourcePoolId(null);
        return this;
    }

    public void setEmployeeresourcepools(Set<Employee> employees) {
        this.employeeresourcepools = employees;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ResourcePool)) {
            return false;
        }
        return id != null && id.equals(((ResourcePool) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ResourcePool{" +
            "id=" + getId() +
            ", resourcePoolNm='" + getResourcePoolNm() + "'" +
            ", poolLeader='" + getPoolLeader() + "'" +
            "}";
    }
}
