package com.glowbyteconsulting.cvbank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A ProjectTechnology.
 */
@Entity
@Table(name = "project_technology")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProjectTechnology implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "id_project")
    private Long idProject;

    @Column(name = "id_technology")
    private Long idTechnology;

    @ManyToOne
    @JsonIgnoreProperties(value = "projectTechnologies", allowSetters = true)
    private Project project;

    @ManyToOne
    @JsonIgnoreProperties(value = "projectTechnologies", allowSetters = true)
    private Technology technology;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdProject() {
        return idProject;
    }

    public ProjectTechnology idProject(Long idProject) {
        this.idProject = idProject;
        return this;
    }

    public void setIdProject(Long idProject) {
        this.idProject = idProject;
    }

    public Long getIdTechnology() {
        return idTechnology;
    }

    public ProjectTechnology idTechnology(Long idTechnology) {
        this.idTechnology = idTechnology;
        return this;
    }

    public void setIdTechnology(Long idTechnology) {
        this.idTechnology = idTechnology;
    }

    public Project getProject() {
        return project;
    }

    public ProjectTechnology project(Project project) {
        this.project = project;
        return this;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Technology getTechnology() {
        return technology;
    }

    public ProjectTechnology technology(Technology technology) {
        this.technology = technology;
        return this;
    }

    public void setTechnology(Technology technology) {
        this.technology = technology;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ProjectTechnology)) {
            return false;
        }
        return id != null && id.equals(((ProjectTechnology) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ProjectTechnology{" +
            "id=" + getId() +
            ", idProject=" + getIdProject() +
            ", idTechnology=" + getIdTechnology() +
            "}";
    }
}
