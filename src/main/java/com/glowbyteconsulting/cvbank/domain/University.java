package com.glowbyteconsulting.cvbank.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

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

    @Column(name = "id_univer")
    private Long idUniver;

    @Column(name = "univer_nm")
    private String univerNm;

    @OneToMany(mappedBy = "university")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Education> educations = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUniver() {
        return idUniver;
    }

    public University idUniver(Long idUniver) {
        this.idUniver = idUniver;
        return this;
    }

    public void setIdUniver(Long idUniver) {
        this.idUniver = idUniver;
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

    public Set<Education> getEducations() {
        return educations;
    }

    public University educations(Set<Education> educations) {
        this.educations = educations;
        return this;
    }

    public University addEducation(Education education) {
        this.educations.add(education);
        education.setUniversity(this);
        return this;
    }

    public University removeEducation(Education education) {
        this.educations.remove(education);
        education.setUniversity(null);
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
            ", idUniver=" + getIdUniver() +
            ", univerNm='" + getUniverNm() + "'" +
            "}";
    }
}
