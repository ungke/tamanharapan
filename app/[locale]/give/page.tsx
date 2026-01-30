'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { CreditCard, DollarSign } from 'lucide-react';

export default function GivePage() {
  const t = useTranslations('giving');
  const [selectedOption, setSelectedOption] = useState('tithe');
  const [amount, setAmount] = useState('');
  const [recurring, setRecurring] = useState(false);

  const givingOptions = [
    { id: 'tithe', name: t('tithe') },
    { id: 'offering', name: t('offering') },
    { id: 'special', name: t('specialProjects') },
    { id: 'mission', name: t('mission') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', { selectedOption, amount, recurring });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent-700 text-white py-20">
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
            {t('description')}
          </motion.p>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Giving Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Select Giving Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {givingOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOption(option.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedOption === option.id
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-lg font-semibold text-gray-900 mb-4">
                  Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[10, 25, 50, 100, 250].map((quickAmount) => (
                  <button
                    key={quickAmount}
                    type="button"
                    onClick={() => setAmount(quickAmount.toString())}
                    className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ${quickAmount}
                  </button>
                ))}
              </div>

              {/* Recurring Option */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={recurring}
                    onChange={(e) => setRecurring(e.target.checked)}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="recurring" className="ml-3 text-gray-900 font-medium">
                    {t('recurring')}
                  </label>
                </div>
                <p className="text-sm text-gray-600 mt-2 ml-8">
                  Set up automatic monthly donations
                </p>
              </div>

              {/* Payment Method Placeholder */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Payment gateway integration (Stripe/PayPal) will be configured here
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="accent" size="lg" className="w-full">
                Complete Donation
              </Button>

              {/* Security Note */}
              <p className="text-sm text-center text-gray-500">
                All transactions are secure and encrypted
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Give?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advance the Gospel</h3>
              <p className="text-gray-600">
                Support local and global mission work to share God's love
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Serve the Community</h3>
              <p className="text-gray-600">
                Enable outreach programs that help those in need
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Ministry</h3>
              <p className="text-gray-600">
                Maintain our facilities and support pastoral care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
