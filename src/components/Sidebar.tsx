import { IonIcon } from "@ionic/react";
import {
  chevronDown,
  locationOutline,
  logoInstagram,
  mailOutline,
  calendarOutline,
  logoTiktok,
  logoBehance,
} from "ionicons/icons";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/images/avatar-ebube.png"
            alt="Ebubechukwu Agbata"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "18%",
            }}
            width="80"
          ></img>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ebubechukwu Agbata">
            Ebubechukwu Agbata
          </h1>

          <p className="title">Brand & UX/UI Designer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span>Show Contacts</span>
          <IonIcon icon={chevronDown}></IonIcon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:agbataebubechukuw@gmail.com"
                className="contact-link"
              >
                agbataebubechukuw@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1995-09-23">September 23, 1995</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Italy - Nigeria</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.tiktok.com/@brand.ebube"
              className="social-link"
              target="_blank"
            >
              <IonIcon icon={logoTiktok}></IonIcon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/brand_ebube"
              target="_blank"
              className="social-link"
            >
              <IonIcon icon={logoInstagram}></IonIcon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.behance.net/ebubechagbata2"
              target="_blank"
              className="social-link"
            >
              <IonIcon icon={logoBehance}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
