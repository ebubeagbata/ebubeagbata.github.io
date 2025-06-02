import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { SkillList, SkillItem } from "../components/Skills";
import {
  TestimonialList,
  TestimonialItem,
  type TestimonialType,
} from "../components/Testimonial";
import { useState } from "react";

export default function About() {
  const [modal, setModal] = useState<TestimonialType | undefined>();

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm Ebubechukwu — a passionate brand designer with a growing focus
          on UI/UX design. With a strong foundation in visual storytelling and
          brand identity, I'm now channeling my creativity and user-centered
          mindset into crafting intuitive digital experiences.
        </p>

        <p>
          I'm currently seeking opportunities where I can blend my design
          background with my new skills in UI/UX to create impactful,
          user-friendly products. Let's build something meaningful together.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <SkillList>
          <SkillItem
            icon="./images/icon-design.svg"
            title="Brand design"
            text="Creating a unique and memorable brand identity that stands out."
          />
          <SkillItem
            icon="./images/icon-dev.svg"
            title="Typography"
            text="Crafting visually appealing and readable typography for various media."
          />
          <SkillItem
            icon="./images/icon-app.svg"
            title="UX/UI design"
            text="Designing user-friendly interfaces and experiences for digital products."
          />
        </SkillList>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <TestimonialList>
          <TestimonialItem
            avatar="./images/avatar-1.png"
            name="Daniel lewis"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
            onClick={(avatar, name, text) => {
              setModal({ avatar, name, text });
            }}
          />
          <TestimonialItem
            avatar="./images/avatar-2.png"
            name="Jessica miller"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
            onClick={(avatar, name, text) => {
              setModal({ avatar, name, text });
            }}
          />
          <TestimonialItem
            avatar="./images/avatar-3.png"
            name="Emily evans"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
            onClick={(avatar, name, text) => {
              setModal({ avatar, name, text });
            }}
          />
          <TestimonialItem
            avatar="./images/avatar-4.png"
            name="Henry william"
            text="Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
            onClick={(avatar, name, text) => {
              setModal({ avatar, name, text });
            }}
          />
        </TestimonialList>
      </section>

      {modal && (
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
          onClick={() => setModal(undefined)}
        >
          <div className={`modal-container active`}>
            <div
              className="overlay"
              data-overlay
              onClick={() => setModal(undefined)}
            ></div>

            <section className="testimonials-modal">
              <button
                className="modal-close-btn"
                onClick={() => setModal(undefined)}
              >
                <IonIcon icon={closeOutline} />
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img src={modal.avatar} alt={modal.name} width="80" />
                </figure>

                <img src="./images/icon-quote.svg" alt="quote icon" />
              </div>

              <div className="modal-content">
                <h4 className="h3 modal-title">{modal.name}</h4>

                <div>
                  <p>{modal.text}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
}
