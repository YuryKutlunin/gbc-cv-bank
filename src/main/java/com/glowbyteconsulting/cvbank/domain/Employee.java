package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Employee.
 */
@Entity
@Table(name = "employee")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "first_nm")
    private String firstNm;

    @Column(name = "last_nm")
    private String lastNm;

    @Column(name = "middle_nm")
    private String middleNm;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_num")
    private String phoneNum;

    @Column(name = "work_type")
    private String workType;

    @Column(name = "birth_dt")
    private Instant birthDt;

    @OneToMany(mappedBy = "emailCurator")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Employee> employeeemployees = new HashSet<>();

    @OneToMany(mappedBy = "email")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educationemployees = new HashSet<>();

    @OneToMany(mappedBy = "email")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeProject> employeeprojectemployees = new HashSet<>();

    @OneToMany(mappedBy = "email")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeCertif> employeecertifemployees = new HashSet<>();

    @OneToMany(mappedBy = "email")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeSkill> employeeskillemployees = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeemployees", allowSetters = true)
    private Employee emailCurator;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeeresourcepools", allowSetters = true)
    private ResourcePool resourcePoolId;

    @ManyToOne
    @JsonIgnoreProperties(value = "employeejobtitles", allowSetters = true)
    private JobTitle idTitle;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstNm() {
        return firstNm;
    }

    public Employee firstNm(String firstNm) {
        this.firstNm = firstNm;
        return this;
    }

    public void setFirstNm(String firstNm) {
        this.firstNm = firstNm;
    }

    public String getLastNm() {
        return lastNm;
    }

    public Employee lastNm(String lastNm) {
        this.lastNm = lastNm;
        return this;
    }

    public void setLastNm(String lastNm) {
        this.lastNm = lastNm;
    }

    public String getMiddleNm() {
        return middleNm;
    }

    public Employee middleNm(String middleNm) {
        this.middleNm = middleNm;
        return this;
    }

    public void setMiddleNm(String middleNm) {
        this.middleNm = middleNm;
    }

    public String getEmail() {
        return email;
    }

    public Employee email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public Employee phoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
        return this;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getWorkType() {
        return workType;
    }

    public Employee workType(String workType) {
        this.workType = workType;
        return this;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public Instant getBirthDt() {
        return birthDt;
    }

    public Employee birthDt(Instant birthDt) {
        this.birthDt = birthDt;
        return this;
    }

    public void setBirthDt(Instant birthDt) {
        this.birthDt = birthDt;
    }

    public Set<Employee> getEmployeeemployees() {
        return employeeemployees;
    }

    public Employee employeeemployees(Set<Employee> employees) {
        this.employeeemployees = employees;
        return this;
    }

    public Employee addEmployeeemployee(Employee employee) {
        this.employeeemployees.add(employee);
        employee.setEmailCurator(this);
        return this;
    }

    public Employee removeEmployeeemployee(Employee employee) {
        this.employeeemployees.remove(employee);
        employee.setEmailCurator(null);
        return this;
    }

    public void setEmployeeemployees(Set<Employee> employees) {
        this.employeeemployees = employees;
    }

    public Set<Education> getEducationemployees() {
        return educationemployees;
    }

    public Employee educationemployees(Set<Education> educations) {
        this.educationemployees = educations;
        return this;
    }

    public Employee addEducationemployee(Education education) {
        this.educationemployees.add(education);
        education.setEmail(this);
        return this;
    }

    public Employee removeEducationemployee(Education education) {
        this.educationemployees.remove(education);
        education.setEmail(null);
        return this;
    }

    public void setEducationemployees(Set<Education> educations) {
        this.educationemployees = educations;
    }

    public Set<EmployeeProject> getEmployeeprojectemployees() {
        return employeeprojectemployees;
    }

    public Employee employeeprojectemployees(Set<EmployeeProject> employeeProjects) {
        this.employeeprojectemployees = employeeProjects;
        return this;
    }

    public Employee addEmployeeprojectemployee(EmployeeProject employeeProject) {
        this.employeeprojectemployees.add(employeeProject);
        employeeProject.setEmail(this);
        return this;
    }

    public Employee removeEmployeeprojectemployee(EmployeeProject employeeProject) {
        this.employeeprojectemployees.remove(employeeProject);
        employeeProject.setEmail(null);
        return this;
    }

    public void setEmployeeprojectemployees(Set<EmployeeProject> employeeProjects) {
        this.employeeprojectemployees = employeeProjects;
    }

    public Set<EmployeeCertif> getEmployeecertifemployees() {
        return employeecertifemployees;
    }

    public Employee employeecertifemployees(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifemployees = employeeCertifs;
        return this;
    }

    public Employee addEmployeecertifemployee(EmployeeCertif employeeCertif) {
        this.employeecertifemployees.add(employeeCertif);
        employeeCertif.setEmail(this);
        return this;
    }

    public Employee removeEmployeecertifemployee(EmployeeCertif employeeCertif) {
        this.employeecertifemployees.remove(employeeCertif);
        employeeCertif.setEmail(null);
        return this;
    }

    public void setEmployeecertifemployees(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifemployees = employeeCertifs;
    }

    public Set<EmployeeSkill> getEmployeeskillemployees() {
        return employeeskillemployees;
    }

    public Employee employeeskillemployees(Set<EmployeeSkill> employeeSkills) {
        this.employeeskillemployees = employeeSkills;
        return this;
    }

    public Employee addEmployeeskillemployee(EmployeeSkill employeeSkill) {
        this.employeeskillemployees.add(employeeSkill);
        employeeSkill.setEmail(this);
        return this;
    }

    public Employee removeEmployeeskillemployee(EmployeeSkill employeeSkill) {
        this.employeeskillemployees.remove(employeeSkill);
        employeeSkill.setEmail(null);
        return this;
    }

    public void setEmployeeskillemployees(Set<EmployeeSkill> employeeSkills) {
        this.employeeskillemployees = employeeSkills;
    }

    public Employee getEmailCurator() {
        return emailCurator;
    }

    public Employee emailCurator(Employee employee) {
        this.emailCurator = employee;
        return this;
    }

    public void setEmailCurator(Employee employee) {
        this.emailCurator = employee;
    }

    public ResourcePool getResourcePoolId() {
        return resourcePoolId;
    }

    public Employee resourcePoolId(ResourcePool resourcePool) {
        this.resourcePoolId = resourcePool;
        return this;
    }

    public void setResourcePoolId(ResourcePool resourcePool) {
        this.resourcePoolId = resourcePool;
    }

    public JobTitle getIdTitle() {
        return idTitle;
    }

    public Employee idTitle(JobTitle jobTitle) {
        this.idTitle = jobTitle;
        return this;
    }

    public void setIdTitle(JobTitle jobTitle) {
        this.idTitle = jobTitle;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Employee)) {
            return false;
        }
        return id != null && id.equals(((Employee) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Employee{" +
            "id=" + getId() +
            ", firstNm='" + getFirstNm() + "'" +
            ", lastNm='" + getLastNm() + "'" +
            ", middleNm='" + getMiddleNm() + "'" +
            ", email='" + getEmail() + "'" +
            ", phoneNum='" + getPhoneNum() + "'" +
            ", workType='" + getWorkType() + "'" +
            ", birthDt='" + getBirthDt() + "'" +
            "}";
    }
}
