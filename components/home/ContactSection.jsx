"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Button } from "../ui/button";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Outros",
    message: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.terms) {
      alert("Por favor, aceite os termos e políticas de privacidade.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_7zrfvbs", // Service ID
        "template_kajhblj", // Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "laOXi-GazBgL10oD_" // Public Key
      )
      .then(
        () => {
          setSuccessMessage("Mensagem enviada com sucesso!");
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "Outros",
            message: "",
            terms: false,
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] bg-background text-writing">

      <div className="flex-1 bg-background-highlight p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-4xl text-title font-black uppercase mb-4">Entre em Contato</h2>
        <p className="text-xl">
          Preencha o formulário abaixo e entraremos em contato o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">

          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-md font-bold text-secondary mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="phone" className="block text-md font-bold text-secondary mb-1">
                Celular
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-bold text-secondary mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-md font-bold text-secondary mb-1">
              Assunto
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Parcerias">Parcerias</option>
              <option value="E-book">E-book</option>
              <option value="Serviços">Serviços</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-md font-bold text-secondary mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="2"
              required
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="h-4 w-4 border-gray-300 rounded focus:ring-primary"
              required
            />
            <label htmlFor="terms" className="block text-md font-medium text-secondary">
              Estou de acordo com os termos e políticas de privacidade.
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>

        </form>

        {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
      </div>

      <div className="flex-1 min-h-[40vh] sm:min-h-[100vh] w-full m-0 p-0">
        <Image
          src={"/assets/contact/contato-nutri-edvania-soares.png"}
          priority
          quality={100}
          alt="Contato Nutricionista Edvania Soares"
          width={900}
          height={900}
          className="object-cover h-full m-0 p-0"
        />
      </div>
    </section>
  );
};

export default ContactSection;