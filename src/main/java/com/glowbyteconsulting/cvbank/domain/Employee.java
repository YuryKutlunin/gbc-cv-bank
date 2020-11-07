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

    @Column(name = "id_title")
    private Long idTitle;

    @Column(name = "resource_pool_code")
    private String resourcePoolCode;

    @Column(name = "email_curator")
    private String emailCurator;

    @OneToMany(mappedBy = "empl")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Employee> employees = new HashSet<>();

    @OneToMany(mappedBy = "employee")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educations = new HashSet<>();

    @OneToMany(mappedBy = "employee")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeProject> employeeprojects = new HashSet<>();

    @OneToMany(mappedBy = "employee")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeCertif> employeecertifs = new HashSet<>();

    @OneToMany(mappedBy = "employee")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeSkill> employeeskills = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private Employee empl;

    @ManyToOne
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private ResourcePool resourcePool;

    @ManyToOne
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private JobTitle jobtitle;

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

    public Long getIdTitle() {
        return idTitle;
    }

    public Employee idTitle(Long idTitle) {
        this.idTitle = idTitle;
        return this;
    }

    public void setIdTitle(Long idTitle) {
        this.idTitle = idTitle;
    }

    public String getResourcePoolCode() {
        return resourcePoolCode;
    }

    public Employee resourcePoolCode(String resourcePoolCode) {
        this.resourcePoolCode = resourcePoolCode;
        return this;
    }

    public void setResourcePoolCode(String resourcePoolCode) {
        this.resourcePoolCode = resourcePoolCode;
    }

    public String getEmailCurator() {
        return emailCurator;
    }

    public Employee emailCurator(String emailCurator) {
        this.emailCurator = emailCurator;
        return this;
    }

    public void setEmailCurator(String emailCurator) {
        this.emailCurator = emailCurator;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public Employee employees(Set<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public Employee addEmployee(Employee employee) {
        this.employees.add(employee);
        employee.setEmpl(this);
        return this;
    }

    public Employee removeEmployee(Employee employee) {
        this.employees.remove(employee);
        employee.setEmpl(null);
        return this;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }

    public Set<Education> getEducations() {
        return educations;
    }

    public Employee educations(Set<Education> educations) {
        this.educations = educations;
        return this;
    }

    public Employee addEducation(Education education) {
        this.educations.add(education);
        education.setEmployee(this);
        return this;
    }

    public Employee removeEducation(Education education) {
        this.educations.remove(education);
        education.setEmployee(null);
        return this;
    }

    public void setEducations(Set<Education> educations) {
        this.educations = educations;
    }

    public Set<EmployeeProject> getEmployeeprojects() {
        return employeeprojects;
    }

    public Employee employeeprojects(Set<EmployeeProject> employeeProjects) {
        this.employeeprojects = employeeProjects;
        return this;
    }

    public Employee addEmployeeproject(EmployeeProject employeeProject) {
        this.employeeprojects.add(employeeProject);
        employeeProject.setEmployee(this);
        return this;
    }

    public Employee removeEmployeeproject(EmployeeProject employeeProject) {
        this.employeeprojects.remove(employeeProject);
        employeeProject.setEmployee(null);
        return this;
    }

    public void setEmployeeprojects(Set<EmployeeProject> employeeProjects) {
        this.employeeprojects = employeeProjects;
    }

    public Set<EmployeeCertif> getEmployeecertifs() {
        return employeecertifs;
    }

    public Employee employeecertifs(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifs = employeeCertifs;
        return this;
    }

    public Employee addEmployeecertif(EmployeeCertif employeeCertif) {
        this.employeecertifs.add(employeeCertif);
        employeeCertif.setEmployee(this);
        return this;
    }

    public Employee removeEmployeecertif(EmployeeCertif employeeCertif) {
        this.employeecertifs.remove(employeeCertif);
        employeeCertif.setEmployee(null);
        return this;
    }

    public void setEmployeecertifs(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifs = employeeCertifs;
    }

    public Set<EmployeeSkill> getEmployeeskills() {
        return employeeskills;
    }

    public Employee employeeskills(Set<EmployeeSkill> employeeSkills) {
        this.employeeskills = employeeSkills;
        return this;
    }

    public Employee addEmployeeskill(EmployeeSkill employeeSkill) {
        this.employeeskills.add(employeeSkill);
        employeeSkill.setEmployee(this);
        return this;
    }

    public Employee removeEmployeeskill(EmployeeSkill employeeSkill) {
        this.employeeskills.remove(employeeSkill);
        employeeSkill.setEmployee(null);
        return this;
    }

    public void setEmployeeskills(Set<EmployeeSkill> employeeSkills) {
        this.employeeskills = employeeSkills;
    }

    public Employee getEmpl() {
        return empl;
    }

    public Employee empl(Employee employee) {
        this.empl = employee;
        return this;
    }

    public void setEmpl(Employee employee) {
        this.empl = employee;
    }

    public ResourcePool getResourcePool() {
        return resourcePool;
    }

    public Employee resourcePool(ResourcePool resourcePool) {
        this.resourcePool = resourcePool;
        return this;
    }

    public void setResourcePool(ResourcePool resourcePool) {
        this.resourcePool = resourcePool;
    }

    public JobTitle getJobtitle() {
        return jobtitle;
    }

    public Employee jobtitle(JobTitle jobTitle) {
        this.jobtitle = jobTitle;
        return this;
    }

    public void setJobtitle(JobTitle jobTitle) {
        this.jobtitle = jobTitle;
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
            ", idTitle=" + getIdTitle() +
            ", resourcePoolCode='" + getResourcePoolCode() + "'" +
            ", emailCurator='" + getEmailCurator() + "'" +
            "}";
    }
}
