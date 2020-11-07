package com.glowbyteconsulting.cvbank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.glowbyteconsulting.cvbank.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

public class EmployeeCertifTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EmployeeCertif.class);
        EmployeeCertif employeeCertif1 = new EmployeeCertif();
        employeeCertif1.setId(1L);
        EmployeeCertif employeeCertif2 = new EmployeeCertif();
        employeeCertif2.setId(employeeCertif1.getId());
        assertThat(employeeCertif1).isEqualTo(employeeCertif2);
        employeeCertif2.setId(2L);
        assertThat(employeeCertif1).isNotEqualTo(employeeCertif2);
        employeeCertif1.setId(null);
        assertThat(employeeCertif1).isNotEqualTo(employeeCertif2);
    }
}
