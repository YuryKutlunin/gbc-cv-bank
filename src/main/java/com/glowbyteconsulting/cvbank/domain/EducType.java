package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A EducType.
 */
@Entity
@Table(name = "educ_type")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class EducType implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "id_educ_type")
    private Long idEducType;

    @Column(name = "educ_type_nm")
    private String educTypeNm;

    @OneToMany(mappedBy = "eductype")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educations = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdEducType() {
        return idEducType;
    }

    public EducType idEducType(Long idEducType) {
        this.idEducType = idEducType;
        return this;
    }

    public void setIdEducType(Long idEducType) {
        this.idEducType = idEducType;
    }

    public String getEducTypeNm() {
        return educTypeNm;
    }

    public EducType educTypeNm(String educTypeNm) {
        this.educTypeNm = educTypeNm;
        return this;
    }

    public void setEducTypeNm(String educTypeNm) {
        this.educTypeNm = educTypeNm;
    }

    public Set<Education> getEducations() {
        return educations;
    }

    public EducType educations(Set<Education> educations) {
        this.educations = educations;
        return this;
    }

    public EducType addEducation(Education education) {
        this.educations.add(education);
        education.setEductype(this);
        return this;
    }

    public EducType removeEducation(Education education) {
        this.educations.remove(education);
        education.setEductype(null);
        return this;
    }

    public void setEducations(Set<Education> educations) {
        this.educations = educations;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EducType)) {
            return false;
        }
        return id != null && id.equals(((EducType) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EducType{" +
            "id=" + getId() +
            ", idEducType=" + getIdEducType() +
            ", educTypeNm='" + getEducTypeNm() + "'" +
            "}";
    }
}
