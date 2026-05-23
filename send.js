document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('rsvpForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('guestName').value;
        const attendance = document.querySelector('input[name="attendance"]:checked').value;

        const BOT_TOKEN = "8814226619:AAH0urovX1Ru8pjHmcqdeyq62l4Y55hhSiU";
        const CHAT_ID = "403519274";

        const message = `💍 *Новое подтверждение!*\n\n👤 *Имя:* ${name}\n📋 *Статус:* ${attendance}`;

        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Спасибо! Ваш ответ отправлен 🤍');
                form.reset();
            } else {
                alert('Ошибка: ' + data.description);
            }
        })
        .catch(function(error) {
            alert('Ошибка отправки. Попробуйте позже.');
            console.error(error);
        });
    });
});