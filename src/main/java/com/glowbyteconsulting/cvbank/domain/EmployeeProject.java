package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A EmployeeProject.
 */
@Entity
@Table(name = "employee_project")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class EmployeeProject implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "id_project")
    private Long idProject;

    @Column(name = "id_role")
    private Long idRole;

    @Column(name = "responsibility_nm")
    private String responsibilityNm;

    @Column(name = "start_dt")
    private Instant startDt;

    @Column(name = "end_dt")
    private Instant endDt;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeProjects", allowSetters = true)
    private Employee employee;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeProjects", allowSetters = true)
    private Project project;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeProjects", allowSetters = true)
    private ProjectRole projectRole;

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

    public EmployeeProject email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getIdProject() {
        return idProject;
    }

    public EmployeeProject idProject(Long idProject) {
        this.idProject = idProject;
        return this;
    }

    public void setIdProject(Long idProject) {
        this.idProject = idProject;
    }

    public Long getIdRole() {
        return idRole;
    }

    public EmployeeProject idRole(Long idRole) {
        this.idRole = idRole;
        return this;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }

    public String getResponsibilityNm() {
        return responsibilityNm;
    }

    public EmployeeProject responsibilityNm(String responsibilityNm) {
        this.responsibilityNm = responsibilityNm;
        return this;
    }

    public void setResponsibilityNm(String responsibilityNm) {
        this.responsibilityNm = responsibilityNm;
    }

    public Instant getStartDt() {
        return startDt;
    }

    public EmployeeProject startDt(Instant startDt) {
        this.startDt = startDt;
        return this;
    }

    public void setStartDt(Instant startDt) {
        this.startDt = startDt;
    }

    public Instant getEndDt() {
        return endDt;
    }

    public EmployeeProject endDt(Instant endDt) {
        this.endDt = endDt;
        return this;
    }

    public void setEndDt(Instant endDt) {
        this.endDt = endDt;
    }

    public Employee getEmployee() {
        return employee;
    }

    public EmployeeProject employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Project getProject() {
        return project;
    }

    public EmployeeProject project(Project project) {
        this.project = project;
        return this;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public ProjectRole getProjectRole() {
        return projectRole;
    }

    public EmployeeProject projectRole(ProjectRole projectRole) {
        this.projectRole = projectRole;
        return this;
    }

    public void setProjectRole(ProjectRole projectRole) {
        this.projectRole = projectRole;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EmployeeProject)) {
            return false;
        }
        return id != null && id.equals(((EmployeeProject) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EmployeeProject{" +
            "id=" + getId() +
            ", email='" + getEmail() + "'" +
            ", idProject=" + getIdProject() +
            ", idRole=" + getIdRole() +
            ", responsibilityNm='" + getResponsibilityNm() + "'" +
            ", startDt='" + getStartDt() + "'" +
            ", endDt='" + getEndDt() + "'" +
            "}";
    }
}
