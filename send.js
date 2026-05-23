document.getElementById('rsvpForm').addEventListener('submit', function() {
    // Небольшая задержка, чтобы форма успела отправиться
    setTimeout(function() {
        document.getElementById('rsvpForm').style.display = 'none';
        document.getElementById('rsvpSuccess').style.display = 'block';
    }, 1000);
});