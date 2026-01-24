import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Our Packages | Friends Factory Cafe Vadodara',
  description: 'Explore 8 unique romantic celebration packages at Friends Factory Cafe Vadodara. From rooftop setups to glass house experiences. Starting from ₹4,700.',
  keywords: 'romantic packages vadodara, celebration packages, birthday surprise packages, candlelight dinner packages, friends factory cafe packages',
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
