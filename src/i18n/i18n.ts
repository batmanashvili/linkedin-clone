import i18n from 'i18next';
import {NativeModules, Platform} from 'react-native';
import {initReactI18next} from 'react-i18next';

import en from './en';

const GetLocale = (localestring: string): string => {
   return localestring.split('_')[0];
};

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
   type: 'languageDetector',
   async: true, // flags below detection to be async
   detect: (callback) => {
      let locale: string = 'en';
      if (Platform.OS === 'ios') {
         locale = GetLocale(
            NativeModules.SettingsManager.settings.AppleLanguages[0],
         );
      } else if (Platform.OS === 'android') {
         locale = GetLocale(NativeModules.I18nManager.localeIdentifier);
      }
      callback(locale.replace('_', '-'));
   },
   init: () => {},
   cacheUserLanguage: () => {},
};

const initTranslate = () => {
   i18n
      .use(languageDetector)
      .use(initReactI18next)
      .init({
         fallbackLng: 'en',

         resources: {
            en,
         },

         // have a eval namespace used around the full app
         ns: ['tipApp'],
         defaultNS: 'tipApp',

         debug: true,

         // cache: {
         //   enabled: true
         // },

         interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
         },
      });
};

export default initTranslate;
