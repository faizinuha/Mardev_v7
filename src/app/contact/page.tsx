"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 4000,
      position: "top-center",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "John@example.com",
      link: "mailto:John@example.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Jakarta, Indonesia",
      link: null
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      url: "#",
      color: "hover:text-gray-600"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
      url: "#",
      color: "hover:text-pink-600"
    },
  ];

  return (
    <div className="min-h-screen py-10 px-5 lg:px-20 relative overflow-hidden">
      <Toaster />

      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3],
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 gradient-text-ocean">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-transparent"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all">
                    Your Email
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="peer w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all">
                    Your Message
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 text-right">
                    {formData.message.length} / 500
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold gradient-text-sunset">Contact Information</h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-foreground font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold gradient-text-forest">Connect With Me</h2>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-card border border-border rounded-lg ${social.color} transition-all`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Available for Work</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to new opportunities and collaborations. Let's build something amazing together!
              </p>
            </motion.div>

            {/* Response Time */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">⏱️ Response Time</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours during weekdays.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
