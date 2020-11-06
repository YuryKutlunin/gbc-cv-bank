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

    @Column(name = "id_level")
    private Long idLevel;

    @Column(name = "level_desc")
    private String levelDesc;

    @OneToMany(mappedBy = "skillLevel")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeSkill> employeeSkills = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdLevel() {
        return idLevel;
    }

    public SkillLevel idLevel(Long idLevel) {
        this.idLevel = idLevel;
        return this;
    }

    public void setIdLevel(Long idLevel) {
        this.idLevel = idLevel;
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

    public Set<EmployeeSkill> getEmployeeSkills() {
        return employeeSkills;
    }

    public SkillLevel employeeSkills(Set<EmployeeSkill> employeeSkills) {
        this.employeeSkills = employeeSkills;
        return this;
    }

    public SkillLevel addEmployeeSkill(EmployeeSkill employeeSkill) {
        this.employeeSkills.add(employeeSkill);
        employeeSkill.setSkillLevel(this);
        return this;
    }

    public SkillLevel removeEmployeeSkill(EmployeeSkill employeeSkill) {
        this.employeeSkills.remove(employeeSkill);
        employeeSkill.setSkillLevel(null);
        return this;
    }

    public void setEmployeeSkills(Set<EmployeeSkill> employeeSkills) {
        this.employeeSkills = employeeSkills;
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
            ", idLevel=" + getIdLevel() +
            ", levelDesc='" + getLevelDesc() + "'" +
            "}";
    }
}
