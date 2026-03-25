// assets/skills.js

// 2×3 skills grid (general skills)
const skillsGroups = [
  {
    title: "Programming & Core Tools",
    items: [
      { label: "Python", iconClass: "assets/icons/python.svg" },
      { label: "R", iconClass: "devicon-r-plain colored" },
      { label: "SQL", iconClass: "devicon-postgresql-plain colored" },
      { label: "Git", iconClass: "devicon-git-plain colored" },
      { label: "Linux", iconClass: "devicon-linux-plain colored" },
      { label: "Bash", iconClass: "devicon-bash-plain colored" },
      { label: "Pandas", iconClass: "devicon-pandas-plain colored" },
      { label: "NumPy", iconClass: "devicon-numpy-plain colored" }
    ]
  },
  {
    title: "Machine Learning / AI",
    items: [
      { label: "scikit-learn", iconClass: "devicon-scikitlearn-plain colored" },
      { label: "Supervised learning", iconClass: "" },
      { label: "Model evaluation", iconClass: "" }
    ]
  },
  {
    title: "Data Analysis & Statistics",
    items: [
      { label: "Statistical analysis", iconClass: "" },
      { label: "Hypothesis testing", iconClass: "" },
      { label: "Data exploration & interpretation", iconClass: "" }
    ]
  },
  {
    title: "Data Visualization",
    items: [
      { label: "ggplot2", svgPath: "assets/icons/Ggplot2.svg" },
      { label: "shiny", svgPath: "assets/icons/shiny.svg" },
      { label: "matplotlib", svgPath: "assets/icons/Matplotlib.svg" },
      { label: "Scientific figures", iconClass: "" }
    ]
  },
  {
    title: "Data Engineering & Pipelines",
    items: [
      { label: "Docker", iconClass: "devicon-docker-plain colored" },
      { label: "GCP", svgPath: "assets/icons/GCP.svg" },
      { label: "BigQuery", svgPath: "assets/icons/bigquery.svg" },
      { label: "Terraform", svgPath: "assets/icons/terraform.svg" },
      { label: "dbt", svgPath: "assets/icons/dbt.svg" },
      { label: "Spark", svgPath: "assets/icons/spark.svg" },
      { label: "Kafka", svgPath: "assets/icons/kafka.svg" },
      { label: "Workflow orchestration (Kestra)", iconClass: "" }
    ]
  },
  {
    title: "Design & Communication",
    items: [
      { label: "Illustrator", iconClass: "devicon-illustrator-plain colored" },
      { label: "Canva", iconClass: "devicon-canva-plain colored" },
      { label: "Figure design", iconClass: "" },
      { label: "Presentations", iconClass: "" }
    ]
  }
];

// Bioinformatics 2-column content (4–4 split)
const bioColumns = [
  {
    title: "Analyses & Methods",
    items: [
      "Bulk and single-cell analyses (RNA, ATAC, ChIP)",
      "Differential expression (muscat, edgeR/DESeq2)",
      "Statistical modeling (GLMs, mixed models, hypothesis testing)",
      "Time-series pattern analysis (tslearn, KMeans)",
      "Biological data interpretation"
    ]
  },
  {
    title: "Tools & Frameworks",
    items: [
      "Single-cell (Seurat, Scanpy, AnnData, Signac, ArchR)",
      "Dimensionality reduction (UMAP, PCA)",
      "Quality control & batch correction (Harmony, Conos)",
      "Scripted reproducible workflows (Git, automation)"
    ]
  }
];

function renderSkillsGrid() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  skillsGroups.forEach(group => {
    const card = document.createElement("article");
    card.className = "card skill-card";

    const title = document.createElement("h3");
    title.className = "skill-card-title";
    title.textContent = group.title;
    card.appendChild(title);

    const list = document.createElement("ul");
    list.className = "skill-card-list";

    group.items.forEach(item => {
      const li = document.createElement("li");
      li.className = "skill-pill";
      if (item.iconClass || item.svgPath) {
        const wrapper = document.createElement("span");
        wrapper.className = "skill-item-with-icon";

        if (item.iconClass) {
          const icon = document.createElement("i");
          icon.className = item.iconClass;
          wrapper.appendChild(icon);
        }
        if (item.svgPath) {
          const img = document.createElement("img");
          img.src = item.svgPath;
          img.alt = item.label + " icon";
          img.className = "skill-icon-svg";
          wrapper.appendChild(img);
        }
        const label = document.createElement("span");
        label.textContent = item.label;
        wrapper.appendChild(label);

        li.appendChild(wrapper);
      } else {
        li.textContent = item.label;
      }

      list.appendChild(li);
    });

    card.appendChild(list);
    container.appendChild(card);
  });
}

function renderBioinformaticsCard() {
  const container = document.getElementById("bioSkills");
  if (!container) return;

  // Clear in case of re-render
  container.innerHTML = "";

  const title = document.createElement("h3");
  title.className = "skill-card-title";
  title.textContent = "Bioinformatics & Computational Biology";
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "bio-grid";

  bioColumns.forEach(col => {
    const colDiv = document.createElement("div");

    const colTitle = document.createElement("h4");
    colTitle.className = "bio-col-title";
    colTitle.textContent = col.title;
    colDiv.appendChild(colTitle);

    const ul = document.createElement("ul");
    ul.className = "bio-col-list bullets";

    col.items.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });

    colDiv.appendChild(ul);
    grid.appendChild(colDiv);
  });

  container.appendChild(grid);
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderSkillsGrid();
  renderBioinformaticsCard();
});