document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleBtn');
    var additionalInfo = document.getElementById('additionalInfo');

    toggleButton.addEventListener('click', function() {
        additionalInfo.classList.toggle('hidden');
    });
});

