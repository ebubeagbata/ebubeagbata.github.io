import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  eyeOutline,
  paperPlane,
} from "ionicons/icons";

export default function MainContent() {
  return (
    <>
      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <IonIcon icon={chevronBack} />
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-1.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Finance</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-2.png"
                    alt="orizon"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Orizon</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-3.jpg"
                    alt="fundo"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Fundo</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-4.png"
                    alt="brawlhalla"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Brawlhalla</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img src="./images/project-5.png" alt="dsm." loading="lazy" />
                </figure>

                <h3 className="project-title">DSM.</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-6.png"
                    alt="metaspark"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">MetaSpark</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-7.png"
                    alt="summary"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Summary</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-8.jpg"
                    alt="task manager"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Task Manager</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src="./images/project-9.png"
                    alt="arrival"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Arrival</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>

      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-1.jpg"
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Design conferences in 2022
                  </h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt,
                    explicabo.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-2.jpg"
                    alt="Best fonts every designer"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Best fonts every designer
                  </h3>

                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                    est eligendi.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-3.jpg"
                    alt="Design digest #80"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #80</h3>

                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum
                    exercitationem ullam corporis suscipit.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-4.jpg"
                    alt="UI interactions of the week"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    UI interactions of the week
                  </h3>

                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis
                    nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-5.jpg"
                    alt="The forgotten art of spacing"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    The forgotten art of spacing
                  </h3>

                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/blog-6.jpg"
                    alt="Design digest #79"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #79</h3>

                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat,
                    velit esse cillum.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>

      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
            ></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <IonIcon icon={paperPlane} />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
}
