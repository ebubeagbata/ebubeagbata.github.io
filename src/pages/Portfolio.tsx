import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, eyeOutline } from "ionicons/icons";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <div className="select-value" data-selecct-value>
              {selectedCategoryLabel}
            </div>
            <div className="select-icon">
              <IonIcon icon={chevronBack} />
            </div>
          </button>

          {dropdownOpen && (
            <ul className="select-list">
              {categories.map((cat) => (
                <li className="select-item" key={cat.value}>
                  <button
                    data-select-item
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.title + idx}
            >
              <a href="#">
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
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
