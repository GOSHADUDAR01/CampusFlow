import './style.css';

import booksCover from './assets/projects/books.svg';
import ecoCover from './assets/projects/eco.svg';
import eventsCover from './assets/projects/events.svg';
import financeCover from './assets/projects/finance.svg';
import helpCover from './assets/projects/help.svg';
import notesCover from './assets/projects/notes.svg';
import routesCover from './assets/projects/routes.svg';
import tasksCover from './assets/projects/tasks.svg';

const projects = [
  {
    name: 'Help Desk',
    category: 'Веб-приложение',
    level: 'Средний',
    description: 'Сервис обработки заявок',
    technology: 'Java · Spring Boot',
    tasks: 8,
    date: '12 окт 2026',
    image: helpCover,
  },
  {
    name: 'TaskFlow',
    category: 'Интерфейс',
    level: 'Базовый',
    description: 'Доска задач команды',
    technology: 'React · TypeScript',
    tasks: 6,
    date: '16 окт 2026',
    image: tasksCover,
  },
  {
    name: 'EcoMonitor',
    category: 'Аналитика',
    level: 'Сложный',
    description: 'Мониторинг городской среды',
    technology: 'Python · FastAPI',
    tasks: 10,
    date: '18 окт 2026',
    image: ecoCover,
  },
  {
    name: 'BookSpace',
    category: 'Веб-приложение',
    level: 'Базовый',
    description: 'Каталог электронной библиотеки',
    technology: 'HTML · CSS · JS',
    tasks: 5,
    date: '21 окт 2026',
    image: booksCover,
  },
  {
    name: 'FinTrack',
    category: 'Аналитика',
    level: 'Средний',
    description: 'Личный учёт расходов',
    technology: 'Vue · PostgreSQL',
    tasks: 7,
    date: '24 окт 2026',
    image: financeCover,
  },
  {
    name: 'EventHub',
    category: 'Интерфейс',
    level: 'Сложный',
    description: 'Платформа мероприятий',
    technology: 'Next.js · Prisma',
    tasks: 9,
    date: '27 окт 2026',
    image: eventsCover,
  },
  {
    name: 'StudyNotes',
    category: 'Веб-приложение',
    level: 'Средний',
    description: 'Совместные конспекты',
    technology: 'Java · Thymeleaf',
    tasks: 8,
    date: '30 окт 2026',
    image: notesCover,
  },
  {
    name: 'CityRoutes',
    category: 'Интерфейс',
    level: 'Сложный',
    description: 'Планировщик городских маршрутов',
    technology: 'JS · OpenStreetMap',
    tasks: 11,
    date: '2 ноя 2026',
    image: routesCover,
  },
];

const projectCards = projects
  .map(
    (project) => `
      <article class="project-card">
        <img class="project-cover" src="${project.image}" alt="Иллюстрация проекта ${project.name}" />
        <div class="project-body">
          <div class="card-top">
            <span class="badge">${project.category}</span>
            <span class="level">${project.level}</span>
          </div>
          <h3>${project.name}</h3>
          <p class="project-description">${project.description}</p>
          <p class="tech">${project.technology}</p>
          <div class="card-bottom">
            <span>${project.tasks} задач</span>
            <time>${project.date}</time>
          </div>
          <a class="card-link" href="#project-info">
            Подробнее <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    `,
  )
  .join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="study/projects — на главную">
        <span class="brand-icon" aria-hidden="true">◈</span>
        <span>study<span class="brand-light">/projects</span></span>
      </a>
      <nav class="main-nav" aria-label="Главное меню">
        <a href="#projects" class="nav-active">Каталог</a>
        <a href="#project-info">О проекте</a>
        <a href="#footer">Контакты</a>
      </nav>
      <span class="header-note">Практическая работа № 4</span>
    </div>
  </header>

  <main class="container" id="top">
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-copy">
        <span class="eyebrow">Веб-разработка и дизайн · модуль 4</span>
        <h1 id="page-title">Каталог учебных<br class="desktop-break" /> проектов</h1>
        <p>Изучайте реальные примеры интерфейсов. Сравнивайте технологии, сложность и состав задач.</p>
      </div>
      <div class="hero-stat" aria-label="Восемь проектов для практики и самостоятельной работы">
        <strong>08</strong>
        <span>проектов для практики<br class="desktop-break" /> и самостоятельной работы</span>
      </div>
    </section>

    <div class="content-layout">
      <aside class="filters" aria-label="Фильтры проектов">
        <div class="sidebar-title">
          <h2>Фильтры</h2>
          <span aria-hidden="true">↗</span>
        </div>
        <fieldset>
          <legend>Тип проекта</legend>
          <label><input type="checkbox" checked /> Все проекты <em>8</em></label>
          <label><input type="checkbox" /> Веб-приложение <em>3</em></label>
          <label><input type="checkbox" /> Интерфейс <em>3</em></label>
          <label><input type="checkbox" /> Аналитика <em>2</em></label>
        </fieldset>
        <fieldset>
          <legend>Сложность</legend>
          <label><input type="checkbox" /> Базовый</label>
          <label><input type="checkbox" /> Средний</label>
          <label><input type="checkbox" /> Сложный</label>
        </fieldset>
        <button type="button" class="reset">Сбросить фильтры</button>
        <div class="aside-tip">
          <span aria-hidden="true">ⓘ</span>
          <p>Карточки должны одинаково выглядеть даже при разной длине описания.</p>
        </div>
      </aside>

      <section id="projects" class="projects" aria-labelledby="catalog-title">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Раздел 01 / каталог</span>
            <h2 id="catalog-title">Проекты <span class="count">(8)</span></h2>
          </div>
          <div class="catalog-tools">
            <label class="search-field">
              <span class="sr-only">Поиск проектов</span>
              <input type="search" placeholder="Найти проект" />
            </label>
            <label class="sort">
              <span>Сортировка</span>
              <select aria-label="Сортировка проектов">
                <option>По названию</option>
                <option>По сложности</option>
              </select>
            </label>
          </div>
        </div>
        <div class="cards-grid">${projectCards}</div>
        <div class="pagination">
          <span>Показано 8 из 8 проектов</span>
          <a href="#projects" class="all-projects">Все проекты <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </div>

    <section class="feature" id="project-info" aria-labelledby="feature-title">
      <div class="feature-inner">
        <div class="feature-copy">
          <span class="eyebrow">Раздел 02 / специальный блок</span>
          <h2 id="feature-title">От макета<br />к адаптивной системе</h2>
          <p>Один интерфейс должен уверенно работать на телефоне, планшете и большом мониторе. Важна не только ширина карточки — меняются расположение, порядок и композиция блоков.</p>
          <div class="feature-actions">
            <a href="#projects" class="feature-primary">К каталогу <span aria-hidden="true">↗</span></a>
            <a href="#footer" class="feature-secondary">Критерии проверки →</a>
          </div>
        </div>
        <div class="feature-panel" aria-label="Шесть контрольных ширин экрана">
          <div class="mini-title">
            <span>Проверка адаптивности</span>
            <span>01—06</span>
          </div>
          <div class="viewport-bars" aria-hidden="true">
            <span style="--bar-width: 18%">320</span>
            <span style="--bar-width: 26%">375</span>
            <span style="--bar-width: 48%">768</span>
            <span style="--bar-width: 64%">1024</span>
            <span style="--bar-width: 88%">1440</span>
            <span style="--bar-width: 100%">1920</span>
          </div>
          <p>Шесть контрольных ширин экрана</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="footer">
    <div class="container footer-inner">
      <strong>study/projects</strong>
      <span>Grid · Flexbox · Container Queries</span>
      <span>Учебный макет · 2026</span>
    </div>
  </footer>
`;
