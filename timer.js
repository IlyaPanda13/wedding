// Дата свадьбы: 26 июня 2026, 12:00
const weddingDate = new Date('2026-06-26T12:00:00');

function updateTimer() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        flipNumber('days', '00');
        flipNumber('hours', '00');
        flipNumber('minutes', '00');
        flipNumber('seconds', '00');
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    flipNumber('days', String(days).padStart(2, '0'));
    flipNumber('hours', String(hours).padStart(2, '0'));
    flipNumber('minutes', String(minutes).padStart(2, '0'));
    flipNumber('seconds', String(seconds).padStart(2, '0'));
}

function flipNumber(id, newValue) {
    const el = document.getElementById(id);
    if (el.textContent === newValue) return;
    
    // Добавляем класс переворота
    el.classList.add('flipping');
    
    // В середине анимации меняем цифру
    setTimeout(() => {
        el.textContent = newValue;
    }, 200);
    
    // Убираем класс
    setTimeout(() => {
        el.classList.remove('flipping');
    }, 400);
}

// Запускаем каждую секунду
setInterval(updateTimer, 1000);
updateTimer();