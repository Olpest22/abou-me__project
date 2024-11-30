document.addEventListener('DOMContentLoaded', function () {
    // Получаем все секции
    const pages = document.querySelectorAll('.wrap-main__conteiner__content > div');

    // Получаем кнопки
    const buttons = document.querySelectorAll('.box');
    const page = document.querySelectorAll('.wrap-main__conteiner__content__page')

    // Функция для скрытия всех страниц
    function hideAllPages() {
        pages.forEach(page => {
            page.style.display = 'none';
        });
    }

    // Функция для показа соответствующей страницы
    function showPage(pageIndex) {
        hideAllPages();
        pages[pageIndex].style.display = 'block';
    }

    // Добавляем обработчики на кнопки для переключения страниц
    document.getElementById('about-me').addEventListener('click', function() {
        showPage(0);
    });

    document.getElementById('portfolio').addEventListener('click', function() {
        showPage(1);
    });

    document.getElementById('skills').addEventListener('click', function() {
        showPage(2);
    });

    document.getElementById('other').addEventListener('click', function() {
        showPage(3);
    });

    // Изначально скрываем все страницы и показываем первую
    hideAllPages();
    showPage(0);

    // Анимация для боковой панели и контента
    gsap.from('.wrap-main__conteiner__panel', {
        duration: 1,
        z: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 1.5
    });

    gsap.from('.wrap-main__conteiner__content', {
        duration: 1,
        z: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 1.5
    });

    // Анимация для кнопок
    buttons.forEach((button, index) => {
        gsap.from(button, {
            duration: 0.5,
            scale: 0.2,
            z: -50,
            opacity: 0.5,
            stagger: 1,
            delay: 1
        });
    });

    // Анимация для текста
    gsap.from('.font_nutito', {
        duration: 1,
        y: 20,
        z: -10,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1
    });

    // Наклон кнопок при наведении
    const ANGLE = 0.7;

    page.forEach(page => {
        page.addEventListener('mouseout', () => {
            page.style.transform = `perspective(400px)
                                      rotateX(0deg)
                                      rotateY(0deg)
                                      translateZ(0px)`;
            page.style.transition = `all 10s ease`;
        });

        page.addEventListener('mousemove', (e) => {
            let w = page.clientWidth;
            let h = page.clientHeight;
            let y = (e.offsetX - w * 0.5) / w * ANGLE;
            let x = -(e.offsetY - h * 0.5) / h * ANGLE;

            page.style.transform = `perspective(400px)
                                      rotateX(${x}deg)
                                      rotateY(${y}deg)`;
            page.style.transition = `none`;
        });
    });
});

