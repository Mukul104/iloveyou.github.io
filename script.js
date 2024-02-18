document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundAudio');
    var swapButton = document.getElementById('swapButton');


    function startAudioAndRedirect() {
        audio.play();
        audio.muted = false; // Unmute
        setTimeout(function () {

            window.location.href = 'propose.html';
        }, 2000);
        swapButton.disabled = true;
    }
    swapButton.addEventListener('click', function () {
        startAudioAndRedirect();
    });
});