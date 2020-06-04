import React, { useState, useRef } from 'react';
import './GoogleSearch.css';
import keyboard from './keyboard.png';
import googleLogo from './googlelogo_color_272x92dp.png';

const GoogleSearch = (props) => {
  const [language, setLanguage] = useState('ru');
  const [searchInputValue, setSearchInputValue] = useState('');
  const searchInput = useRef(null);
  const clearInput = useRef(null);
  const vocabulary = {
    ru: {
      mail: 'Почта',
      images: 'Картинки',
      login: 'Войти',
      searchGoogle: 'Поиск в Google',
      lucky: 'Мне повезёт!',
      languages: 'Сервисы Google доступны на разных языках:',
      belarus: 'Беларусь',
      advertiging: 'Реклама',
      business: 'Для бизнеса',
      aboutGoogle: 'Всё о Google',
      hotItWorks: 'Как работает',
      сonfidentiality: 'Конфиденциальность',
      conditions: 'Условия',
      settings: 'Настройки'
    },
    be: {
      mail: 'Gmail',
      images: 'Відарысы',
      login: 'Увайсці',
      searchGoogle: 'Пошук Google',
      lucky: 'Мне пашанцуе',
      languages: 'Даступная мова:',
      belarus: 'Беларусь',
      advertiging: 'Рэклама',
      business: 'Бізнес',
      aboutGoogle: 'Аб Google',
      hotItWorks: 'Як працуе Пошук',
      сonfidentiality: 'Прыватнасць',
      conditions: 'Умовы',
      settings: 'Налады'
    }
  }

  const focusSearchInput = event => {
    searchInput.current.focus();
  }

  const searchInputChange = event => {
    setSearchInputValue(event.target.value);
  }

  const clearSearchInput = event => {
    setSearchInputValue('');
  }

  const changeLanguage = event => {
    setLanguage(language === 'ru' ? 'be' : 'ru');
  }

  const clearInputBlock = searchInputValue &&
    <div className="clear-input">
      <span ref={clearInput} onClick={clearSearchInput}>
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
      </span>
      <span className="line"></span>
    </div>

  return (
    <div className="App">
      <header>
        <ul>
          <li><a href="/">{vocabulary[language].mail}</a></li>
          <li><a href="/">{vocabulary[language].images}</a></li>
          <div className="application-containter">
            <svg className="bi bi-grid-3x3-gap-fill" width="19" height="19" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
            </svg>
            <div className="applications">
            </div>
          </div>
          <div className="login">{vocabulary[language].login}</div>
        </ul>
      </header>
      <main>
        <div className="google-logo"><img src={googleLogo} alt="google"/></div>
        <div onClick={focusSearchInput} className="search-elem">
          <span className="loupe">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>
          <input className="search-input" ref={searchInput} value={searchInputValue} onChange={searchInputChange} autoFocus={true} maxLength="2048" type="text" title="Поиск" aria-label="Найти" />
          {clearInputBlock}
          <div className="keyboard">
            <span>
              <img src={keyboard} alt="keyboard" />
            </span>
          </div>
          <div className="micro">
            <svg class="HPVvwb" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path>
            </svg>
          </div>
        </div>
        <div className="google-buttons">
          <center>
            <input value={vocabulary[language].searchGoogle} aria-label="Поиск в Google" type="submit" />
            <a href="https://www.google.com/doodles/">
              <input value={vocabulary[language].lucky} aria-label="Мне повезёт!" type="submit" />
            </a>
          </center>
        </div>
        <div className="language-block">{vocabulary[language].languages}<a onClick={changeLanguage} href="/#">{language === 'ru' ? 'Беларуская' : 'русский'}</a> </div>
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="country">
            {vocabulary[language].belarus}
          </div>
          <span className="info">
            <a href="https://policies.google.com/privacy?fg=1">{vocabulary[language].advertiging}</a>
            <a href="https://policies.google.com/terms?fg=1">{vocabulary[language].conditions}</a>
            <span>
              <span className="settings">{vocabulary[language].settings}</span>
            </span>
          </span>
          <span className="left-info">
            <a href="https://www.google.com/intl/ru_by/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1">{vocabulary[language].advertiging}</a>
            <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1">{vocabulary[language].business}</a>
            <a href="https://about.google/?utm_source=google-BY&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1">{vocabulary[language].aboutGoogle}</a>
            <a href="//google.com/search/howsearchworks/?fg=1">{vocabulary[language].hotItWorks}</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default GoogleSearch;
