'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tService = useTranslations('serviceTimes');
  const params = useParams();
  const currentLocale = params.locale as string;

  const quickLinks = [
    { name: tNav('home'), href: '/' },
    { name: tNav('about'), href: '/about' },
    { name: tNav('sermons'), href: '/sermons' },
    { name: tNav('events'), href: '/events' },
    { name: tNav('ministries'), href: '/ministries' },
    { name: tNav('contact'), href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('about')}</h3>
            <p className="text-sm mb-4">
              SDA Taman Harapan Church
            </p>
            <p className="text-sm">
              {t('denomination')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${currentLocale}${link.href}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('serviceTimesTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">{tService('sabbathSchool')}:</span>
                <br />
                {tService('saturday')} 9:00 AM
              </li>
              <li>
                <span className="font-medium">{tService('divineService')}:</span>
                <br />
                {tService('saturday')} 11:00 AM
              </li>
              <li>
                <span className="font-medium">{tService('prayerMeeting')}:</span>
                <br />
                {tService('wednesday')} 7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Jl. Taman Harapan No. 123<br />Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@tamanharapan.org</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">{t('followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-white text-lg font-semibold mb-2">{t('newsletter')}</h3>
            <p className="text-sm mb-4">{t('newsletterText')}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
