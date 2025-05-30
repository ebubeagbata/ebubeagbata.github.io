import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, eyeOutline, closeOutline } from "ionicons/icons";

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
  },
  {
    title: "Orizon",
    category: "web development",
    img: "./images/project-2.png",
    alt: "orizon",
  },
  {
    title: "Fundo",
    category: "web design",
    img: "./images/project-3.jpg",
    alt: "fundo",
  },
  {
    title: "Brawlhalla",
    category: "applications",
    img: "./images/project-4.png",
    alt: "brawlhalla",
  },
  {
    title: "DSM.",
    category: "web design",
    img: "./images/project-5.png",
    alt: "dsm.",
  },
  {
    title: "MetaSpark",
    category: "web design",
    img: "./images/project-6.png",
    alt: "metaspark",
  },
  {
    title: "Summary",
    category: "web development",
    img: "./images/project-7.png",
    alt: "summary",
  },
  {
    title: "Task Manager",
    category: "applications",
    img: "./images/project-8.jpg",
    alt: "task manager",
  },
  {
    title: "Arrival",
    category: "web development",
    img: "./images/project-9.png",
    alt: "arrival",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [zoomedProject, setZoomedProject] = useState<null | typeof projects[0]>(null);

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
          <button
            className="filter-select"
            data-select
          >
            <div className="select-value">
              {selectedCategoryLabel}
            </div>
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
                style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}
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
              maxWidth: 600,
              width: "90vw",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              position: "relative",
            }}
            onClick={e => e.stopPropagation()}
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
            <img
              src={zoomedProject.img}
              alt={zoomedProject.alt}
              style={{
                width: "100%",
                borderRadius: 8,
                marginBottom: 16,
                objectFit: "contain",
                maxHeight: "60vh",
                background: "#f5f5f5",
              }}
            />

            <h3 style={{ margin: "0 0 8px" }}>{zoomedProject.title}</h3>
            <p style={{ color: "#888", margin: 0 }}>
              {categories.find((c) => c.value === zoomedProject.category)?.label ||
                zoomedProject.category}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
