package com.glowbyteconsulting.cvbank.web.rest;

import com.glowbyteconsulting.cvbank.GbccvBankApp;
import com.glowbyteconsulting.cvbank.domain.SkillLevel;
import com.glowbyteconsulting.cvbank.repository.SkillLevelRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link SkillLevelResource} REST controller.
 */
@SpringBootTest(classes = GbccvBankApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class SkillLevelResourceIT {

    private static final String DEFAULT_LEVEL_DESC = "AAAAAAAAAA";
    private static final String UPDATED_LEVEL_DESC = "BBBBBBBBBB";

    @Autowired
    private SkillLevelRepository skillLevelRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restSkillLevelMockMvc;

    private SkillLevel skillLevel;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static SkillLevel createEntity(EntityManager em) {
        SkillLevel skillLevel = new SkillLevel()
            .levelDesc(DEFAULT_LEVEL_DESC);
        return skillLevel;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static SkillLevel createUpdatedEntity(EntityManager em) {
        SkillLevel skillLevel = new SkillLevel()
            .levelDesc(UPDATED_LEVEL_DESC);
        return skillLevel;
    }

    @BeforeEach
    public void initTest() {
        skillLevel = createEntity(em);
    }

    @Test
    @Transactional
    public void createSkillLevel() throws Exception {
        int databaseSizeBeforeCreate = skillLevelRepository.findAll().size();
        // Create the SkillLevel
        restSkillLevelMockMvc.perform(post("/api/skill-levels")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(skillLevel)))
            .andExpect(status().isCreated());

        // Validate the SkillLevel in the database
        List<SkillLevel> skillLevelList = skillLevelRepository.findAll();
        assertThat(skillLevelList).hasSize(databaseSizeBeforeCreate + 1);
        SkillLevel testSkillLevel = skillLevelList.get(skillLevelList.size() - 1);
        assertThat(testSkillLevel.getLevelDesc()).isEqualTo(DEFAULT_LEVEL_DESC);
    }

    @Test
    @Transactional
    public void createSkillLevelWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = skillLevelRepository.findAll().size();

        // Create the SkillLevel with an existing ID
        skillLevel.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSkillLevelMockMvc.perform(post("/api/skill-levels")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(skillLevel)))
            .andExpect(status().isBadRequest());

        // Validate the SkillLevel in the database
        List<SkillLevel> skillLevelList = skillLevelRepository.findAll();
        assertThat(skillLevelList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSkillLevels() throws Exception {
        // Initialize the database
        skillLevelRepository.saveAndFlush(skillLevel);

        // Get all the skillLevelList
        restSkillLevelMockMvc.perform(get("/api/skill-levels?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(skillLevel.getId().intValue())))
            .andExpect(jsonPath("$.[*].levelDesc").value(hasItem(DEFAULT_LEVEL_DESC)));
    }
    
    @Test
    @Transactional
    public void getSkillLevel() throws Exception {
        // Initialize the database
        skillLevelRepository.saveAndFlush(skillLevel);

        // Get the skillLevel
        restSkillLevelMockMvc.perform(get("/api/skill-levels/{id}", skillLevel.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(skillLevel.getId().intValue()))
            .andExpect(jsonPath("$.levelDesc").value(DEFAULT_LEVEL_DESC));
    }
    @Test
    @Transactional
    public void getNonExistingSkillLevel() throws Exception {
        // Get the skillLevel
        restSkillLevelMockMvc.perform(get("/api/skill-levels/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSkillLevel() throws Exception {
        // Initialize the database
        skillLevelRepository.saveAndFlush(skillLevel);

        int databaseSizeBeforeUpdate = skillLevelRepository.findAll().size();

        // Update the skillLevel
        SkillLevel updatedSkillLevel = skillLevelRepository.findById(skillLevel.getId()).get();
        // Disconnect from session so that the updates on updatedSkillLevel are not directly saved in db
        em.detach(updatedSkillLevel);
        updatedSkillLevel
            .levelDesc(UPDATED_LEVEL_DESC);

        restSkillLevelMockMvc.perform(put("/api/skill-levels")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedSkillLevel)))
            .andExpect(status().isOk());

        // Validate the SkillLevel in the database
        List<SkillLevel> skillLevelList = skillLevelRepository.findAll();
        assertThat(skillLevelList).hasSize(databaseSizeBeforeUpdate);
        SkillLevel testSkillLevel = skillLevelList.get(skillLevelList.size() - 1);
        assertThat(testSkillLevel.getLevelDesc()).isEqualTo(UPDATED_LEVEL_DESC);
    }

    @Test
    @Transactional
    public void updateNonExistingSkillLevel() throws Exception {
        int databaseSizeBeforeUpdate = skillLevelRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSkillLevelMockMvc.perform(put("/api/skill-levels")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(skillLevel)))
            .andExpect(status().isBadRequest());

        // Validate the SkillLevel in the database
        List<SkillLevel> skillLevelList = skillLevelRepository.findAll();
        assertThat(skillLevelList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSkillLevel() throws Exception {
        // Initialize the database
        skillLevelRepository.saveAndFlush(skillLevel);

        int databaseSizeBeforeDelete = skillLevelRepository.findAll().size();

        // Delete the skillLevel
        restSkillLevelMockMvc.perform(delete("/api/skill-levels/{id}", skillLevel.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<SkillLevel> skillLevelList = skillLevelRepository.findAll();
        assertThat(skillLevelList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
