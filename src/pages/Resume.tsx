import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Federal Polytechnic, Oko</h4>

            <span>2015 — 2019</span>

            <p className="timeline-text">
              <b>
                Higher National Diploma in Business Administration and
                Management
              </b>
              <br />
              Completed with a focus on strategic planning, entrepreneurship,
              and business development. Knowledge that supports my work as a
              designer for business-focused brands.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Federal Polytechnic, Oko</h4>

            <span>2012 — 2014</span>

            <p className="timeline-text">
              <b>National Diploma in Business Administration and Management</b>
              <br />
              Developed a strong understanding of business operations,
              marketing, and management, skills that now enhance my strategic
              approach to design.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Saint Theresa’s Secondary School
            </h4>

            <span>2005 — 2011</span>

            <p className="timeline-text">
              Began developing my skills in art and design through personal
              projects and school activities.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Freelance Brand & UI/UX Designer
            </h4>

            <span>2024 — Present</span>

            <p className="timeline-text">
              Collaborate with small businesses and startups to develop
              strategic brand identities and cohesive visual systems. Design
              intuitive and engaging user interfaces for websites and digital
              products. Manage projects end-to-end, from client discovery and
              strategy to final design delivery. Apply business knowledge to
              create design solutions that support brand growth and user
              engagement.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Brand Designer & UI/UX Design Support
            </h4>

            <span>2022 — 2024</span>

            <p className="timeline-text">
              <b>Zeuch Interactive Ltd</b>
              <br />
              Designed brand identities, including logos, visual systems, and
              marketing materials for startups and small businesses.
              Collaborated with the UI/UX team to support the creation of
              user-friendly digital interfaces. Contributed to client
              presentations, moodboards, and style guides to ensure brand
              consistency across platforms. Helped bridge brand strategy and
              digital design by aligning visuals with user expectations.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">UX/UI</h5>
              <data value="65">65%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Typography</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <section className="skill" style={{ marginTop: "2rem" }}>
        <h3 className="h3 skills-title">Languages</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">English</h5>
              <data value="100">100%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "100%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">French</h5>
              <data value="60">60%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Italian</h5>
              <data value="30">30%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "30%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
