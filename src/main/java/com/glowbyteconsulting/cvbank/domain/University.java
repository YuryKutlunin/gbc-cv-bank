package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A University.
 */
@Entity
@Table(name = "university")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class University implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "univer_nm")
    private String univerNm;

    @OneToMany(mappedBy = "idUniver")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educationuniversities = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUniverNm() {
        return univerNm;
    }

    public University univerNm(String univerNm) {
        this.univerNm = univerNm;
        return this;
    }

    public void setUniverNm(String univerNm) {
        this.univerNm = univerNm;
    }

    public Set<Education> getEducationuniversities() {
        return educationuniversities;
    }

    public University educationuniversities(Set<Education> educations) {
        this.educationuniversities = educations;
        return this;
    }

    public University addEducationuniversity(Education education) {
        this.educationuniversities.add(education);
        education.setIdUniver(this);
        return this;
    }

    public University removeEducationuniversity(Education education) {
        this.educationuniversities.remove(education);
        education.setIdUniver(null);
        return this;
    }

    public void setEducationuniversities(Set<Education> educations) {
        this.educationuniversities = educations;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof University)) {
            return false;
        }
        return id != null && id.equals(((University) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "University{" +
            "id=" + getId() +
            ", univerNm='" + getUniverNm() + "'" +
            "}";
    }
}
