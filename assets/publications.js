// assets/publications.js

// Each publication:
// {
//   title: "Full title",
//   authors: "Author list",
//   journal: "Journal / status",
//   year: 2024,
//   isFirstAuthor: true/false,
//   paperUrl: "https://...",
//   codeUrl: "https://...",
//   geoUrl: "https://...",
//   zenodoUrl: "https://...",
//   notes: "Optional extra info",
//   description: "Optional detailed contribution text (shown in dropdown)."
// }

const publications = [
  // ---------- FIRST AUTHOR ----------

  {
    title:
      "Gene regulatory mechanisms of cellular memory of a single cocaine exposure in VTA dopaminergic neurons",
    authors:
      "Zea-Redondo, L., Franke, V., Paul, E. J., Kukalev, A., Haghverdi, L., Bouman, B. J., Arguedas Jimenez, L., Braeuning, C., Marín, O., Akalin, A., Ungless, M. A., Winick-Ng, W., & Pombo, A.",
    journal: "Manuscript in preparation for submission",
    year: 2025,
    isFirstAuthor: true,
    paperUrl: null,
    codeUrl:
      "https://github.com/red-moonx/10X-multiome_DNs_drug_exposure",
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE307071",
    zenodoUrl: "https://zenodo.org/records/16994739",
    notes: "",
    description:
      "As the sole first author, I led the conceptualization and design of this project. I optimized and established single-cell experiments and performed static and time series analyses across a comprehensive time course to identify short-term and persistent gene-regulatory signatures induced by drug exposure. I integrated these data with published datasets to advance the understanding of the underlying molecular mechanisms. I was responsible for all data analyses, interpretation, figure preparation, and manuscript writing, with conceptual input from team mates, and coordinated project management and collaboration among co-authors."
  },

  {
    title: "Cell-type specialization is encoded by specific chromatin topologies",
    authors:
      "Winick-Ng, W.*, Kukalev, A.*, Harabula, I.*, Zea-Redondo, L.*, Szabó, D.*, Meijer, M., Serebreni, L., Zhang, Y., Bianco, S., Chiariello, A. M., Irastorza-Azcarate, I., Thieme, C. J., Sparks, T. M., Carvalho, S., Fiorillo, L., Musella, F., Irani, E., Torlai Triglia, E., Kolodziejczyk, A. A., Abentung, A., Apostolova, G., Paul, E. J., Franke, V., Kempfer, R., Akalin, A., Teichmann, S. A., Dechant, G., Ungless, M. A., Nicodemi, M., Welch, L., Castelo-Branco, G., & Pombo, A.",
    journal: "Nature 599, 684–691",
    year: 2021,
    isFirstAuthor: true, // shared first author
    paperUrl: "https://doi.org/10.1038/s41586-021-04081-2",
    codeUrl: null,
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE174024",
    zenodoUrl: null,
    notes: "* Shared first authorship",
    description:
      "As co–first author, I optimized and generated bulk and single-cell ATAC-seq libraries from murine midbrain, and integrated single-cell RNA-seq, ATAC-seq, and 3D chromatin topology datasets across different brain cell types. I performed data processing and analysis, provided conceptual input and interpretation, prepared figures, and contributed to manuscript revision."
  },

  {
    title:
      "Mechanisms of enhancer function in neuronal systems in health and disease",
    authors: "Zea-Redondo, L., & Pombo, A.",
    journal:
      "Current Opinion in Systems Biology 32–33, 100443",
    year: 2023,
    isFirstAuthor: true,
    paperUrl: "https://doi.org/10.1016/j.coisb.2022.100443",
    codeUrl: null,
    geoUrl: null,
    zenodoUrl: null,
    notes: "Review",
    description:
      "I wrote the initial draft of this invited review and contributed to the literature review, manuscript structure, and figure design. I also participated in editing and revision in collaboration with the senior author."
  },

  // ---------- OTHER AUTHOR ----------

  {
    title:
      "SRRM2 splicing factor modulates cell fate in early development",
    authors:
      "Carvalho, S., Zea-Redondo, L., Tang, T. C. C., Stachel-Braum, P., Miller, D., Caldas, P., Kukalev, A., Diecke, S., Grosswendt, S., Grosso, A. R., & Pombo, A.",
    journal: "Biology Open 13(4)",
    year: 2024,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1242/bio.060415",
    codeUrl: null,
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE243429",
    zenodoUrl: null,
    notes: "",
    description:
      "I processed and analyzed single-cell RNA-seq data, performing mapping, quality control, filtering, clustering, and differential expression analyses within and across cell clusters. I also advised the lead author on computational strategy, data visualization, and interpretation of single-cell results."
  },

  {
    title:
      "Specialised super-enhancer networks in stem cells and neurons",
    authors:
      "Harabula, I., Speakman, L., Musella, F., Fiorillo, L., Zea-Redondo, L., Kukalev, A., Beagrie, R. A., Morris, K. J., Fernandes, L., Irastorza-Azcarate, I., Fernandes, A. M., Carvalho, S., Szabó, D., Ferrai, C., Nicodemi, M., Welch, L., & Pombo, A.",
    journal:
      "bioRxiv",
    year: 2025,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1101/2025.08.13.670083",
    codeUrl: null,
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE304720",
    zenodoUrl: "https://zenodo.org/records/16780836",
    notes: "Currently under revision in Genome Research",
    description:
      "I optimized and generated bulk ATAC-seq datasets from ESC and in vitro differentiated neurons, performed data preprocessing, and integrated ATAC-seq with ChIP-seq data to identify and curate enhancer and super-enhancer regions in stem cells and neurons."
  },

  {
    title:
      "3D genome topologies distinguish pluripotent epiblast and primitive endoderm cells in the mouse blastocyst",
    authors:
      "Loof, G., Szabó, D., Garg, V., Kukalev, A., Zea-Redondo, L., Kempfer, R., Sparks, T. M., Zhang, Y., Thieme, C. J., Carvalho, S., Weise, A., Balachandran, M., Liehr, T., Welch, L. R., Hadjantonakis, A.-K., & Pombo, A.",
    journal: "bioRxiv",
    year: 2022,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1101/2022.10.19.512781",
    codeUrl: null,
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE196080",
    zenodoUrl: null,
    notes: "",
    description:
      "I generated bulk ATAC-seq libraries, performed ATAC-seq data processing and analysis, and optimized peak calling to refine chromatin accessibility profiles distinguishing pluripotent epiblast and primitive endoderm cells in the mouse blastocyst."
  },

  {
    title:
      "A single dose of cocaine rewires the 3D genome structure of midbrain dopamine neurons",
    authors:
      "Szabó, D., Franke, V., Bianco, S., Batiuk, M. Y., Paul, E. J., Kukalev, A., Pfisterer, U. G., Irastorza-Azcarate, I., Chiariello, A. M., Demharter, S., Zea-Redondo, L., Lopez-Atalaya, J. P., Nicodemi, M., Akalin, A., Khodosevich, K., Ungless, M. A., Winick-Ng, W., & Pombo, A.",
    journal: "bioRxiv",
    year: 2024,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1101/2024.05.10.593308",
    codeUrl: null,
    geoUrl: null,
    zenodoUrl: null,
    notes: "",
    description:
      "I supported data interpretation, critically reviewed the manuscript before submission, and provided datasets and analyses for rebuttal preparation during the revision process."
  },

  {
    title:
      "TRAF6 functions as a tumor suppressor in myeloid malignancies by directly targeting MYC oncogenic activity",
    authors:
      "Muto, T., Guillamot, M., Yeung, J., Fang, J., Bennett, J., Nadorp, B., Lasry, A., Zea-Redondo, L., Choi, K., Gong, Y., Walker, C. S., Hueneman, K., Bolanos, L. C., Barreyro, L., Lee, L. H., Greis, K. D., Vasyliev, N., Khodadadi-Jamayran, A., Nudler, E., Lujambio, A., Lowe, S. W., Aifantis, I., & Starczynowski, D. T.",
    journal: "Cell Stem Cell 29(2), 298–314.e9",
    year: 2022,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1016/j.stem.2021.12.007",
    codeUrl: null,
    geoUrl: null,
    zenodoUrl: null,
    notes: "",
    description: ""
  },
  
  {
    title:
      "The E3 ubiquitin ligase SPOP controls resolution of systemic inflammation by triggering MYD88 degradation",
    authors:
      "Guillamot, M., Ouazia, D., Dolgalev, I., Yeung, S. T., Kourtis, N., Dai, Y., Corrigan, K., Zea-Redondo, L., Saraf, A., Florens, L., Washburn, M. P., Tikhonova, A. N., Malumbres, M., Gong, Y., Tsirigos, A., Park, C., Barbieri, C., Khanna, K. M., Busino, L., & Aifantis, I.",
    journal: "Nature Immunology 20, 1196–1207",
    year: 2019,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1038/s41590-019-0454-6",
    codeUrl: null,
    geoUrl:
      "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE112542",
    zenodoUrl: null,
    notes: "",
    description: ""
  },

  {
    title:
      "Pomegranate peel pectin films as affected by montmorillonite",
    authors:
      "Oliveira, T. Í. S., Zea-Redondo, L., Moates, G. K., Wellner, N., Cross, K., Waldron, K. W., & Azeredo, H. M. C.",
    journal: "Food Chemistry 198, 107–112",
    year: 2016,
    isFirstAuthor: false,
    paperUrl: "https://doi.org/10.1016/j.foodchem.2015.09.109",
    codeUrl: null,
    geoUrl: null,
    zenodoUrl: null,
    notes: "",
    description: ""
  }
];

// ---------- Rendering logic ----------

(function () {
  const listEl = document.getElementById("publicationsList");
  const tabButtons = document.querySelectorAll(".pub-tab");

  if (!listEl) return;

  function renderPublications(filter = "first") {
    const filtered = publications.filter((p) =>
      filter === "first" ? p.isFirstAuthor : !p.isFirstAuthor
    );

    listEl.innerHTML = "";

    if (!filtered.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent =
        filter === "first"
          ? "First-author publications will appear here soon."
          : "Other publications will appear here soon.";
      listEl.appendChild(empty);
      return;
    }

    filtered.forEach((pub, index) => {
      const card = document.createElement("article");
      card.className = "card publication-card";

      const metaBits = [pub.journal, pub.year, pub.notes].filter(Boolean);
      const metaText = metaBits.join(" · ");

      const authorsHTML = pub.authors.replace(/Zea-Redondo, L\./g, '<u>Zea-Redondo, L.</u>');
      card.innerHTML = `
        <div class="pub-main">
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors">${authorsHTML}</p>
          ${metaText ? `<p class="pub-meta">${metaText}</p>` : ""}
        </div>

        <div class="pub-footer">
          <div class="pub-actions">
            ${pub.paperUrl ? `
              <a class="pub-chip" href="${pub.paperUrl}" target="_blank" rel="noopener">
                <i class="fa-solid fa-file-lines"></i>
                <span>View paper</span>
              </a>` : ""}

            ${pub.codeUrl ? `
              <a class="pub-chip" href="${pub.codeUrl}" target="_blank" rel="noopener">
                <i class="fa-brands fa-github"></i>
                <span>Code</span>
              </a>` : ""}

            ${pub.geoUrl ? `
              <a class="pub-chip" href="${pub.geoUrl}" target="_blank" rel="noopener">
                <i class="fa-solid fa-dna"></i>
                <span>GEO</span>
              </a>` : ""}

            ${pub.zenodoUrl ? `
              <a class="pub-chip" href="${pub.zenodoUrl}" target="_blank" rel="noopener">
                <i class="fa-solid fa-database"></i>
                <span>Zenodo</span>
              </a>` : ""}
          </div>

          ${
            pub.description
              ? `
          <button
            class="pub-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="pub-desc-${filter}-${index}"
          >
            <span>Details</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>`
              : ""
          }
        </div>

        ${
          pub.description
            ? `
        <div
          id="pub-desc-${filter}-${index}"
          class="pub-description"
          hidden
        >
          <p>${pub.description}</p>
        </div>`
            : ""
        }
      `;

      listEl.appendChild(card);
    });

    // Attach toggle handlers
    const toggles = listEl.querySelectorAll(".pub-toggle");
    toggles.forEach((btn) => {
      const card = btn.closest(".publication-card");
      const descId = btn.getAttribute("aria-controls");
      const desc =
        (descId && card.querySelector(`#${CSS.escape(descId)}`)) ||
        card.querySelector(".pub-description");

      if (!desc) return;

      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        const nextState = !isOpen;

        btn.setAttribute("aria-expanded", String(nextState));
        btn.classList.toggle("open", nextState);
        desc.hidden = !nextState;
      });
    });
  }

  // Tab interactions
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "first";

      tabButtons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      renderPublications(filter);
    });
  });

  // Initial render
  renderPublications("first");
})();
