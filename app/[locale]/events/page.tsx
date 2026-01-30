'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsPage() {
  const t = useTranslations('events');
  const params = useParams();
  const locale = params.locale as string;

  const events = [
    {
      id: 1,
      title: locale === 'id' ? 'Retret Pemuda' : 'Youth Retreat',
      date: '2026-02-15',
      time: '8:00 AM - 5:00 PM',
      location: locale === 'id' ? 'Puncak, Jawa Barat' : 'Puncak, West Java',
      description: locale === 'id'
        ? 'Bergabunglah dengan kami untuk retret pemuda yang penuh inspirasi di Puncak. Acara ini akan menampilkan sesi ibadah, diskusi kelompok, dan aktivitas outdoor.'
        : 'Join us for an inspiring youth retreat in Puncak. The event will feature worship sessions, group discussions, and outdoor activities.',
    },
    {
      id: 2,
      title: locale === 'id' ? 'Seminar Kesehatan' : 'Health Seminar',
      date: '2026-02-22',
      time: '3:00 PM - 6:00 PM',
      location: locale === 'id' ? 'Gereja Taman Harapan' : 'Taman Harapan Church',
      description: locale === 'id'
        ? 'Pelajari cara hidup sehat menurut prinsip Alkitab dengan dokter dan ahli kesehatan berpengalaman.'
        : 'Learn how to live healthy according to Biblical principles with experienced doctors and health professionals.',
    },
    {
      id: 3,
      title: locale === 'id' ? 'Pelayanan Masyarakat' : 'Community Service',
      date: '2026-03-01',
      time: '9:00 AM - 12:00 PM',
      location: locale === 'id' ? 'Berbagai Lokasi' : 'Various Locations',
      description: locale === 'id'
        ? 'Mari bersama-sama melayani komunitas kita melalui berbagai program sosial dan bantuan.'
        : "Let's serve our community together through various social programs and assistance.",
    },
    {
      id: 4,
      title: locale === 'id' ? 'Sekolah Alkitab Liburan' : 'Vacation Bible School',
      date: '2026-03-15',
      time: '9:00 AM - 1:00 PM',
      location: locale === 'id' ? 'Gereja Taman Harapan' : 'Taman Harapan Church',
      description: locale === 'id'
        ? 'Program liburan yang menyenangkan untuk anak-anak dengan cerita Alkitab, kerajinan, dan permainan.'
        : 'Fun vacation program for children with Bible stories, crafts, and games.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in our upcoming events and activities
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
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
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="flex gap-3">
                      <Button variant="primary" size="sm" className="flex-1">
                        {t('register')}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        {t('learnMore')}
                      </Button>
                    </div>
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
