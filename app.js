const express = require("express");
const hbs = require("hbs");
const app = express();
const expressHbs = require("express-handlebars");
const port = 4000;

// Устанавливаем view engine для hbs
app.set('view engine', 'hbs');

// Раздаём статические файлы из папки 'resources'
app.use('/resources', express.static(__dirname + '/resources'));

// Устанавливаем Content-Security-Policy (CSP)
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", 
    "default-src 'self'; " + // Разрешаем загрузку только с того же домена по умолчанию
    "style-src 'self' https://fonts.googleapis.com; " + // Разрешаем стили с Google Fonts
    "font-src 'self' https://fonts.gstatic.com; " + // Разрешаем шрифты с Google Fonts
    "script-src 'self' https://cdnjs.cloudflare.com; " + // Разрешаем скрипты с CDNJS (GSAP и другие)
    "img-src 'none';"  // Запрещаем все изображения (если это необходимо)
  );
  next();
});

// Устанавливаем движок для hbs
app.engine("hbs", expressHbs.engine({
  layoutsDir: "views/layout",
  defaultLayout: "layout",
  extname: "hbs"
}));

// Роут для главной страницы
app.get("/", function (request, response) {
  response.render("body.hbs", {
    title: "НАЗВАНИЕ САЙТА",
  });
});

// Логирование URL запросов для отладки
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Запуск сервера на порту 4000
app.listen(port, '127.0.0.1', function () {
  console.log(`http://localhost:${port}`);
});
