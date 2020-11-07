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

    @Column(name = "educ_type_nm")
    private String educTypeNm;

    @OneToMany(mappedBy = "idEducType")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educationeductypes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Set<Education> getEducationeductypes() {
        return educationeductypes;
    }

    public EducType educationeductypes(Set<Education> educations) {
        this.educationeductypes = educations;
        return this;
    }

    public EducType addEducationeductype(Education education) {
        this.educationeductypes.add(education);
        education.setIdEducType(this);
        return this;
    }

    public EducType removeEducationeductype(Education education) {
        this.educationeductypes.remove(education);
        education.setIdEducType(null);
        return this;
    }

    public void setEducationeductypes(Set<Education> educations) {
        this.educationeductypes = educations;
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
            ", educTypeNm='" + getEducTypeNm() + "'" +
            "}";
    }
}
