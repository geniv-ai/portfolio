'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles, Zap, Target, Star, Heart, Eye } from 'lucide-react';
import { useRef } from 'react';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const galleryCards = [
    {
      id: 1,
      title: "AI Experience Designer",
      subtitle: "Boo Hyeong-Seok",
      description: "혁신적인 AI 기술과 사용자 경험을 결합하여 미래의 디지털 경험을 설계합니다",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      category: "Portfolio",
      likes: 128,
      views: 1024,
      featured: true
    },
    {
      id: 2,
      title: "Interactive Design",
      subtitle: "Dynamic Interfaces",
      description: "사용자와 상호작용하는 역동적이고 매력적인 인터페이스",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      category: "Design",
      likes: 89,
      views: 756
    },
    {
      id: 3,
      title: "AI Integration",
      subtitle: "Smart Solutions",
      description: "기존 시스템에 AI 기능을 원활하게 통합하여 효율성 극대화",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      category: "Development",
      likes: 156,
      views: 1203
    },
    {
      id: 4,
      title: "Creative Coding",
      subtitle: "Art & Technology",
      description: "창의적인 코딩으로 예술과 기술의 경계를 허물다",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Creative",
      likes: 203,
      views: 1890
    },
    {
      id: 5,
      title: "User Experience",
      subtitle: "Human-Centered",
      description: "사용자 중심의 직관적이고 감성적인 경험 설계",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      category: "UX",
      likes: 167,
      views: 1345
    },
    {
      id: 6,
      title: "Future Tech",
      subtitle: "Next Generation",
      description: "차세대 기술을 활용한 혁신적인 솔루션 개발",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      category: "Innovation",
      likes: 234,
      views: 2100
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section - Gallery Style */}
      <section className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header Content */}
        <motion.div 
          className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8"
          style={{ y, opacity }}
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Sparkles Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <Sparkles className="w-12 h-12 text-blue-500 mx-auto" />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Boo Hyeong-Seok
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              AI Experience Designer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            >
              혁신적인 AI 기술과 사용자 경험을 결합하여 미래의 디지털 경험을 설계합니다
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg"
                >
                  <span>프로젝트 보기</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
                >
                  연락하기
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center space-x-6 mb-16"
            >
              {[
                { href: "https://github.com/boohyeongseok", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/boohyeongseok", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/boohyeongseok", icon: Twitter, label: "Twitter" },
                { href: "mailto:boo.hyeongseok@example.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  card.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                      {card.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {card.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>{card.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{card.views}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              전문 서비스
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI 기술과 사용자 경험을 결합한 혁신적인 솔루션을 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI 경험 설계',
                description: 'AI 기술을 활용한 직관적이고 개인화된 사용자 경험을 설계합니다.',
                icon: '🤖',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: '인터랙티브 디자인',
                description: '사용자와 상호작용하는 역동적이고 매력적인 인터페이스를 제작합니다.',
                icon: '🎨',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'AI 통합',
                description: '기존 시스템에 AI 기능을 원활하게 통합하여 효율성을 극대화합니다.',
                icon: '⚡',
                color: 'from-orange-500 to-red-500',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 mx-auto`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
