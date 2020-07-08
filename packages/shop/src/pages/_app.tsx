import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { AppProvider } from "contexts/app/app.provider";
import { AuthProvider } from "contexts/auth/auth.provider";
import { LanguageProvider } from "contexts/language/language.provider";
import { FilterProvider } from "contexts/filter/filter.provider";
import { CartProvider } from "contexts/cart/use-cart";

import AppLayout from "layouts/app-layout";
import { useDeviceType } from "utils/useDeviceType";
// Language translation files
import localEn from "data/translation/en.json";
import localAr from "data/translation/ar.json";
import localFr from "data/translation/fr.json";

// External CSS import here
import "rc-drawer/assets/index.css";
import "rc-table/assets/index.css";
import "rc-collapse/assets/index.css";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "components/multi-carousel/multi-carousel.style.css";
import "@redq/reuse-modal/lib/index.css";
import { GlobalStyle } from "assets/styles/global.style";
import { parseCookies } from "utils/parse-cookies";

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  fr: localFr,
};
// need to provide types
export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
  cookies,
  query,
}) {
  const deviceType = useDeviceType(userAgent);
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages} cookies={cookies}>
        <FilterProvider cookies={cookies}>
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
        </FilterProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const cookies = parseCookies(req);
  return { ...appProps, userAgent, query, cookies };
};
