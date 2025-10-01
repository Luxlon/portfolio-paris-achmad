"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/paris-achmad-fauzan-783619335/",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-400",
      hoverGradient: "hover:from-blue-500 hover:to-blue-300"
    },
    {
      name: "GitHub",
      url: "https://github.com/Luxlon",
      icon: Github,
      gradient: "from-gray-700 to-gray-500",
      hoverGradient: "hover:from-gray-600 hover:to-gray-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/parisafauzan",
      icon: Instagram,
      gradient: "from-pink-600 via-purple-600 to-orange-500",
      hoverGradient: "hover:from-pink-500 hover:via-purple-500 hover:to-orange-400"
    },
    {
      name: "Email",
      url: "mailto:parisafauzan@gmail.com",
      icon: Mail,
      gradient: "from-red-600 to-red-400",
      hoverGradient: "hover:from-red-500 hover:to-red-300"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parisafauzan@gmail.com",
      href: "mailto:parisafauzan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 822-9584-9260",
      href: "tel:+6282295849260"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bandung, Jawa Barat",
      href: null
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Paris Achmad Fauzan
              </h3>
              <p className="text-neutral-400 mt-3 text-sm leading-relaxed">
                Informatics Engineering student passionate about building innovative web applications, IoT solutions, and AI technologies.
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative p-3 rounded-xl
                    bg-gradient-to-br ${social.gradient}
                    ${social.hoverGradient}
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    group
                  `}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group"
                    >
                      <info.icon className="w-4 h-4 mt-0.5 text-purple-400 group-hover:text-pink-400 transition-colors" />
                      <div>
                        <p className="text-xs text-neutral-500">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-neutral-400">
                      <info.icon className="w-4 h-4 mt-0.5 text-purple-400" />
                      <div>
                        <p className="text-xs text-neutral-500">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <p className="text-neutral-400 text-sm">
              Get in touch for collaboration opportunities and project inquiries.
            </p>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2 px-6 py-3 
                bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
                hover:from-purple-500 hover:via-pink-500 hover:to-purple-500
                text-white font-medium rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300
                group
              "
            >
              <span>Let's Talk</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Status Badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-neutral-400">Available for projects</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-500 text-sm">
            © {currentYear} Paris Achmad Fauzan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
      </div>
    </footer>
  );
}