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
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <SkillList>
          <SkillItem
            icon="./images/icon-design.svg"
            title="Web design"
            text="The most modern and high-quality design made at a professional level."
          />
          <SkillItem
            icon="./images/icon-dev.svg"
            title="Web development"
            text="High-quality development of sites at the professional level."
          />
          <SkillItem
            icon="./images/icon-app.svg"
            title="Mobile apps"
            text="Professional development of applications for iOS and Android."
          />
          <SkillItem
            icon="./images/icon-photo.svg"
            title="Photography"
            text="I make high-quality photos of any category at a professional level."
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

      <section className="clients">
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
      </section>
    </article>
  );
}
