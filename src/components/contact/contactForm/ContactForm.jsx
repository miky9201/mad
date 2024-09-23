import React, { useState } from "react";
import base from "../../../content/airtable"; // Importez la configuration Airtable

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi des données à Airtable
    base("contacts").create(
      [
        {
          fields: {
            Prénom: formData.firstName,
            Nom: formData.lastName,
            Société: formData.company,
            Téléphone: formData.phone,
            Email: formData.email,
            Sujet: formData.subject,
            Message: formData.message,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          alert("Erreur lors de l'envoi du formulaire");
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
        alert("Formulaire soumis avec succès !");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Première colonne */}
      <div className="column">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label>Prénom</label>
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label>Nom</label>
        </div>
        <div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <label>Société</label>
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}"
            title="Le numéro doit contenir 10 chiffres."
          />
          <label>Téléphone</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
      </div>

      {/* Deuxième colonne */}
      <div className="column">
        <div>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="MOEC Conception">MOEC Conception</option>
            <option value="MOEX Exécution">MOEX Exécution</option>
            <option value="OPC">OPC</option>
            <option value="AMO">AMO</option>
            <option value="Autre">Autre</option>
          </select>
          <label>Sujet</label>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Message</label>
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
