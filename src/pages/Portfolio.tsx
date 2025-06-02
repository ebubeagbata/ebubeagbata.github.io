import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, eyeOutline, closeOutline } from "ionicons/icons";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useWindowSize } from "@uidotdev/usehooks";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import '../css/animationLoading.css';

const categories = [
  { label: "All", value: "all" },
  { label: "UX/UI", value: "ux-ui" },
  { label: "Branding", value: "branding" },
];

const projects = [
  {
    title: "Devil's Daught",
    category: "branding",
    img: "/images/projects/devil-daught-thumbnail.png",
    alt: "devil daught",
    pdf: "/pdfs/Devil.pdf",
  },
  {
    title: "Aure",
    category: "branding",
    img: "/images/projects/aure-thumbnail.png",
    alt: "aure",
    pdf: "/pdfs/Aure.pdf",
  },
  {
    title: "Bonfire",
    category: "branding",
    img: "/images/projects/bonfire-thumbnail.png",
    alt: "bonfire",
    pdf: "/pdfs/Bonfire.pdf",
  },
  {
    title: "Wild & Organic",
    category: "branding",
    img: "/images/projects/wild&organic-thumbnail.png",
    alt: "wild&organic",
    pdf: "/pdfs/Devil.pdf",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [zoomedProject, setZoomedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const { width } = useWindowSize();
  const [documentLoaded, setDocumentLoaded] = useState(false);

  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const selectedCategoryLabel =
    categories.find((c) => c.value === selectedCategory)?.label ||
    "Select category";

  // Just to full the space while loading
  const loadingIndicator = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        width: "100%",
      }}
    />
  );

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat.value}>
              <button
                className={selectedCategory === cat.value ? "active" : ""}
                data-filter-btn
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value">{selectedCategoryLabel}</div>
            <div className="select-icon">
              <IonIcon icon={chevronBack} />
            </div>
          </button>

          <ul className="select-list">
            {categories.map((cat) => (
              <li className="select-item" key={cat.value}>
                <button
                  data-select-item
                  onClick={() => {
                    setSelectedCategory(cat.value);
                  }}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.title + idx}
            >
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                }}
                onClick={() => setZoomedProject(project)}
                aria-label={`Zoom ${project.title}`}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>
                  <img src={project.img} alt={project.alt} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">
                  {categories.find((c) => c.value === project.category)
                    ?.label || project.category}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {zoomedProject && (
        <div
          style={{
            position: "fixed",
            zIndex: 1000,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            setZoomedProject(null);
            setDocumentLoaded(false);
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: 24,
              maxWidth: "90vw",
              width: "90vw",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setZoomedProject(null);
                setDocumentLoaded(false);
              }}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 24,
                color: "#333",
                zIndex: 1000,
              }}
              aria-label="Close zoom"
            >
              <IonIcon icon={closeOutline} />
            </button>
            <div
              style={{
                maxHeight: "90vh",
                overflowY: documentLoaded ? "auto" : "hidden",
                overflowX: "hidden",
                position: "relative",
              }}
            >
              <Document
                file={zoomedProject.pdf}
                loading={loadingIndicator}
                onLoadedData={(pdf) => {
                  console.log(`Loaded PDF with ${pdf.numPages} pages`);
                }}
              >
                <Page
                  onRenderSuccess={() => {
                    setDocumentLoaded(true);
                  }}
                  loading={loadingIndicator}
                  pageNumber={1}
                  width={width ? width * 0.8 : 1.0}
                />
              </Document>
              {!documentLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="loading-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
