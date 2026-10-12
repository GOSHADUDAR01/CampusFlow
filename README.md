# CampusFlow

Платформа для поиска и регистрации на учебные мероприятия.

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

## Точная вёрстка

Правила геометрии, контрольные размеры, выбор CSS-единиц и результаты стресс-тестов
описаны в [листе измерений](./layout-measurements.md). Исходные изображения макета:
`1.jpe` и `2.jpe`.

## Структура проекта

```text
src/
  main.js
  style.css
public/
screenshots/
layout-measurements.md
decomposition.md
README.md
```

## Основной сценарий

Пользователь открывает каталог мероприятий, применяет фильтры, выбирает событие, изучает детали и отправляет заявку на участие.
