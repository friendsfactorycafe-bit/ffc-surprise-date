import { Metadata } from 'next';
import FFCKeywordPage from '@/components/ffc-keyword-page';
import { getServiceBySlug, getKeywordBySlug } from '@/lib/ffc-config';

const service = getServiceBySlug('valentines-week');
const keyword = getKeywordBySlug('valentines-week', 'promise-day-celebration-vadodara');

export const metadata: Metadata = {
  title: keyword?.metaTitle || 'Friends Factory Cafe',
  description: keyword?.metaDescription || '',
};

export default function Page() {
  if (!service || !keyword) return null;
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
