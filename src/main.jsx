import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import i18next from 'i18next'
import global_sp from "./components/locales/sp/global.json"
import global_en from "./components/locales/en/global.json"
import { I18nextProvider } from 'react-i18next'


i18next.init({
  interpolation: {escapeValue: false},
  lng: "sp",
  fallbackLng: 'en',
  resources: {
    sp: {
      translation: global_sp
    },
    en: {
      translation: global_en
    }
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <I18nextProvider  i18n={i18next}>
      <App/>
    </I18nextProvider>
    
  </BrowserRouter>,
)
