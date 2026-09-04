// assets/skills.js

// 2×3 skills grid
const skillsGroups = [
  {
    title: "🧬 Life Sciences & Scientific Data",
    items: [
      { label: "Systems Biology" },
      { label: "Bioinformatics" },
      { label: "Genomics" },
      { label: "Perturbation Analysis" },
      { label: "Time-course Analysis" },
      { label: "Clinical & Molecular Data" }
    ]
  },
  {
    title: "📊 Machine Learning & Statistics",
    items: [
      { label: "scikit-learn", iconClass: "devicon-scikitlearn-plain colored" },
      { label: "Supervised & Unsupervised ML" },
      { label: "Hyperparameter Tuning" },
      { label: "Dimensionality Reduction" },
      { label: "Statistical Modeling" },
      { label: "Model Evaluation" }
    ]
  },
  {
    title: "🧠 Deep Learning & GenAI",
    inProgress: true,
    items: [
      { label: "Neural Networks" },
      { label: "CNNs" },
      { label: "Transfer Learning" },
      { label: "AI Explainability" },
      { label: "Computer Vision" },
      { label: "NLP" },
      { label: "RAG" },
      { label: "Agentic RAG" },
      { label: "Embeddings" },
      { label: "Vector Search" },
      { label: "Function Calling" }
    ]
  },
  {
    title: "💻 Programming & Scientific Computing",
    items: [
      { label: "Python", svgPath: "assets/icons/python.svg" },
      { label: "SQL", iconClass: "devicon-postgresql-plain colored" },
      { label: "R", iconClass: "devicon-r-plain colored" },
      { label: "Git", iconClass: "devicon-git-plain colored" },
      { label: "Linux", iconClass: "devicon-linux-plain colored" },
      { label: "Bash", iconClass: "devicon-bash-plain colored" },
      { label: "Pandas", iconClass: "devicon-pandas-plain colored" },
      { label: "NumPy", iconClass: "devicon-numpy-plain colored" },
      { label: "Data Visualization" },
      { label: "Interactive Dashboards" }
    ]
  },
  {
    title: "🏗️ Data Engineering",
    items: [
      { label: "GCP", svgPath: "assets/icons/GCP.svg" },
      { label: "BigQuery", svgPath: "assets/icons/bigquery.svg" },
      { label: "dbt", svgPath: "assets/icons/dbt.svg" },
      { label: "Airflow", svgPath: "assets/icons/airflow.svg" },
      { label: "Spark", svgPath: "assets/icons/spark.svg" },
      { label: "Kafka", svgPath: "assets/icons/kafka.svg" },
      { label: "Terraform", svgPath: "assets/icons/terraform.svg" },
      { label: "ETL/ELT" },
      { label: "APIs & Web Scraping" }
    ]
  },
  {
    title: "⚙️ ML Engineering & MLOps",
    inProgress: true,
    items: [
      { label: "Docker", iconClass: "devicon-docker-plain colored" },
      { label: "MLflow", svgPath: "assets/icons/mlflow.svg" },
      { label: "CI/CD" },
      { label: "Cloud" },
      { label: "Model Deployment" },
      { label: "Experiment Tracking" },
      { label: "Monitoring" }
    ]
  }
];

function renderSkillsGrid() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = "";

  skillsGroups.forEach(group => {
    const card = document.createElement("article");
    card.className = "card skill-card";

    const title = document.createElement("h3");
    title.className = "skill-card-title";
    if (group.inProgress) {
      title.innerHTML = `${group.title} <span class="skill-in-progress">(in progress)</span>`;
    } else {
      title.textContent = group.title;
    }
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

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderSkillsGrid();
});