package com.glowbyteconsulting.cvbank.config;

import io.github.jhipster.config.JHipsterProperties;
import io.github.jhipster.config.cache.PrefixedKeyGenerator;
import java.time.Duration;
import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;
import org.hibernate.cache.jcache.ConfigSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {
    private GitProperties gitProperties;
    private BuildProperties buildProperties;
    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration =
            Eh107Configuration.fromEhcacheCacheConfiguration(
                CacheConfigurationBuilder
                    .newCacheConfigurationBuilder(Object.class, Object.class, ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                    .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                    .build()
            );
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.glowbyteconsulting.cvbank.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.glowbyteconsulting.cvbank.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.glowbyteconsulting.cvbank.domain.User.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Authority.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.User.class.getName() + ".authorities");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".educations");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeeprojects");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeecertifs");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeeskills");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ResourcePool.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ResourcePool.class.getName() + ".employees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.JobTitle.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.JobTitle.class.getName() + ".employees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Education.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.University.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.University.class.getName() + ".educations");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EducType.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EducType.class.getName() + ".educations");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Project.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Project.class.getName() + ".projecttechnologies");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Project.class.getName() + ".employeeprojects");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ProjectTechnology.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Technology.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Technology.class.getName() + ".projecttechnologies");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EmployeeProject.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ProjectRole.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ProjectRole.class.getName() + ".employeeprojects");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Certificate.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Certificate.class.getName() + ".employeecertifs");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EmployeeCertif.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Skill.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Skill.class.getName() + ".employeeskills");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EmployeeSkill.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.SkillLevel.class.getName());
            createCache(cm, com.glowbyteconsulting.cvbank.domain.SkillLevel.class.getName() + ".employeeskills");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeeemployees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".educationemployees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeeprojectemployees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeecertifemployees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Employee.class.getName() + ".employeeskillemployees");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ResourcePool.class.getName() + ".employeeresourcepools");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.JobTitle.class.getName() + ".employeejobtitles");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.University.class.getName() + ".educationuniversities");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.EducType.class.getName() + ".educationeductypes");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Project.class.getName() + ".projecttechnologyprojects");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Project.class.getName() + ".employeeprojectprojects");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Technology.class.getName() + ".projecttechnologytechnologies");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.ProjectRole.class.getName() + ".employeeprojectprojectroles");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Certificate.class.getName() + ".employeecertifcertificates");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.Skill.class.getName() + ".employeeskillskills");
            createCache(cm, com.glowbyteconsulting.cvbank.domain.SkillLevel.class.getName() + ".employeeskillskilllevels");
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache == null) {
            cm.createCache(cacheName, jcacheConfiguration);
        }
    }

    @Autowired(required = false)
    public void setGitProperties(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @Autowired(required = false)
    public void setBuildProperties(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return new PrefixedKeyGenerator(this.gitProperties, this.buildProperties);
    }
}
