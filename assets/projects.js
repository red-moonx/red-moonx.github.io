// assets/projects.js

const projects = [
  {
    title: "Analysis of single-cell chromatin and transcriptional dynamics following drug exposure",
    description:
      "Code from my PhD work dissecting how a single drug exposure reshapes chromatin accessibility and gene expression in VTA dopamine neurons using single-cell RNA-seq and ATAC-seq.",
    image: "assets/project_cover/project1_cover.png",
    categories: ["Bio & Genomics"],
    tags: ["R", "Python", "Seurat", "edgeR", "tslearn", "scikit-learn"],
    date: "2025-12",
    links: {
      github: "https://github.com/red-moonx/10X-multiome_DNs_drug_exposure/tree/main",
      shiny: "https://shiny.mdc-berlin.de/VTA_Dopa_Timecourse/"
    }
  },

  {
    title: "Cetacean Global Biomonitor",
    description:
      "My first Data Engineering project! A global-scale data engineering pipeline for marine biodiversity monitoring (Cetacea). Automates the ingestion, cleaning, and transformation of 11M+ GBIF records into a scalable Data Warehouse optimized for professional geospatial analysis (2021–2026).",
    image: "assets/project_cover/project2_cover.png",
    categories: ["Data Engineering"],
    tags: ["Terraform", "SQL", "Airflow", "GCS", "BigQuery", "dbt", "dashboard"],
    date: "2026-03",
    links: {
      github: "https://github.com/red-moonx/biomonitor-capstone",
      dashboard: "https://datastudio.google.com/reporting/66d156e8-19b6-4879-9dae-a09d9af42ea7"
    }
  },

  {
    title: "ClinHarmonia",
    description:
      "A clinical data engineering pipeline for oncology cohort harmonization (TCGA-BRCA). Ingests multi-source clinical, treatment, and genomics data, performs automated QC and ICD ontology mapping, and builds DuckDB + dbt analytical marts for downstream ML.",
    image: "assets/project_cover/project3_cover.png",
    categories: ["Clinical Data", "Data Engineering"],
    tags: ["DuckDB", "dbt", "Python", "SQL", "Clinical Data", "Genomics"],
    date: "2026-04",
    links: {
      github: "https://github.com/red-moonx/clinharmonia"
    }
  },

  {
    title: "Athletica",
    description:
      "An autonomous Agentic RAG assistant for female sports physiology. Features custom LLM tool-calling for clinical assessments (e.g., RED-S risk), rigorous LLM-as-a-judge citation auditing to eliminate hallucinations, and a dual-deployment architecture (Elasticsearch/Docker for local reproduction & in-memory vector search for the live Streamlit UI).",
    image: "assets/project_cover/project4_cover.png",
    categories: ["GenAI & LLMs"],
    tags: ["Agentic RAG", "Vector Search", "Tool Calling", "Streamlit", "Docker", "Elasticsearch"],
    date: "2026-05",
    links: {
      github: "https://github.com/red-moonx/Athletica",
      liveApp: "https://athletica-agentic-rag.streamlit.app"
    }
  }
];

// Sort newest first
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

let currentPage = 0;
const PROJECTS_PER_PAGE = 3;
let selectedCategories = [];

function getFilteredProjects() {
  if (selectedCategories.length === 0) return projects;
  return projects.filter(project => {
    const hasCategory = project.categories?.some(cat => selectedCategories.includes(cat));
    const hasTag = project.tags?.some(tag => selectedCategories.includes(tag));
    return hasCategory || hasTag;
  });
}

function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  const filteredProjects = getFilteredProjects();

  // If no projects match filters
  if (filteredProjects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: var(--muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">No projects found matching the selected filters.</p>
        <p style="font-size: 0.9rem;">Try selecting a different topic or clearing your filters.</p>
      </div>
    `;
    updateNavigation(0);
    return;
  }

  const start = currentPage * PROJECTS_PER_PAGE;
  const end = start + PROJECTS_PER_PAGE;
  const pageProjects = filteredProjects.slice(start, end);

  container.innerHTML = "";

  pageProjects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project card";

    // Content container
    const contentDiv = document.createElement("div");
    contentDiv.className = "project-content";

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    contentDiv.appendChild(h3);

    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = project.description;
    contentDiv.appendChild(p);

    const actionsWrapper = document.createElement("div");
    actionsWrapper.className = "project-actions";

    // Tags
    if (project.tags?.length) {
      const tagsDiv = document.createElement("div");
      tagsDiv.className = "tags";

      project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });

      actionsWrapper.appendChild(tagsDiv);
    }

    // Buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.gap = "10px";
    buttonsDiv.style.flexWrap = "wrap";

    if (project.links?.github) {
      const codeBtn = document.createElement("a");
      codeBtn.className = "btn";
      codeBtn.href = project.links.github;
      codeBtn.target = "_blank";
      codeBtn.rel = "noopener noreferrer";

      const icon = document.createElement("i");
      icon.className = "fa-brands fa-github";
      codeBtn.appendChild(icon);

      const span = document.createElement("span");
      span.textContent = " Code";
      codeBtn.appendChild(span);

      buttonsDiv.appendChild(codeBtn);
    }

    if (project.links?.liveApp) {
      const liveBtn = document.createElement("a");
      liveBtn.className = "btn";
      liveBtn.href = project.links.liveApp;
      liveBtn.target = "_blank";
      liveBtn.rel = "noopener noreferrer";
      liveBtn.textContent = "Live App";
      buttonsDiv.appendChild(liveBtn);
    }

    if (project.links?.dashboard) {
      const dashBtn = document.createElement("a");
      dashBtn.className = "btn";
      dashBtn.href = project.links.dashboard;
      dashBtn.target = "_blank";
      dashBtn.rel = "noopener noreferrer";
      dashBtn.textContent = "Dashboard";
      buttonsDiv.appendChild(dashBtn);
    }

    if (project.links?.shiny) {
      const liveBtn = document.createElement("a");
      liveBtn.className = "btn";
      liveBtn.href = project.links.shiny;
      liveBtn.target = "_blank";
      liveBtn.rel = "noopener noreferrer";
      liveBtn.textContent = "Shiny app";
      buttonsDiv.appendChild(liveBtn);
    }

    actionsWrapper.appendChild(buttonsDiv);
    contentDiv.appendChild(actionsWrapper);

    // Image
    let img = null;
    if (project.image) {
      img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
    }

    // Alternating layout
    if (index % 2 === 0) {
      if (img) article.appendChild(img);
      article.appendChild(contentDiv);
    } else {
      article.appendChild(contentDiv);
      if (img) article.appendChild(img);
    }

    container.appendChild(article);
  });

  updateNavigation(filteredProjects.length);
}

function updateNavigation(totalCount) {
  const totalPages = Math.ceil(totalCount / PROJECTS_PER_PAGE);
  let navContainer = document.getElementById("projectsNav");

  if (!navContainer) {
    navContainer = document.createElement("div");
    navContainer.id = "projectsNav";
    navContainer.className = "project-nav";
    const projectsList = document.getElementById("projectsList");
    if (projectsList && projectsList.parentNode) {
      projectsList.parentNode.appendChild(navContainer);
    }
  }

  navContainer.innerHTML = "";

  if (totalPages <= 1) {
    navContainer.style.display = "none";
    return;
  }

  navContainer.style.display = "flex";

  const prevBtn = document.createElement("button");
  prevBtn.className = "project-nav-btn";
  prevBtn.setAttribute("aria-label", "Previous projects");
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.disabled = currentPage === 0;
  prevBtn.onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  };

  const nextBtn = document.createElement("button");
  nextBtn.className = "project-nav-btn";
  nextBtn.setAttribute("aria-label", "Next projects");
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.disabled = currentPage >= totalPages - 1;
  nextBtn.onclick = () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderProjects();
    }
  };

  navContainer.appendChild(prevBtn);
  navContainer.appendChild(nextBtn);
}

function setupFilterDropdown() {
  const dropdownWrapper = document.getElementById("projectsFilterDropdown");
  const dropdownBtn = document.getElementById("filterDropdownBtn");
  const filterMenu = document.getElementById("filterMenu");
  const labelSpan = document.getElementById("filterBtnLabel");
  const clearBtn = document.getElementById("clearFiltersBtn");
  const checkboxes = document.querySelectorAll(".project-filter-cb");

  if (!dropdownBtn || !filterMenu) return;

  // Toggle dropdown
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = filterMenu.hasAttribute("hidden");
    if (isHidden) {
      filterMenu.removeAttribute("hidden");
      dropdownWrapper.classList.add("open");
      dropdownBtn.setAttribute("aria-expanded", "true");
    } else {
      filterMenu.setAttribute("hidden", "");
      dropdownWrapper.classList.remove("open");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
      filterMenu.setAttribute("hidden", "");
      dropdownWrapper.classList.remove("open");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Update selected categories when checkboxes change
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      selectedCategories = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.value);

      updateFilterButtonLabel();
      currentPage = 0;
      renderProjects();
    });
  });

  // Clear all filters
  if (clearBtn) {
    clearBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      checkboxes.forEach(cb => (cb.checked = false));
      selectedCategories = [];
      updateFilterButtonLabel();
      currentPage = 0;
      renderProjects();
    });
  }

  function updateFilterButtonLabel() {
    if (selectedCategories.length === 0) {
      labelSpan.textContent = "Filter by Topic";
    } else if (selectedCategories.length === 1) {
      labelSpan.textContent = selectedCategories[0];
    } else {
      labelSpan.textContent = `${selectedCategories.length} topics selected`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupFilterDropdown();
});