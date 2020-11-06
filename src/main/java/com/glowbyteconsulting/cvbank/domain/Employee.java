package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

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

    @ManyToOne
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private ResourcePool resourcepool;

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

    public ResourcePool getResourcepool() {
        return resourcepool;
    }

    public Employee resourcepool(ResourcePool resourcePool) {
        this.resourcepool = resourcePool;
        return this;
    }

    public void setResourcepool(ResourcePool resourcePool) {
        this.resourcepool = resourcePool;
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
