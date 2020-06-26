import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { AppProvider } from 'contexts/app/app.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { CartProvider } from 'contexts/cart/use-cart';

import AppLayout from 'layouts/app-layout';
import { useDeviceType } from 'utils/useDeviceType';
// Language translation files
import localEn from 'data/translation/en.json';
import localAr from 'data/translation/ar.json';
import localEs from 'data/translation/es.json';
import localDe from 'data/translation/de.json';
import localCn from 'data/translation/zh.json';
import localIl from 'data/translation/he.json';

// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/multi-carousel/multi-carousel.style.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'assets/styles/global.style';
import { parseCookies } from 'utils/parse-cookies';

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
// need to provide types
export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
  locale,
  query,
}) {
  const deviceType = useDeviceType(userAgent);
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <AppProvider>
            <AuthProvider>
              <AppLayout>
                <Component {...pageProps} deviceType={deviceType} />
              </AppLayout>
              <GlobalStyle />
            </AuthProvider>
          </AppProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { locale } = parseCookies(req);
  return { ...appProps, userAgent, query, locale };
};
