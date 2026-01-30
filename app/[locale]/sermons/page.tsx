'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Card, { CardContent } from '@/components/ui/Card';
import { Play, Calendar, Search } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function SermonsPage() {
  const t = useTranslations('sermons');
  const params = useParams();
  const locale = params.locale as string;

  const sermons = [
    {
      id: 1,
      title: locale === 'id' ? 'Iman yang Menggerakkan Gunung' : 'Faith That Moves Mountains',
      speaker: locale === 'id' ? 'Ps. John Doe' : 'Pastor John Doe',
      date: '2026-01-25',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
    },
    {
      id: 2,
      title: locale === 'id' ? 'Kasih Kristus yang Sempurna' : "Christ's Perfect Love",
      speaker: locale === 'id' ? 'Ps. Jane Smith' : 'Pastor Jane Smith',
      date: '2026-01-18',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
    },
    {
      id: 3,
      title: locale === 'id' ? 'Bersiap untuk Kedatangan-Nya' : 'Preparing for His Coming',
      speaker: locale === 'id' ? 'Ps. John Doe' : 'Pastor John Doe',
      date: '2026-01-11',
      series: locale === 'id' ? 'Nubuatan Akhir Zaman' : 'End Time Prophecy',
    },
    {
      id: 4,
      title: locale === 'id' ? 'Kuasa Doa' : 'The Power of Prayer',
      speaker: locale === 'id' ? 'Ps. Jane Smith' : 'Pastor Jane Smith',
      date: '2026-01-04',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
    },
    {
      id: 5,
      title: locale === 'id' ? 'Pengharapan di Tengah Pencobaan' : 'Hope in Trials',
      speaker: locale === 'id' ? 'Ps. John Doe' : 'Pastor John Doe',
      date: '2025-12-28',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
    },
    {
      id: 6,
      title: locale === 'id' ? 'Sabat yang Kudus' : 'The Holy Sabbath',
      speaker: locale === 'id' ? 'Ps. Jane Smith' : 'Pastor Jane Smith',
      date: '2025-12-21',
      series: locale === 'id' ? 'Keyakinan Fundamental' : 'Fundamental Beliefs',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Watch and listen to our sermon archive
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('search')}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>{t('filter')} - {t('series')}</option>
              <option>All Series</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>{t('filter')} - {t('speaker')}</option>
              <option>All Speakers</option>
            </select>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-75" />
                    </div>
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {sermon.series}
                    </div>
                  </div>
                  <CardContent>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{sermon.speaker}</p>
                    <p className="text-gray-500 text-sm flex items-center mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(sermon.date).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <Button variant="primary" size="sm" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      {t('watchSermon')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
