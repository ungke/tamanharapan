'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Heart, Music, HandHeart, Baby, Flame } from 'lucide-react';

export default function MinistriesPage() {
  const t = useTranslations('ministries');

  const ministries = [
    {
      icon: Baby,
      name: t('children'),
      description: 'Nurturing young hearts with Bible stories and Christian values.',
    },
    {
      icon: Flame,
      name: t('youth'),
      description: 'Empowering young people to grow in faith and serve their community.',
    },
    {
      icon: Users,
      name: t('youngAdults'),
      description: 'Building meaningful connections and spiritual growth for young adults.',
    },
    {
      icon: Heart,
      name: t('women'),
      description: 'Supporting and encouraging women in their spiritual journey.',
    },
    {
      icon: Users,
      name: t('men'),
      description: 'Strengthening men to be spiritual leaders in their families and community.',
    },
    {
      icon: Music,
      name: t('music'),
      description: 'Glorifying God through music and worship.',
    },
    {
      icon: HandHeart,
      name: t('community'),
      description: 'Serving the community through compassionate outreach programs.',
    },
    {
      icon: Heart,
      name: t('health'),
      description: 'Promoting wholistic health - physical, mental, and spiritual.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get involved in our ministries and make a difference
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <ministry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {ministry.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {ministry.description}
                </p>
                <button className="text-primary font-medium hover:underline">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
