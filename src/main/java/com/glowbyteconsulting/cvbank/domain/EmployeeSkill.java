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

    @Column(name = "email")
    private String email;

    @Column(name = "id_skill")
    private Long idSkill;

    @Column(name = "id_level")
    private Long idLevel;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskills", allowSetters = true)
    private Employee employee;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskills", allowSetters = true)
    private Skill skill;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeskills", allowSetters = true)
    private SkillLevel skilllevel;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public EmployeeSkill email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getIdSkill() {
        return idSkill;
    }

    public EmployeeSkill idSkill(Long idSkill) {
        this.idSkill = idSkill;
        return this;
    }

    public void setIdSkill(Long idSkill) {
        this.idSkill = idSkill;
    }

    public Long getIdLevel() {
        return idLevel;
    }

    public EmployeeSkill idLevel(Long idLevel) {
        this.idLevel = idLevel;
        return this;
    }

    public void setIdLevel(Long idLevel) {
        this.idLevel = idLevel;
    }

    public Employee getEmployee() {
        return employee;
    }

    public EmployeeSkill employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Skill getSkill() {
        return skill;
    }

    public EmployeeSkill skill(Skill skill) {
        this.skill = skill;
        return this;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public SkillLevel getSkilllevel() {
        return skilllevel;
    }

    public EmployeeSkill skilllevel(SkillLevel skillLevel) {
        this.skilllevel = skillLevel;
        return this;
    }

    public void setSkilllevel(SkillLevel skillLevel) {
        this.skilllevel = skillLevel;
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
            ", email='" + getEmail() + "'" +
            ", idSkill=" + getIdSkill() +
            ", idLevel=" + getIdLevel() +
            "}";
    }
}