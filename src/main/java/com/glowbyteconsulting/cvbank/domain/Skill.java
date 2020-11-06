package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Skill.
 */
@Entity
@Table(name = "skill")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Skill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "id_skill")
    private Long idSkill;

    @Column(name = "skill_nm")
    private String skillNm;

    @OneToMany(mappedBy = "skill")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeSkill> employeeSkills = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdSkill() {
        return idSkill;
    }

    public Skill idSkill(Long idSkill) {
        this.idSkill = idSkill;
        return this;
    }

    public void setIdSkill(Long idSkill) {
        this.idSkill = idSkill;
    }

    public String getSkillNm() {
        return skillNm;
    }

    public Skill skillNm(String skillNm) {
        this.skillNm = skillNm;
        return this;
    }

    public void setSkillNm(String skillNm) {
        this.skillNm = skillNm;
    }

    public Set<EmployeeSkill> getEmployeeSkills() {
        return employeeSkills;
    }

    public Skill employeeSkills(Set<EmployeeSkill> employeeSkills) {
        this.employeeSkills = employeeSkills;
        return this;
    }

    public Skill addEmployeeSkill(EmployeeSkill employeeSkill) {
        this.employeeSkills.add(employeeSkill);
        employeeSkill.setSkill(this);
        return this;
    }

    public Skill removeEmployeeSkill(EmployeeSkill employeeSkill) {
        this.employeeSkills.remove(employeeSkill);
        employeeSkill.setSkill(null);
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
        if (!(o instanceof Skill)) {
            return false;
        }
        return id != null && id.equals(((Skill) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Skill{" +
            "id=" + getId() +
            ", idSkill=" + getIdSkill() +
            ", skillNm='" + getSkillNm() + "'" +
            "}";
    }
}
