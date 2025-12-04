// assets/projects.js

const projects = [
  {
    title: "Analysis of single-cell chromatin and transcriptional dynamics following drug exposure",
    description:
      "Code from my PhD work dissecting how a single drug exposure reshapes chromatin accessibility and gene expression in VTA dopamine neurons using single-cell RNA-seq and ATAC-seq.",
    image: "assets/project_cover/project1_cover.png",
    tags: ["R", "Python", "Seurat", "edgeR", "tslearn", "scikit-learn"],
    links: {
      github: "https://github.com/red-moonx/10X-multiome_DNs_drug_exposure/tree/main",
      shiny: "https://shiny.mdc-berlin.de/VTA_Dopa_Timecourse/"
    }
  }
];

let currentPage = 0;
const PROJECTS_PER_PAGE = 3;

function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  const start = currentPage * PROJECTS_PER_PAGE;
  const end = start + PROJECTS_PER_PAGE;
  const pageProjects = projects.slice(start, end);

  container.innerHTML = "";

  pageProjects.forEach(project => {
    const article = document.createElement("article");
    article.className = "project card";

    // Cover image
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      article.appendChild(img);
    }

    // Content wrapper (title + description + tags + buttons)
    const contentDiv = document.createElement("div");
    contentDiv.className = "project-content";

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    contentDiv.appendChild(h3);

    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = project.description;
    contentDiv.appendChild(p);

    // Actions wrapper (tags + buttons)
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
      codeBtn.style.padding = "8px 12px";
      codeBtn.style.fontWeight = "600";

      const icon = document.createElement("i");
      icon.className = "fa-brands fa-github";
      codeBtn.appendChild(icon);

      const span = document.createElement("span");
      span.textContent = " Code";
      codeBtn.appendChild(span);

      buttonsDiv.appendChild(codeBtn);
    }

    if (project.links?.shiny) {
      const liveBtn = document.createElement("a");
      liveBtn.className = "btn";
      liveBtn.href = project.links.shiny;
      liveBtn.target = "_blank";
      liveBtn.rel = "noopener noreferrer";
      liveBtn.style.padding = "8px 12px";
      liveBtn.style.fontWeight = "600";
      liveBtn.textContent = "Shiny app";
      buttonsDiv.appendChild(liveBtn);
    }

    actionsWrapper.appendChild(buttonsDiv);
    contentDiv.appendChild(actionsWrapper);
    article.appendChild(contentDiv);

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

  // Previous button
  const prevBtn = document.createElement("button");
  prevBtn.className = "project-nav-btn";
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.disabled = currentPage === 0;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  });
  navContainer.appendChild(prevBtn);

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.className = "project-nav-btn";
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.disabled = currentPage >= totalPages - 1;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderProjects();
    }
  });
  navContainer.appendChild(nextBtn);
}

document.addEventListener("DOMContentLoaded", renderProjects);
