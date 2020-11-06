package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Technology.
 */
@Entity
@Table(name = "technology")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Technology implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "id_technology")
    private Long idTechnology;

    @Column(name = "technology_nm")
    private String technologyNm;

    @OneToMany(mappedBy = "technology")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<ProjectTechnology> projectTechnologies = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdTechnology() {
        return idTechnology;
    }

    public Technology idTechnology(Long idTechnology) {
        this.idTechnology = idTechnology;
        return this;
    }

    public void setIdTechnology(Long idTechnology) {
        this.idTechnology = idTechnology;
    }

    public String getTechnologyNm() {
        return technologyNm;
    }

    public Technology technologyNm(String technologyNm) {
        this.technologyNm = technologyNm;
        return this;
    }

    public void setTechnologyNm(String technologyNm) {
        this.technologyNm = technologyNm;
    }

    public Set<ProjectTechnology> getProjectTechnologies() {
        return projectTechnologies;
    }

    public Technology projectTechnologies(Set<ProjectTechnology> projectTechnologies) {
        this.projectTechnologies = projectTechnologies;
        return this;
    }

    public Technology addProjectTechnology(ProjectTechnology projectTechnology) {
        this.projectTechnologies.add(projectTechnology);
        projectTechnology.setTechnology(this);
        return this;
    }

    public Technology removeProjectTechnology(ProjectTechnology projectTechnology) {
        this.projectTechnologies.remove(projectTechnology);
        projectTechnology.setTechnology(null);
        return this;
    }

    public void setProjectTechnologies(Set<ProjectTechnology> projectTechnologies) {
        this.projectTechnologies = projectTechnologies;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Technology)) {
            return false;
        }
        return id != null && id.equals(((Technology) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Technology{" +
            "id=" + getId() +
            ", idTechnology=" + getIdTechnology() +
            ", technologyNm='" + getTechnologyNm() + "'" +
            "}";
    }
}
