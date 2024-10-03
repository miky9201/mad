import React, { useEffect } from "react";
import "./contact.css";
import Aside from "../aside/Aside";
import Logo from "../logo/Logo";
import ContactForm from "./contactForm/ContactForm";
import { Helmet } from "react-helmet";

function Contact({ windowWidth }) {
  useEffect(() => {
    // Scroll vers le haut quand le composant est monté
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact - MAD Design Paris</title>
        <meta
          name="description"
          content="Retrouvez notre formulaire de contact si vous souhaitez discuter avec notre Agence MAD Design Paris"
        />
        <meta property="og:title" content="Contact - MAD Design Paris" />
        <meta
          property="og:description"
          content="Retrouvez notre formulaire de contact si vous souhaitez discuter avec notre Agence MAD Design Paris"
        />
        <meta name="format-detection" content="telephone=no" />

      </Helmet>
      <div>
        {windowWidth > 600 ? <Aside></Aside> : <Logo />}
        <h1>CONTACT |</h1>
        <div className="contact-content">
          <p>
            Depuis sa création en 2012, MAD DESIGN a su gagner la confiance de
            nombreux maitres d’ouvrages, en favorisant une approche méticuleuse
            et un relationnel basé sur la confiance. <br /> Une Agence portée
            par 6 architectes d’intérieur & chargés d’affaires. <br />
            <br />
            <br />
            MAD Design | <br />
            3 Passage Perreur 75020 Paris | <br />
            T. +33 1 41 66 64 00 | <br />
            contact@mad-design.fr
          </p>
          <ContactForm />
        </div>
        <div className="address-bottom">3 Passage Perreur | Paris</div>
      </div>
    </>
  );
}

export default Contact;
