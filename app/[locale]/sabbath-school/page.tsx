'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Book, Users, Download, Video } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function SabbathSchoolPage() {
  const t = useTranslations('sabbathSchool');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Study God's Word together every Sabbath morning
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quarterly Lesson */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('quarterly')}</h2>
              <p className="text-gray-600 mb-6">
                Current Quarter: Q1 2026 - Understanding Daniel and Revelation
              </p>
              <Button variant="primary">
                <Download className="h-4 w-4 mr-2" />
                {t('resources')}
              </Button>
            </motion.div>

            {/* Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('classes')}</h2>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Adult Class - Room A</li>
                <li>• Youth Class - Room B</li>
                <li>• Children's Class - Room C</li>
                <li>• Beginners - Room D</li>
              </ul>
              <p className="text-gray-500">Saturday 9:00 AM - 10:30 AM</p>
            </motion.div>

            {/* Online Study Groups */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('onlineStudy')}</h2>
              <p className="text-gray-600 mb-6">
                Join our online Sabbath School study groups for those who cannot attend in person.
              </p>
              <Button variant="primary">Join Online Group</Button>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t('resources')}</h2>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-center">
                  <Download className="h-4 w-4 mr-2 text-primary" />
                  Quarterly Study Guide (PDF)
                </li>
                <li className="flex items-center">
                  <Download className="h-4 w-4 mr-2 text-primary" />
                  Teacher's Edition
                </li>
                <li className="flex items-center">
                  <Download className="h-4 w-4 mr-2 text-primary" />
                  Youth Study Guide
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
