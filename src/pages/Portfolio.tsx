import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, eyeOutline, closeOutline } from "ionicons/icons";
import { Document, Page } from "react-pdf";
import { useWindowSize } from "@uidotdev/usehooks";

const categories = [
  { label: "All", value: "all" },
  { label: "Web design", value: "web design" },
  { label: "Applications", value: "applications" },
  { label: "Web development", value: "web development" },
];

const projects = [
  {
    title: "Finance",
    category: "web development",
    img: "./images/project-1.jpg",
    alt: "finance",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Orizon",
    category: "web development",
    img: "./images/project-2.png",
    alt: "orizon",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Fundo",
    category: "web design",
    img: "./images/project-3.jpg",
    alt: "fundo",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Brawlhalla",
    category: "applications",
    img: "./images/project-4.png",
    alt: "brawlhalla",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "DSM.",
    category: "web design",
    img: "./images/project-5.png",
    alt: "dsm.",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "MetaSpark",
    category: "web design",
    img: "./images/project-6.png",
    alt: "metaspark",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Summary",
    category: "web development",
    img: "./images/project-7.png",
    alt: "summary",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Task Manager",
    category: "applications",
    img: "./images/project-8.jpg",
    alt: "task manager",
    pdf: "./pdfs/Devil.pdf",
  },
  {
    title: "Arrival",
    category: "web development",
    img: "./images/project-9.png",
    alt: "arrival",
    pdf: "./pdfs/Devil.pdf",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [zoomedProject, setZoomedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const { width } = useWindowSize();

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const selectedCategoryLabel =
    categories.find((c) => c.value === selectedCategory)?.label ||
    "Select category";

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
          onClick={() => setZoomedProject(null)}
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
              onClick={() => setZoomedProject(null)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 24,
                color: "#333",
              }}
              aria-label="Close zoom"
            >
              <IonIcon icon={closeOutline} />
            </button>
            <div
              style={{
                maxHeight: "90vh",
                overflowY: "auto",
                overflowX: "-moz-initial",
              }}
            >
              <Document renderMode="canvas" file={zoomedProject.pdf}>
                <Page pageNumber={1} width={width ? width * 0.8 : 1.0} />
              </Document>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
