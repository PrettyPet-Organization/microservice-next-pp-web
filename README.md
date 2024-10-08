# Структура проекта

* **src/public/:** статические файлы, такие как HTML, CSS, изображения и шрифты.
* **src/:**
  * services/: модули, отвечающие за предоставление бизнес-логики и сервисов.
  * repositories/: модули, отвечающие за взаимодействие с API.
  * styles/: глобальные стили CSS.
* **src/app:**
  * constants/: пользовательские глобальный константы.
  * interfaces/: пользовательские интерфейсы и типы.
  * components/: повторно используемые компоненты, такие как Header, Footer и другие, общего назначения. (components/страница/...компоненты_страницы...)
  * hooks/: пользовательские хуки.
  * plugins/: расширения, которые добавляют дополнительную функциональность.
  * utils/: вспомогательные функции, такие как API-запросы и общие утилиты.



## Запуск приложения

Для запуска необходим node >= 18

1. Установить npm - `sudo apt install npm`
2. В командной строке из корня проекта установить зависимости командой `npm install`
3. Запуск проекта `npm run dev`; сайт будет доступен на локальном хосте на порте 3000.
