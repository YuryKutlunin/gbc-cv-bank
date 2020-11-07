package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Education.
 */
@Entity
@Table(name = "education")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Education implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "id_univer")
    private Long idUniver;

    @Column(name = "id_educ_type")
    private String idEducType;

    @Column(name = "faculty")
    private String faculty;

    @Column(name = "specialty")
    private String specialty;

    @Column(name = "specialization")
    private String specialization;

    @Column(name = "start_year")
    private Long startYear;

    @Column(name = "end_year")
    private Long endYear;

    @ManyToOne
    @JsonIgnoreProperties(value = "educations", allowSetters = true)
    private Employee employee;

    @ManyToOne
    @JsonIgnoreProperties(value = "educations", allowSetters = true)
    private University university;

    @ManyToOne
    @JsonIgnoreProperties(value = "educations", allowSetters = true)
    private EducType eductype;

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

    public Education email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getIdUniver() {
        return idUniver;
    }

    public Education idUniver(Long idUniver) {
        this.idUniver = idUniver;
        return this;
    }

    public void setIdUniver(Long idUniver) {
        this.idUniver = idUniver;
    }

    public String getIdEducType() {
        return idEducType;
    }

    public Education idEducType(String idEducType) {
        this.idEducType = idEducType;
        return this;
    }

    public void setIdEducType(String idEducType) {
        this.idEducType = idEducType;
    }

    public String getFaculty() {
        return faculty;
    }

    public Education faculty(String faculty) {
        this.faculty = faculty;
        return this;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getSpecialty() {
        return specialty;
    }

    public Education specialty(String specialty) {
        this.specialty = specialty;
        return this;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getSpecialization() {
        return specialization;
    }

    public Education specialization(String specialization) {
        this.specialization = specialization;
        return this;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public Long getStartYear() {
        return startYear;
    }

    public Education startYear(Long startYear) {
        this.startYear = startYear;
        return this;
    }

    public void setStartYear(Long startYear) {
        this.startYear = startYear;
    }

    public Long getEndYear() {
        return endYear;
    }

    public Education endYear(Long endYear) {
        this.endYear = endYear;
        return this;
    }

    public void setEndYear(Long endYear) {
        this.endYear = endYear;
    }

    public Employee getEmployee() {
        return employee;
    }

    public Education employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public University getUniversity() {
        return university;
    }

    public Education university(University university) {
        this.university = university;
        return this;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public EducType getEductype() {
        return eductype;
    }

    public Education eductype(EducType educType) {
        this.eductype = educType;
        return this;
    }

    public void setEductype(EducType educType) {
        this.eductype = educType;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Education)) {
            return false;
        }
        return id != null && id.equals(((Education) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Education{" +
            "id=" + getId() +
            ", email='" + getEmail() + "'" +
            ", idUniver=" + getIdUniver() +
            ", idEducType='" + getIdEducType() + "'" +
            ", faculty='" + getFaculty() + "'" +
            ", specialty='" + getSpecialty() + "'" +
            ", specialization='" + getSpecialization() + "'" +
            ", startYear=" + getStartYear() +
            ", endYear=" + getEndYear() +
            "}";
    }
}
