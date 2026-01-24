"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Pesan terkirim! Saya akan segera membalas.", {
      duration: 4000,
      position: "top-center",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-xl" />, label: "Email", value: "zaki@example.com", link: "mailto:zaki@example.com" },
    { icon: <FaMapMarkerAlt className="text-xl" />, label: "Lokasi", value: "Indonesia", link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, label: "GitHub", url: "https://github.com/faizinuha" },
    { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className="min-h-screen py-10 max-w-5xl mx-auto">
      <Toaster />

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          <span className="text-sakura-gradient">Contact</span>
        </h1>
        <p className="text-muted-foreground">Tertarik untuk bekerja sama? Hubungi saya!</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-xl p-6 shadow-soft" data-testid="contact-form">
            <h2 className="text-xl font-semibold mb-5 text-sakura-gradient">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-testid="input-name"
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-testid="input-subject"
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Pilih subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Kolaborasi</option>
                  <option value="job">Job Opportunity</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  data-testid="input-message"
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tulis pesan Anda..."
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">{formData.message.length}/500</p>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                data-testid="submit-btn"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Info Cards */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-sakura-gradient">Info Kontak</h2>
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg card-hover"
                whileHover={{ x: 5 }}
              >
                <div className="text-primary">{info.icon}</div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-sm font-medium hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-sakura-gradient">Social Media</h2>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <motion.div
            className="bg-green-500/10 border border-green-500/30 rounded-lg p-5"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <h3 className="font-semibold text-green-600 dark:text-green-400">Open for Work</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Saya terbuka untuk project baru dan kolaborasi.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
