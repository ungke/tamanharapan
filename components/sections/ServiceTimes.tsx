'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ServiceTimes() {
  const t = useTranslations('serviceTimes');

  const services = [
    {
      name: t('sabbathSchool'),
      day: t('saturday'),
      time: '9:00 AM - 10:30 AM',
    },
    {
      name: t('divineService'),
      day: t('saturday'),
      time: '11:00 AM - 12:30 PM',
    },
    {
      name: t('prayerMeeting'),
      day: t('wednesday'),
      time: '7:00 PM - 8:30 PM',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {service.day}, {service.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 p-8 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-primary" />
                  {t('location')}
                </h3>
                <p className="text-gray-600 mb-6">
                  SDA Taman Harapan Church<br />
                  Jl. Taman Harapan No. 123<br />
                  Jakarta, Indonesia 12345
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-300 h-64 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Google Maps Integration</p>
              </div>

              <Button variant="primary" className="w-full">
                {t('getDirections')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
