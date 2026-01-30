'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Card, { CardImage, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Play, Calendar } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Sermons() {
  const t = useTranslations('sermons');
  const params = useParams();
  const locale = params.locale as string;

  // Placeholder sermon data
  const sermons = [
    {
      id: 1,
      title: locale === 'id' ? 'Iman yang Menggerakkan Gunung' : 'Faith That Moves Mountains',
      speaker: locale === 'id' ? 'Ps. John Doe' : 'Pastor John Doe',
      date: '2026-01-25',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
      thumbnail: '/placeholder-sermon.jpg',
    },
    {
      id: 2,
      title: locale === 'id' ? 'Kasih Kristus yang Sempurna' : "Christ's Perfect Love",
      speaker: locale === 'id' ? 'Ps. Jane Smith' : 'Pastor Jane Smith',
      date: '2026-01-18',
      series: locale === 'id' ? 'Kehidupan Iman' : 'Life of Faith',
      thumbnail: '/placeholder-sermon.jpg',
    },
    {
      id: 3,
      title: locale === 'id' ? 'Bersiap untuk Kedatangan-Nya' : 'Preparing for His Coming',
      speaker: locale === 'id' ? 'Ps. John Doe' : 'Pastor John Doe',
      date: '2026-01-11',
      series: locale === 'id' ? 'Nubuatan Akhir Zaman' : 'End Time Prophecy',
      thumbnail: '/placeholder-sermon.jpg',
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

        <div className="text-center">
          <Link href={`/${locale}/sermons`}>
            <Button variant="outline" size="lg">
              {t('viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
