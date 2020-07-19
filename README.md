=== шаблон readme проекта ===

=== [readme для статового проекта](http://git.esphere.local/Golomazov.AV/react-start/blob/master/README.md) ===

# Заготовка под проект на react-redux стеке

Репозиторий проекта: [GitLab](http://git.esphere.local/myProject)

- [Описание](#Описание)
- [Технологии проекта](#Технологии-проекта)
- [Кодстайл](#Кодстайл)
- [Разработка](#Разработка)
- [Структура проекта](#Структура-проекта)
- [Версионирование](#Версионирование)
- [Работа с гитом](#Работа-с-гитом)
- [Контакты](#Контакты)

### Описание

=== Описание проекта

### Технологии проекта

- [React](https://ru.reactjs.org/)
- [Redux](https://redux.js.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [connected-react-router](https://github.com/supasate/connected-react-router/)
- [history](https://github.com/ReactTraining/history)
- [Ramda](https://ramdajs.com/)
- [Moment](https://momentjs.com/)
- [Jest](https://jestjs.io/)
- CSS ([styles-esphere](https://ui-dev.esphere.ru/#/uikit/guide/programmer))
- [Leda3.x](https://leda.esphere.ru/)

### Кодстайл

За основу взят [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).

Дополнения и уточнения смотрите в [confluence](https://confluence.esphere.ru/pages/viewpage.action?pageId=103693109).

### Разработка

- [Запуск проекта](#Запуск-проекта)
- [Стенды](#Стенды)
- [NPM скрипты](#npm-скрипты)
- [Swagger](#swagger)

### Запуск проекта

```javascript
npm i
```

```javascript
npm start
```

```javascript
http://localhost:3000/#/
```

=== опишите здесь дальнейшие шаги для запуска проекта (копирование кук, и т.п.)

### Стенды

Проект доступен на стендах:

| Тип стенда              | Ссылка на стенд          |
| :---------------------- | ------------------------ |
| Стенд для разработчиков | https://dev.esphere.ru/  |
| Тестовый                | https://tst.esphere.ru/  |
| ИФТ                     | https://ift.esphere.ru/  |
| ПСИ                     | https://psi.esphere.ru/  |
| ПРОМ                    | https://prom.esphere.ru/ |

### NPM скрипты

```
npm run start             : запуск проекта на http://localhost:3000/#/
npm run build             : сборка проекта с настройками для прода, не будет выполнено, если не пройдёт проверка `npm run lint`
npm run lint              : проверка кода проекта на ошибки eslint
npm run test			  : запуск тестов

// служебные скрипты
npm run develop			  : запуск webpack-dev-server
npm run production		  : запуск webpack в production-режиме
npm run clean             : очистка папки dist
npm run clean-scss		  : удаление лишних файлов scss после сборки проекта
npm run addStyles         : скопировать стили из модуля styles-esphere и из модуля библиотеки Leda в папку assets
npm run addAssets         : скопировать статические файлы из папки src/assets в папку dist/assets
npm run addLedaStyles	  : скопировать стили из пакета korus-ui
```

### Swagger

=== Здесь ссылка на swagger

### Структура проекта

```
.
├─── src       : source code
|     ├─── common      : общие элементы приложения
|     |     ├─── components   : папка с общими компонентами
|     |     ├─── config		  : папка с общими настройками приложения
|	  |     ├─── hocs		  : папка с общими High Order Components
|     |     ├─── hooks		  : папка с общими React Hooks
|     |     ├─── layouts	  : папка с общими макетами страниц
|     |     ├─── messages	  : папка с ui-текстовками
|	  |     ├─── styles		  : папка со стилями приложения
|	  |		└─── utils		  : папка с общими утилитами приложения
|     |
|     ├─── pages       : компоненты страниц
|     |     ├─── AboutPage.jsx   : контейнер страницы "О нас"
|	  |		├─── HomePage.jsx	 : контейнер главной страницы
|     |     |
|     |     └─── index.js  : экспорт страниц
|     |
|     ├─── store       : настройки redux
|     |     ├─── index.js           		 : инициализация redux, подключение middlewares
|     |     ├─── root-reducer.js             : здесь все редюсеры комбинируются в один
|     |     └─── root-saga.js                : самая первая сага, которая запускает все остальные
|     |
|     ├─── features    : модули проекта
|     |     ├─── errors                  : модуль обработки ошибок приложения
|     |     ├─── loading          		 : модуль для работы глобального лоадера
|     |     ├─── navigation         	 : модуль с данными из react-router
|     |     └─── notices                 : модуль для работы с нотификациями в приложении
|	  |
|     ├─── processes    : бизнес-процессы приложения
|     |     ├─── init         	 : процесс инициализации приложения (запускается каждый раз при обновлении страницы)
|     |     └─── sample          : тестовый процесс
|     |
|	  ├─── routes.jsx	: настройка роутов приложения
|     |
|     └─── index.jsx    : вспомогательные функции
|
├─── webpack      : настройка webpack приложения
|	  |
|     ├─── common.js      : общие настройки webpack
|	  ├─── config         : папка с настройками webpack-приложения
|     |   ├─── paths.js		 : файл с настройками путей webpack-приложения
|     |   ├─── settings.js   : файл с общими настройками приложения (title, названия приложения в шапке и пр.)
|     |   ├─── index.js      : файл с методом получения общих настроек по ключу
|     |   └─── dev-server    : папка с настройками webpack-dev-server
|     |      ├─── index.js        : общие настройки webpack-dev-server
|     |      └─── proxy.js        : настройки proxy для webpack-dev-server
|     |
|     └─── app    : папка с настройками webpack для приложения
```

### Версионирование

Версии проекта следуют за нумерацией спринтов и релизами.

Например: `0.1.2`.

0 - номер основной версии

1 - номер спринта

2 - номер патча

### Работа с гитом

В проекте используется [Gitflow](https://confluence.esphere.ru/display/Frontend/Git+Flow)

Ветка для выкладки на тестовый стенд: `master`

Ветка для выкладки на предпромышленный стенд: `master`

Ветка для выкладки на промышленный стенд: `master`

### Названия веток

**Названия feature-веток** формируются из названия `feature/bugfix` и кода задачи в жире.

Например: `feature/FEND-500`

**Названия релизных веток** формируются из слова `release` и номера версии, которая готовится к релизу.

Например: `release/0.3.0` - релизная ветка третьего спринта.

### Формирование сообщений в коммитах

Сообщение в коммите начинается с кода задачи, например: `[FEND-500] Добавлен модуль авторизации`.

### Контакты

- Имя Фамилия (mail@esphere.ru)
