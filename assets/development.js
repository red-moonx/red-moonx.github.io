// assets/development.js

const courses = {
  ongoing: [
    //     { 
    //       title: "Data Engineering Zoomcamp by DataTalks.Club", 
    //       institution: "", 
    //       duration: "8 weeks", 
    //       year: "Cohort 2026 | Started Jan 12, 2026",
    //      description: "Containerization & infrastructure as code (Docker, Docker Compose, Terraform, GCP) | Workflow orchestration (Kestra) | Data ingestion & normalization | Data warehousing (BigQuery) | Analytics engineering & data modeling (dbt) | Batch & streaming",
    //    },
    {
      title: "Machine Learning Zoomcamp by DataTalks.Club",
      institution: "",
      duration: "16 weeks",
      year: "Self-paced | 2025-2026",
      description: "Supervised learning (regression, classification, decision trees, ensemble methods) | Neural networks & deep learning (CNNs, transfer learning) | Model deployment (FastAPI, Docker) | Serverless deployment (AWS Lambda) | Container orchestration (Kubernetes, TensorFlow Serving) | Tools: Scikit-Learn, XGBoost, TensorFlow, PyTorch"
    },
    {
      title: "IBM Data Science Professional Certificate",
      institution: "",
      duration: "12 course series",
      year: "Self-paced | 2025-2026",
      description: "Data science methodology | Python for data science & AI | Databases & SQL | Data analysis & visualization with Python | Machine learning with Python | Applied data science capstone | Generative AI | Tools: Python, Jupyter, SQL, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn"
    }
  ],
  finished: [
    {
      year: "2026",
      title: "Data Engineering Zoomcamp by DataTalks.Club",
      location: "online",
      date: "January–April 2026",
      description: "Docker | Terraform & GCP | Workflow orchestration | API ingestion & incremental loading | BigQuery & data warehousing | dbt analytics engineering | Spark batch processing | Kafka streaming & schema management",
      certificate: "assets/certificates/de_zoomcamp_certificate.pdf"
    },
    { year: "2025", title: "Helmholtz Career and Leadership Development", location: "Hofgeismar, Germany", date: "16-18 September" },
    { year: "2025", title: "iNAMES summer school training course: Mixed Models", location: "online", date: "29-30 April and 6-7 May" },
    { year: "2025", title: "Computational Genomics Course: AI-assisted data analysis", location: "online", date: "3rd-9th March" },
    { year: "2024", title: "Good Scientific Practice workshop for PhD researchers", location: "BIMSB, Berlin", date: "3rd March" },
    { year: "2019", title: "SCOG workshop and hackathon \"Computational single-cell genomics\"", location: "Munich, Germany", date: "26-28 March" },
    { year: "2019", title: "SCOG workshop and hackathon \"Advances in single-cell epigenomics\"", location: "Linslerhof, Überherrn/Saarlouis, Germany", date: "4-6 November" },
    { year: "2019", title: "Berlin and London Joint School \"Epigenetics in single cells\"", location: "MDC, Berlin - MRC LMS, London", date: "3rd-10th April" },
    { year: "2019", title: "Adobe Illustrator - Basic and Intermediate", location: "MDC, Berlin", date: "1+1 day course" }
  ]
};

const outreach = {
  conferences: [
    { year: "2024", title: "Spatial Omics and complexities of human diseases: Resolve and Solve", location: "Rome, Italy", type: "poster" },
    { year: "2024", title: "FENS forum Vienna | International Neuroscience Conference", location: "Vienna, Austria", type: "poster" },
    { year: "2023", title: "16th BIMSB Summer Meeting", location: "Berlin, Germany", type: "poster" },
    { year: "2022", title: "14th Aegean International Conference on Genomes, Pathways and Systems Medicine", location: "Rhodes, Greece", type: "selected talk" },
    { year: "2022", title: "Abcam conference Epigenetics in the Nervous System: Development and disease", location: "Berlin, Germany", type: "poster" },
    { year: "2022", title: "Keystone Symposium on Single Cell Biology: Pushing New Frontiers in the Life Sciences", location: "Florence, Italy", type: "selected talk" },
    { year: "2019", title: "4DN Annual meeting", location: "Washington, US", type: "poster" }
  ],
  awards: [
    { year: "2022", title: "Aegean Conference Travel Award \"In recognition of an excellent research contribution\" at 14th International Conference on Genomes, Pathways and Systems Medicine" },
    { year: "2022", title: "Selected Short-Talk at Keystone Symposium on Single Cell Biology" },
    { year: "2022", title: "Travel Fellowship to attend Keystone Symposium on Single Cell Biology" },
    { year: "2019", title: "PhD studentship; DFG-funded international training group IRTG2403" },
    { year: "2017", title: "Programa Propi Pràctiques, (UAB, Spain): awarded funding for an international research placement" }
  ],
  activities: [
    { title: "Mentoring", description: "Advised MSc (2025) and PhD students (2022–2026) on single-cell transcriptomic analyses, including data pre-processing, integration, biological interpretation, and effective result presentation." },
    { title: "Reviewing", description: "Served as co-reviewer (2020–2026) for Nature Methods, Nature Biotechnology, Genome Biology, Cell Reports, Molecular Systems Biology and Genome Research." }
  ]
};

// ---------- Rendering logic ----------

(function () {
  const listEl = document.getElementById("developmentList");
  const tabButtons = document.querySelectorAll("#development .dev-tab");

  if (!listEl) return;

  function renderCourses() {
    listEl.innerHTML = "";
    listEl.className = "dev-content";

    // Ongoing courses
    const ongoingSection = document.createElement("div");
    ongoingSection.className = "dev-section";

    const ongoingTitle = document.createElement("h3");
    ongoingTitle.className = "dev-subsection-title";
    ongoingTitle.textContent = "Ongoing:";
    ongoingSection.appendChild(ongoingTitle);

    const introText = document.createElement("p");
    introText.className = "text-body";
    introText.style.marginTop = "-10px";
    introText.style.marginBottom = "20px";
    introText.textContent = "Passionate about continuous learning and expanding my skill set. Currently enrolled in the following courses to deepen my expertise in production ML, AI tools, and data engineering (expected completion: Q1 2026).";
    ongoingSection.appendChild(introText);

    const ongoingList = document.createElement("ul");
    ongoingList.className = "dev-list";

    courses.ongoing.forEach(course => {
      const li = document.createElement("li");
      li.className = "dev-item";

      let text = `<strong>${course.title}</strong>`;
      if (course.institution) text += ` ${course.institution}`;
      if (course.duration) text += ` | ${course.duration}`;
      if (course.year) text += ` | ${course.year}`;

      li.innerHTML = text;
      ongoingList.appendChild(li);

      // Add description if available
      if (course.description) {
        const descLi = document.createElement("li");
        descLi.className = "dev-item dev-item-desc";
        descLi.innerHTML = course.description;
        ongoingList.appendChild(descLi);
      }
    });

    ongoingSection.appendChild(ongoingList);
    listEl.appendChild(ongoingSection);

    // Finished courses
    const finishedSection = document.createElement("div");
    finishedSection.className = "dev-section";

    const finishedTitle = document.createElement("h3");
    finishedTitle.className = "dev-subsection-title";
    finishedTitle.textContent = "Finished:";
    finishedSection.appendChild(finishedTitle);

    const finishedList = document.createElement("ul");
    finishedList.className = "dev-list";

    courses.finished.forEach(course => {
      const li = document.createElement("li");
      li.className = "dev-item";

      let text = `<strong>${course.year}:</strong> ${course.title}`;
      if (course.location) text += ` (${course.location}`;
      if (course.date) text += `; ${course.date})`;
      else if (course.location) text += `)`;

      if (course.certificate) {
        text += ` <a href="${course.certificate}" target="_blank" rel="noopener noreferrer" style="margin-left: 8px; font-size: 0.9em; text-decoration: underline; color: inherit;">[Certificate]</a>`;
      }

      li.innerHTML = text;
      finishedList.appendChild(li);

      // Add description if available
      if (course.description) {
        const descLi = document.createElement("li");
        descLi.className = "dev-item dev-item-desc";
        descLi.innerHTML = course.description;
        finishedList.appendChild(descLi);
      }
    });

    finishedSection.appendChild(finishedList);
    listEl.appendChild(finishedSection);
  }

  function renderOutreach() {
    listEl.innerHTML = "";
    listEl.className = "dev-content";

    // Conferences
    const confSection = document.createElement("div");
    confSection.className = "dev-section";

    const confTitle = document.createElement("h3");
    confTitle.className = "dev-subsection-title";
    confTitle.textContent = "Conferences";
    confSection.appendChild(confTitle);

    const confList = document.createElement("ul");
    confList.className = "dev-list";

    outreach.conferences.forEach(conf => {
      const li = document.createElement("li");
      li.className = "dev-item";
      li.innerHTML = `<strong>${conf.year}:</strong> ${conf.title} (${conf.location}): ${conf.type}.`;
      confList.appendChild(li);
    });

    confSection.appendChild(confList);
    listEl.appendChild(confSection);

    // Awards
    const awardsSection = document.createElement("div");
    awardsSection.className = "dev-section";

    const awardsTitle = document.createElement("h3");
    awardsTitle.className = "dev-subsection-title";
    awardsTitle.textContent = "Awards";
    awardsSection.appendChild(awardsTitle);

    const awardsList = document.createElement("ul");
    awardsList.className = "dev-list";

    outreach.awards.forEach(award => {
      const li = document.createElement("li");
      li.className = "dev-item";
      li.innerHTML = `<strong>${award.year}:</strong> ${award.title}`;
      awardsList.appendChild(li);
    });

    awardsSection.appendChild(awardsList);
    listEl.appendChild(awardsSection);

    // Activities
    const activitiesSection = document.createElement("div");
    activitiesSection.className = "dev-section";

    const activitiesTitle = document.createElement("h3");
    activitiesTitle.className = "dev-subsection-title";
    activitiesTitle.textContent = "Outreach";
    activitiesSection.appendChild(activitiesTitle);

    const activitiesList = document.createElement("ul");
    activitiesList.className = "dev-list";

    outreach.activities.forEach(activity => {
      const li = document.createElement("li");
      li.className = "dev-item";
      li.innerHTML = `<strong>${activity.title}:</strong> ${activity.description}`;
      activitiesList.appendChild(li);
    });

    activitiesSection.appendChild(activitiesList);
    listEl.appendChild(activitiesSection);
  }

  // Tab interactions
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter || "courses";

      tabButtons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      if (filter === "courses") {
        renderCourses();
      } else {
        renderOutreach();
      }
    });
  });

  // Initial render
  renderCourses();
})();
