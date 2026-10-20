# CampusFlow

Учебный проект с каталогом восьми проектов для практики по HTML, CSS и
адаптивной вёрстке.

## Запуск

```bash
npm install
npm run dev
```

## Проверка качества

```bash
npm run lint
npm run lint:css
npm run format:check
npm run build
```

## Практическая работа № 4

Каталог проектов собран на CSS Grid и Flexbox, а промоблок адаптирует внутреннюю
сетку через Container Query. Фильтры и сортировка — демонстрационные элементы
макета, фильтрация данных не реализована.

- [Замеры и адаптивное поведение](./layout-measurements.md)
- [Скриншоты на шести ширинах](./screenshots/practice-4/)

## Структура проекта

```text
src/
  assets/projects/   Иллюстрации восьми карточек
  main.js            Данные карточек и семантическая разметка
  style.css          Сетка, компоненты и адаптивные состояния
screenshots/practice-4/
                     Контрольные скриншоты 320–1920 px
layout-measurements.md
practice-4-report.md
decomposition.md
```
