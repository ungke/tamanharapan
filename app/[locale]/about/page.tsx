'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Target, Book, Users } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('welcomeText')}
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Beliefs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('mission')}</h2>
              <p className="text-gray-600">{t('missionText')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('vision')}</h2>
              <p className="text-gray-600">{t('visionText')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('beliefs')}</h2>
              <p className="text-gray-600">{t('beliefsText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pastor Name {i}</h3>
                <p className="text-gray-600 mb-2">Position</p>
                <p className="text-gray-500 text-sm">Bio placeholder text goes here.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
