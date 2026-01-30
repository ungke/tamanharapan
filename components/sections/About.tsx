'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Target, Book } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const features = [
    {
      icon: Heart,
      title: t('mission'),
      description: t('missionText'),
    },
    {
      icon: Target,
      title: t('vision'),
      description: t('visionText'),
    },
    {
      icon: Book,
      title: t('beliefs'),
      description: t('beliefsText'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('welcomeText')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
