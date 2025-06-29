import { useEffect, useState } from "react";
import { preload } from 'react-dom';
import { IonIcon } from "@ionic/react";
import { eyeOutline, closeOutline } from "ionicons/icons";
import "../css/animationLoading.css";
import Select from "../components/Select";

const categories = [
  { label: "All", value: "all" },
  { label: "UX/UI", value: "ux-ui" },
  { label: "Branding", value: "branding" },
];

const projects = [
  {
    title: "Devil's Daught",
    category: "branding",
    img: "/images/projects/devil-daught-thumbnail.webp",
    alt: "devil daught",
    src: "/images/projects/devil.png",
  },
  {
    title: "Aure",
    category: "branding",
    img: "/images/projects/aure-thumbnail.png",
    alt: "aure",
    src: "/images/projects/aure.png",
  },
  {
    title: "Bonfire",
    category: "branding",
    img: "/images/projects/bonfire-thumbnail.webp",
    alt: "bonfire",
    src: "/images/projects/bonfire.webp",
  },
  {
    title: "Wild & Organic",
    category: "branding",
    img: "/images/projects/wild&organic-thumbnail.png",
    alt: "wild&organic",
    src: "/images/projects/wild.png",
  },
  {
    title: "Fire Pizza",
    category: "ux-ui",
    img: "/images/projects/fire-pizza-thumbnail.webp",
    alt: "fire-pizza",
    src: "/images/projects/fire-pizza.png",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [zoomedProject, setZoomedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  useEffect(() => {
    for (const project of projects) {
      preload(project.src, { as: "image" });
    }
  }, []);

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

        <Select
          elements={categories}
          onSelect={(cat) => setSelectedCategory(cat.value)}
          selectedLabel={selectedCategoryLabel}
        />

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

      {
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
            visibility: zoomedProject ? "visible" : "hidden",
          }}
          onClick={() => {
            setZoomedProject(null);
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: 24,
              maxWidth: "90vw",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setZoomedProject(null);
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
                overflowY: "auto",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                src={zoomedProject?.src}
                alt={zoomedProject?.title}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      }
    </article>
  );
}
