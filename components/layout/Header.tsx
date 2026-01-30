'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useParams, usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as string;

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('sermons'), href: '/sermons' },
    { name: t('events'), href: '/events' },
    { name: t('ministries'), href: '/ministries' },
    { name: t('sabbathSchool'), href: '/sabbath-school' },
    { name: t('contact'), href: '/contact' },
  ];

  const toggleLocale = () => {
    const newLocale = currentLocale === 'id' ? 'en' : 'id';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                TH
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                SDA Taman Harapan
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${currentLocale}${item.href}`}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
              aria-label="Switch language"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium uppercase">{currentLocale === 'id' ? 'EN' : 'ID'}</span>
            </button>

            {/* Give Button */}
            <Link href={`/${currentLocale}/give`} className="hidden md:block">
              <Button variant="accent" size="sm">
                {t('give')}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${currentLocale}${item.href}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={`/${currentLocale}/give`}
                className="block px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="accent" size="sm" className="w-full">
                  {t('give')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
