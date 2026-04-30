// assets/projects.js

const projects = [
  {
    title: "Analysis of single-cell chromatin and transcriptional dynamics following drug exposure",
    description:
      "Code from my PhD work dissecting how a single drug exposure reshapes chromatin accessibility and gene expression in VTA dopamine neurons using single-cell RNA-seq and ATAC-seq.",
    image: "assets/project_cover/project1_cover.png",
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
    tags: ["Terraform", "SQL", "Airflow", "GCS", "BigQuery", "dbt", "dashboard"],
    date: "2026-03",
    links: {
      github: "https://github.com/red-moonx/biomonitor-capstone",
      dashboard: "https://datastudio.google.com/reporting/66d156e8-19b6-4879-9dae-a09d9af42ea7"
    }
  }
];

// Sort newest first
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

let currentPage = 0;
const PROJECTS_PER_PAGE = 3;

function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  const start = currentPage * PROJECTS_PER_PAGE;
  const end = start + PROJECTS_PER_PAGE;
  const pageProjects = projects.slice(start, end);

  container.innerHTML = "";

  pageProjects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project card";

    // Create content
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

  updateNavigation();
}

function updateNavigation() {
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  let navContainer = document.getElementById("projectsNav");

  if (!navContainer) {
    navContainer = document.createElement("div");
    navContainer.id = "projectsNav";
    navContainer.className = "project-nav";
    const projectsSection = document.getElementById("projectsList");
    projectsSection.parentNode.appendChild(navContainer);
  }

  navContainer.innerHTML = "";

  if (totalPages <= 1) {
    navContainer.style.display = "none";
    return;
  }

  navContainer.style.display = "flex";

  const prevBtn = document.createElement("button");
  prevBtn.className = "project-nav-btn";
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

document.addEventListener("DOMContentLoaded", renderProjects);