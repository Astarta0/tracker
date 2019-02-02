# tracker

За основу взят дизайн https://dribbble.com/shots/5355785-Filtering-table-data

Запуск сервера в режиме локальной разработки
`npm run start:dev`

Запуск Webpack для сборки front-end части
`npm run webpack`

После этого доступно отображение в браузере по http://localhost:3000

- React.js - шаблонизатор
- Redux - для управления состоянием
- Express.js - для веб-мервера
- Webpack 4 — в качестве сборщика
- PostCSS — css-препроцессор, данный проект без адаптивной верстки
- Normalize.css — чтобы выравнить стили между браузерами
- ESLint — статический анализатор кода для выравнивания стиля
- Faker.js — для генерации данных


Локальное тестирвоание API, команды:
1. Получение списка всех tasks
```
curl -i -X GET http://localhost:3000/api/v1/tasks
```

2. Создание новой записи
```
curl -i -X POST \
    -H "Content-Type: application/json" \
    -d '{ "started": "21.12.1991", "ended": "21.06.2018", "name": "my test name"}' \
    http://localhost:3000/api/v1/tasks
```
    
3. Редактирование записи
```
curl -i -X PUT \
    -H "Content-Type: application/json" \
    -d '{ "id": 1,  "started": "21.12.1991", "ended": "21.06.2018", "name": "my test name" }' \
    http://localhost:3000/api/v1/tasks/1
```
    
4. Удаление записи
```
curl -i -X DELETE http://localhost:3000/api/v1/tasks/1
```
