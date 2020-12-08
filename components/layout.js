import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function Layout({ children }) {
  let router = useRouter();
  let { t } = useTranslation();
  console.log('router', router);
  console.log('t(common:nav)', t('common'));
  return (
    <main className="d-flex flex-column">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container justify-content-start">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      router.pathname === '/' ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {t('common:home')}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className="nav-link"
                    className={
                      router.pathname === '/about'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    {t('common:about')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">{children}</div>
      <footer className="bg-light py-3">
        <div className="container">
          <ul className="nav">
            {router.locales.map((locale) => (
              <li className="nav-item me-2" key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a
                    className={
                      router.locale === locale
                        ? 'btn btn-outline-primary'
                        : 'btn btn-outline-secondary'
                    }
                  >
                    {locale}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
