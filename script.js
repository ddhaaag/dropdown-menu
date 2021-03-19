const icon = document.querySelector('.icon');
const mnu = document.querySelector('span');

icon.addEventListener('click', toggleMnu);

function toggleMnu() {
    mnu.classList.toggle('cancel');
}