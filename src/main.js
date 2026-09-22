import './style.css';

const events = [
  {
    id: 1,
    title: 'Семантический HTML',
    category: 'Frontend',
    date: '18 сен',
    time: '16:00',
    venue: 'ауд. 304',
    seats: 18,
    favorite: false,
  },
  {
    id: 2,
    title: 'Git без страха',
    category: 'Инструменты',
    date: '19 сен',
    time: '14:30',
    venue: 'online',
    seats: 8,
    favorite: true,
  },
  {
    id: 3,
    title: 'UX-разбор интерфейсов',
    category: 'UX/UI',
    date: '21 сен',
    time: '17:00',
    venue: 'коворкинг',
    seats: 5,
    favorite: false,
  },
  {
    id: 4,
    title: 'REST API на практике',
    category: 'Backend',
    date: '23 сен',
    time: '15:00',
    venue: 'ауд. 211',
    seats: 14,
    favorite: false,
  },
];

const eventCards = events
  .map(
    (event) => `
      <article class="event-card" aria-label="Мероприятие ${event.title}">
        <div class="event-card__header">
          <span class="badge badge--${event.category.toLowerCase().replace(/\s+/g, '-')}">${event.category}</span>
          <button class="favorite-button" type="button" aria-label="Добавить в избранное">
            ${event.favorite ? '♥' : '♡'}
          </button>
        </div>
        <h2>${event.title}</h2>
        <p class="event-meta">${event.date} · ${event.time} · ${event.venue}</p>
        <div class="event-footer">
          <span>${event.seats} мест</span>
          <a href="#" class="link-button">Подробнее</a>
        </div>
      </article>
    `,
  )
  .join('');

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <div class="brand-wrap">
        <div class="brand-mark">CF</div>
        <div class="brand-text">
          <span>CampusFlow</span>
        </div>
      </div>
      <nav class="main-nav" aria-label="Основная навигация">
        <a href="#" aria-current="page">Каталог</a>
        <a href="#">Мои события</a>
        <a href="#">Профиль</a>
      </nav>
      <button class="search-button" type="button" aria-label="Поиск">Поиск</button>
    </header>

    <main class="catalog-page">
      <section class="catalog-intro" aria-labelledby="catalog-title">
        <div>
          <p class="eyebrow">Учебные мероприятия</p>
          <h1 id="catalog-title">Найдите лекцию, мастер-класс или встречу по интересам</h1>
        </div>
        <div class="toolbar" aria-label="Панель каталога">
          <label class="search-field">
            <span class="sr-only">Поиск по названию</span>
            <input type="search" placeholder="Поиск по названию или теме..." />
          </label>
          <button class="secondary-button" type="button">Сначала новые</button>
          <button class="text-button" type="button">Сбросить</button>
        </div>
      </section>

      <section class="catalog-layout" aria-label="Каталог мероприятий">
        <aside class="filters-panel" aria-label="Фильтры мероприятий">
          <h2>Фильтры</h2>
          <div class="filter-group" role="list">
            <button class="filter-chip is-active" type="button">Все</button>
            <button class="filter-chip" type="button">Frontend</button>
            <button class="filter-chip" type="button">Backend</button>
            <button class="filter-chip" type="button">UX/UI</button>
            <button class="filter-chip" type="button">Карьера</button>
          </div>

          <div class="facet-block">
            <h3>Мои фильтры</h3>
            <div class="facet-item">
              <label for="date-filter">Дата</label>
              <select id="date-filter" name="date-filter">
                <option>На этой неделе</option>
                <option>Следующая неделя</option>
              </select>
            </div>
            <div class="facet-item">
              <label>Формат</label>
              <label class="check-row"><input type="checkbox" checked /> Очно</label>
              <label class="check-row"><input type="checkbox" /> Онлайн</label>
            </div>
            <div class="facet-item">
              <label>Уровень</label>
              <label class="check-row"><input type="radio" name="level" checked /> Для всех</label>
              <label class="check-row"><input type="radio" name="level" /> Начальный</label>
              <label class="check-row"><input type="radio" name="level" /> Продвинутый</label>
            </div>
            <button class="primary-button" type="button">Применить</button>
          </div>
        </aside>

        <section class="events-section" aria-label="Список мероприятий">
          <div class="events-grid">${eventCards}</div>
          <nav class="pagination" aria-label="Навигация по страницам">
            <button type="button" aria-label="Предыдущая страница">‹</button>
            <span class="pagination__page is-active">1</span>
            <span class="pagination__page">2</span>
            <span class="pagination__page">3</span>
            <span>…</span>
            <span class="pagination__page">8</span>
            <button type="button" aria-label="Следующая страница">›</button>
          </nav>
        </section>
      </section>
    </main>
  </div>
`;
