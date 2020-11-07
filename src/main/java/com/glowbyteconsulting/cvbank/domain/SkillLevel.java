package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A SkillLevel.
 */
@Entity
@Table(name = "skill_level")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SkillLevel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "level_desc")
    private String levelDesc;

    @OneToMany(mappedBy = "idLevel")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeSkill> employeeskillskilllevels = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevelDesc() {
        return levelDesc;
    }

    public SkillLevel levelDesc(String levelDesc) {
        this.levelDesc = levelDesc;
        return this;
    }

    public void setLevelDesc(String levelDesc) {
        this.levelDesc = levelDesc;
    }

    public Set<EmployeeSkill> getEmployeeskillskilllevels() {
        return employeeskillskilllevels;
    }

    public SkillLevel employeeskillskilllevels(Set<EmployeeSkill> employeeSkills) {
        this.employeeskillskilllevels = employeeSkills;
        return this;
    }

    public SkillLevel addEmployeeskillskilllevel(EmployeeSkill employeeSkill) {
        this.employeeskillskilllevels.add(employeeSkill);
        employeeSkill.setIdLevel(this);
        return this;
    }

    public SkillLevel removeEmployeeskillskilllevel(EmployeeSkill employeeSkill) {
        this.employeeskillskilllevels.remove(employeeSkill);
        employeeSkill.setIdLevel(null);
        return this;
    }

    public void setEmployeeskillskilllevels(Set<EmployeeSkill> employeeSkills) {
        this.employeeskillskilllevels = employeeSkills;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof SkillLevel)) {
            return false;
        }
        return id != null && id.equals(((SkillLevel) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "SkillLevel{" +
            "id=" + getId() +
            ", levelDesc='" + getLevelDesc() + "'" +
            "}";
    }
}
