document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.resume-tab');
  const cardsContainer = document.getElementById('resumeCards');

  if (!tabs.length || !cardsContainer) return;

  const resumeData = {
    experience: [
      {
        year: 'Oct 2025 – Present',
        location: 'Berlin, Germany',
        role: 'Data Scientist',
        institute: 'MDC-BIMSB',
        description:
          'I drive the completion of a 5-year multi-omics research study toward high-impact publication, leading two new research lines and coordinating cross-functional collaboration across four international teams. I oversee study design, data generation strategies, and computational workflows, while mentoring junior researchers.'
      },
      {
        year: 'Jan 2019 – Oct 2025',
        location: 'Berlin, Germany',
        role: 'PhD Researcher',
        institute: 'MDC-BIMSB',
        description:
          'I led and co-led pioneering single-cell multi-omics studies in neuronal systems, dissecting gene regulatory mechanisms across health and disease states. I contributed to five additional genomics projects with interdisciplinary teams, from experimental planning to data production and interpretation, resulting in successful publications. Communicating technical insights to diverse audiences strengthened my ability to explain complex biological and analytical findings.'
      },
      {
        year: 'Feb 2017 – Aug 2018',
        location: 'New York, USA',
        role: 'Data Scientist',
        institute: 'NYU School of Medicine',
        description:
          'I conducted integrative genomic analyses (ChIP-seq, RNA-seq, ATAC-seq) for studies in inflammation and leukemia, generating and processing large-scale datasets that supported high-impact publications. I collaborated closely with clinical and experimental partners, refining my computational skills and gaining experience working with primary patient samples.'
      },
      {
        year: 'Oct 2015 – Sept 2016',
        location: 'Berlin, Germany & Rome, Italy',
        role: 'Visiting Researcher',
        institute: 'EMBL & MPI-MG',
        description:
          'I developed strong foundational skills in wet-lab and molecular techniques, experience that deepened my understanding of the full experimental–computational interface in biological research.'
      }
    ],
    education: [
      {
        year: '2025',
        title: 'PhD, Systems Biology',
        place: 'Humboldt University',
        subtitle: 'Berlin, Germany',
        description:
          'With highest honors (<em>summa cum laude</em>).<br>Project conceptualization, experimental execution, large-scale data analysis, narrative and publication, and cross-functional teamwork.'
      },
      {
        year: '2017',
        title: 'MSc, Bioinformatics',
        place: 'Autonomous University of Barcelona',
        subtitle: 'Barcelona, Spain',
        description:
          'Coding in bash and Python, use of Git and Docker, and extensive training in Genomic analyses.'
      },
      {
        year: '2015',
        title: 'BSc, Biochemistry and Molecular Biology',
        place: 'University of Cordoba',
        subtitle: 'Cordoba, Spain',
        description:
          'Minor in Genetics. Strong foundation in experimental design.'
      }
    ]
  };

  function renderExperienceCard(item) {
    const line1 = item.year; // dates
    const line2 = item.role; // role
    const line3 = `${item.institute} (${item.location})`; // institute + place

    return `
      <article class="resume-card">
        <p class="resume-card-line1 resume-date">${line1}</p>
        <p class="resume-card-line2 title-card">${line2}</p>
        <p class="resume-card-line3 resume-meta">${line3}</p>
        <p class="resume-card-description text-body">${item.description}</p>
      </article>
    `;
  }

  function renderEducationCard(item) {
      const subtitleLine = item.subtitle
    ? `${item.place} (${item.subtitle})`
    : item.place;

    return `
      <article class="resume-card">
        <p class="resume-card-line1 resume-date">${item.year}</p>
        <p class="resume-card-line2 title-card">${item.title}</p>
        <p class="resume-card-line3 resume-meta">${subtitleLine}</p>
        <p class="resume-card-description text-body">${item.description}</p>
      </article>
    `;
  }

  function renderCards(type) {
    const items = resumeData[type] || [];
    const html = items
      .map(item =>
        type === 'experience'
          ? renderExperienceCard(item)
          : renderEducationCard(item)
      )
      .join('');
    cardsContainer.innerHTML = html;
  }

  function setActiveTab(activeTab) {
    tabs.forEach(tab => {
      const isActive = tab === activeTab;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  // Initial render: Experience
  renderCards('experience');

  // Tab click handling
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      if (!filter) return;

      setActiveTab(tab);
      renderCards(filter);
    });
  });
});
