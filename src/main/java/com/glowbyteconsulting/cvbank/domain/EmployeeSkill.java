package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A EmployeeSkill.
 */
@Entity
@Table(name = "employee_skill")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class EmployeeSkill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskillemployees", allowSetters = true)
    private Employee email;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskillskills", allowSetters = true)
    private Skill idSkill;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskillskilllevels", allowSetters = true)
    private SkillLevel idLevel;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Employee getEmail() {
        return email;
    }

    public EmployeeSkill email(Employee employee) {
        this.email = employee;
        return this;
    }

    public void setEmail(Employee employee) {
        this.email = employee;
    }

    public Skill getIdSkill() {
        return idSkill;
    }

    public EmployeeSkill idSkill(Skill skill) {
        this.idSkill = skill;
        return this;
    }

    public void setIdSkill(Skill skill) {
        this.idSkill = skill;
    }

    public SkillLevel getIdLevel() {
        return idLevel;
    }

    public EmployeeSkill idLevel(SkillLevel skillLevel) {
        this.idLevel = skillLevel;
        return this;
    }

    public void setIdLevel(SkillLevel skillLevel) {
        this.idLevel = skillLevel;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EmployeeSkill)) {
            return false;
        }
        return id != null && id.equals(((EmployeeSkill) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EmployeeSkill{" +
            "id=" + getId() +
            "}";
    }
}
