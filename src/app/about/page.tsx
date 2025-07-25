'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Heart, Target, Users } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'Framer Motion', level: 80 },
  ];

  const experiences = [
    {
      year: '2023 - 현재',
      title: '시니어 프론트엔드 개발자',
      company: 'Tech Company',
      description: 'React와 TypeScript를 활용한 대규모 웹 애플리케이션 개발 및 팀 리드 역할을 수행했습니다.',
    },
    {
      year: '2021 - 2023',
      title: '프론트엔드 개발자',
      company: 'Startup Inc',
      description: 'Next.js를 활용한 풀스택 웹 애플리케이션 개발 및 사용자 경험 개선에 기여했습니다.',
    },
    {
      year: '2019 - 2021',
      title: '주니어 개발자',
      company: 'Digital Agency',
      description: '다양한 클라이언트 프로젝트를 통해 React 생태계에 대한 깊은 이해를 쌓았습니다.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: '사용자 중심',
      description: '사용자의 니즈를 최우선으로 생각하며 직관적이고 편리한 인터페이스를 만듭니다.',
    },
    {
      icon: Target,
      title: '성능 최적화',
      description: '빠른 로딩 속도와 부드러운 사용자 경험을 위해 지속적으로 성능을 개선합니다.',
    },
    {
      icon: Users,
      title: '협업',
      description: '팀워크를 중시하며 효과적인 소통과 지식 공유를 통해 더 나은 결과를 만들어냅니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 헤더 섹션 */}
      <section className="pt-20 pb-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              소개
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              프론트엔드 개발자로서의 여정과 가치관, 그리고 기술적 역량에 대해 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 개인 정보 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 프로필 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                <span className="text-8xl font-bold text-gray-400 dark:text-gray-600">
                  BHS
                </span>
              </div>
            </motion.div>

            {/* 개인 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Boo Hyeong-Seok
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {/* TODO: 본인 위치로 수정하세요 */}
                    서울, 대한민국
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {/* TODO: 본인 경력으로 수정하세요 */}
                    5년 경력
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {/* TODO: 본인 학력으로 수정하세요 */}
                    컴퓨터공학 학사
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {/* TODO: 본인의 소개로 수정하세요 */}
                프론트엔드 개발자로서 사용자 경험을 중시하며, 
                아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다. 
                React 생태계에 대한 깊은 이해를 바탕으로 현대적인 웹 개발을 
                추구하며, 지속적인 학습과 새로운 기술 도입에 열정을 가지고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 가치관 섹션 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              가치관
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              개발자로서 추구하는 가치와 원칙들입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              기술 스택
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              주로 사용하는 기술들과 숙련도입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              경력
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              지금까지의 경력과 주요 프로젝트들입니다.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {experience.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 