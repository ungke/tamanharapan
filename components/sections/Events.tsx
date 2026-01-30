'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Events() {
  const t = useTranslations('events');
  const params = useParams();
  const locale = params.locale as string;

  // Placeholder events data
  const events = [
    {
      id: 1,
      title: locale === 'id' ? 'Retret Pemuda' : 'Youth Retreat',
      date: '2026-02-15',
      time: '8:00 AM - 5:00 PM',
      location: locale === 'id' ? 'Puncak, Jawa Barat' : 'Puncak, West Java',
      description: locale === 'id' 
        ? 'Bergabunglah dengan kami untuk retret pemuda yang penuh inspirasi.'
        : 'Join us for an inspiring youth retreat.',
    },
    {
      id: 2,
      title: locale === 'id' ? 'Seminar Kesehatan' : 'Health Seminar',
      date: '2026-02-22',
      time: '3:00 PM - 6:00 PM',
      location: locale === 'id' ? 'Gereja Taman Harapan' : 'Taman Harapan Church',
      description: locale === 'id'
        ? 'Pelajari cara hidup sehat menurut prinsip Alkitab.'
        : 'Learn how to live healthy according to Biblical principles.',
    },
    {
      id: 3,
      title: locale === 'id' ? 'Pelayanan Masyarakat' : 'Community Service',
      date: '2026-03-01',
      time: '9:00 AM - 12:00 PM',
      location: locale === 'id' ? 'Berbagai Lokasi' : 'Various Locations',
      description: locale === 'id'
        ? 'Mari bersama-sama melayani komunitas kita.'
        : 'Let\'s serve our community together.',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-accent to-accent-700 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white opacity-75" />
                </div>
                <CardContent>
                  <div className="mb-4">
                    <div className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      {new Date(event.date).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.time}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.location}
                  </p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button variant="primary" size="sm" className="w-full">
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${locale}/events`}>
            <Button variant="outline" size="lg">
              {t('viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
