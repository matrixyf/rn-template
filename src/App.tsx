import React, { useState } from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import { IntlProvider } from 'react-intl';
import { store } from './store';
import Navigation from './navigation';
import { Locales, SetAppLocaleContext } from './locales';


const App = () => {

  const [appLocale, setAppLocale] = useState('en-US');
  console.log(`appLocale`, appLocale);

  return (
    <SetAppLocaleContext.Provider value={setAppLocale}>
      <ReduxProvider store={store}>
        <IntlProvider messages={Locales[appLocale]} locale={appLocale} defaultLocale={appLocale}>
          <Navigation />
        </IntlProvider>
      </ReduxProvider>
    </SetAppLocaleContext.Provider>
  );
};


export default App;
