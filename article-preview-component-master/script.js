const btn = document.getElementById('btn');
const share = document.querySelector('.share');
const arrow  = document.querySelector('.arrow');
const icon = document.querySelector('.icon-share');

btn.addEventListener('click', () => {
    share.classList.toggle('show'),
    arrow.classList.toggle('show'),
    icon.classList.toggle('color'),
    btn.classList.toggle('invert');
    })