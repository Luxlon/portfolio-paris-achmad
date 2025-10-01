"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const certifications = [
  {
    id: 1,
    title: "Huawei ICT Competition 2024-2025",
    subtitle: "2nd Place Winner - National Final (Cloud Track)",
    organization: "Huawei Technologies",
    date: "2024-2025",
    image: "/juarahuawei.jpg",
    featured: true,
    credentialUrl: "https://bit.ly/4bJO9jh",
    icon: <FaTrophy className="text-yellow-400" />,
    color: "from-yellow-600/20 to-orange-600/20"
  },
  {
    id: 2,
    title: "Huawei Certified ICT Associate",
    subtitle: "HCIA - Cloud Computing",
    organization: "National Institute of Technology",
    date: "2025",
    image: "/huaweipartisipan.jpg",
    featured: false,
    credentialUrl: "#",
    icon: <FaCertificate className="text-blue-400" />,
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    id: 3,
    title: "FindIt! Data Analyst ",
    subtitle: "Competition Data Analyst Tingkat Nasional",
    organization: "FindIt! 2024",
    date: "2024",
    image: "findit.jpg",
    featured: false,
    credentialUrl: "#",
    icon: <FaMedal className="text-purple-400" />,
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    id: 4,
    title: "Event Staff HMIF",
    subtitle: "Staff Divisi Acara Himpunan Mahasiswa Informatika",
    organization: "Himpunan Mahasiswa Informatika",
    date: "2022-2023",
    image: "himpunanHMIF.jpg",
    featured: false,
    credentialUrl: "#",
    icon: <FaAward className="text-green-400" />,
    color: "from-green-600/20 to-emerald-600/20"
  },
];

const FeaturedCertificate = ({ cert }: { cert: typeof certifications[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group h-full"
    >
      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
        {/* Featured Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            // animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/90 text-neutral-900 rounded-full font-bold text-xs shadow-lg"
          >
            <HiSparkles className="text-sm" />
            FEATURED
          </motion.div>
        </div>

        {/* Certificate Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} to-transparent opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
          
          {/* Icon Overlay */}
          <div className="absolute top-4 left-4 text-4xl">
            {cert.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Organization & Date */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-purple-400 font-medium">
              {cert.organization}
            </span>
            <span className="text-xs text-neutral-500">{cert.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1.5">
            {cert.title}
          </h3>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm mb-4">
            {cert.subtitle}
          </p>

          {/* Stats/Highlights */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <div className="text-xl font-bold text-yellow-400 mb-0.5">2nd</div>
              <div className="text-xs text-neutral-400">National Rank</div>
            </div>
            <div className="flex-1 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <div className="text-xl font-bold text-purple-400 mb-0.5">Cloud</div>
              <div className="text-xs text-neutral-400">Track Specialty</div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Credential →
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SmallCertificate = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ scale: 1.03 }}
      className="group cursor-pointer"
    >
      <div className="flex gap-4 p-4 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all shadow-lg hover:shadow-xl">
        {/* Image Thumbnail */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-40`} />
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            {/* {cert.icon} */}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="flex text-white font-bold text-sm mb-1 truncate group-hover:text-purple-400 transition-colors">
            {cert.title}
            <div className="absolute right-5">
                {cert.icon}
            </div>
          </h4>
          <p className="text-neutral-400 text-xs mb-2 truncate">
            {cert.subtitle}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">{cert.organization}</span>
            <span className="text-xs text-purple-400 font-medium">{cert.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AchievementsSection() {
  const featuredCert = certifications.find(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section className="relative py-20 px-6 overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider text-purple-400 bg-purple-950/30 rounded-full border border-purple-700/30 mb-6"
          >
            <FaStar className="inline mr-2" />
            Milestones & Recognition
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Achievements &{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Recognition and certifications earned through dedication to excellence in technology and innovation
          </motion.p>
        </div>

        {/* Certificates Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Featured Certificate (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2">
            {featuredCert && <FeaturedCertificate cert={featuredCert} />}
          </div>

          {/* Right: Other Certificates Stack */}
          <div className="lg:col-span-1 space-y-4">
            {otherCerts.map((cert, index) => (
              <SmallCertificate key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Certifications", value: "4+", icon: <FaCertificate /> },
            { label: "National Awards", value: "1", icon: <FaTrophy /> },
            { label: "Projects Completed", value: "7+", icon: <FaStar /> },
            { label: "Years Experience", value: "3+", icon: <FaMedal /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 text-center hover:border-purple-700/50 transition-all"
            >
              <div className="text-3xl text-purple-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}