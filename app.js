const express = require("express");
const hbs = require("hbs");
const app = express();
const expressHbs = require("express-handlebars");
const port = 4000;

app.set('view engine', 'hbs');
app.use('/resources', express.static(__dirname + '/resources'));

// Content Security Policy (CSP)
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", 
    "default-src 'self'; " +  // Все источники по умолчанию только с того же домена
    "style-src 'self' https://fonts.googleapis.com; " +  // Разрешаем стили с Google Fonts
    "font-src 'self' https://fonts.gstatic.com; " +  // Разрешаем шрифты с Google Fonts
    "script-src 'self' https://cdnjs.cloudflare.com; " +  // Разрешаем скрипты с CDNJS
    "img-src 'self' https://yastatic.net data:; " + // Разрешаем изображения с yastatic.net и data URI
    "connect-src 'self';"  // Разрешаем соединения только с того же домена
  );
  next();
});

// Настройка шаблонов с помощью express-handlebars
app.engine("hbs", expressHbs.engine({
  layoutsDir: "views/layout",
  defaultLayout: "layout",
  extname: "hbs"
}));

app.get("/", function (request, response) {
  response.render("body.hbs", {
    title: "НАЗВАНИЕ САЙТА",
  });
});

// Логирование URL запроса (можно удалить, если не нужно)
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Запуск сервера
app.listen(port, '127.0.0.1', function () {
  console.log(`http://localhost:${port}`);
});
