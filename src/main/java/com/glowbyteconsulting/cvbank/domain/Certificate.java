package com.glowbyteconsulting.cvbank.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Certificate.
 */
@Entity
@Table(name = "certificate")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Certificate implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "certificate_nm")
    private String certificateNm;

    @Column(name = "cert_scope_nm")
    private String certScopeNm;

    @OneToMany(mappedBy = "idCertificate")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<EmployeeCertif> employeecertifcertificates = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCertificateNm() {
        return certificateNm;
    }

    public Certificate certificateNm(String certificateNm) {
        this.certificateNm = certificateNm;
        return this;
    }

    public void setCertificateNm(String certificateNm) {
        this.certificateNm = certificateNm;
    }

    public String getCertScopeNm() {
        return certScopeNm;
    }

    public Certificate certScopeNm(String certScopeNm) {
        this.certScopeNm = certScopeNm;
        return this;
    }

    public void setCertScopeNm(String certScopeNm) {
        this.certScopeNm = certScopeNm;
    }

    public Set<EmployeeCertif> getEmployeecertifcertificates() {
        return employeecertifcertificates;
    }

    public Certificate employeecertifcertificates(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifcertificates = employeeCertifs;
        return this;
    }

    public Certificate addEmployeecertifcertificate(EmployeeCertif employeeCertif) {
        this.employeecertifcertificates.add(employeeCertif);
        employeeCertif.setIdCertificate(this);
        return this;
    }

    public Certificate removeEmployeecertifcertificate(EmployeeCertif employeeCertif) {
        this.employeecertifcertificates.remove(employeeCertif);
        employeeCertif.setIdCertificate(null);
        return this;
    }

    public void setEmployeecertifcertificates(Set<EmployeeCertif> employeeCertifs) {
        this.employeecertifcertificates = employeeCertifs;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Certificate)) {
            return false;
        }
        return id != null && id.equals(((Certificate) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Certificate{" +
            "id=" + getId() +
            ", certificateNm='" + getCertificateNm() + "'" +
            ", certScopeNm='" + getCertScopeNm() + "'" +
            "}";
    }
}
