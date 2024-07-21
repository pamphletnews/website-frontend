import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav>
      <ul>
        <li><Link href="/"> {t('home')} </Link></li>
        <li><Link href="/category/1"> {t('category')} 1 </Link></li>
        <li><Link href="/category/2"> {t('category')} 2 </Link></li>
        <li><Link href="/subscribe"> Subscribe </Link></li>
        <li><Link href="/about"> {t('about_us')} </Link></li>
        <li><Link href="/contact"> {t('contact')} </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
