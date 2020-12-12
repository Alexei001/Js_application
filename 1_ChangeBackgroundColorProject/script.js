let button = document.querySelector('#button');


button.addEventListener('click', () => {
    const bg = document.querySelector('.button_inner').style.backgroundColor;
    (bg === 'red') ?
        document.querySelector('.button_inner').style.backgroundColor = 'pink':
        document.querySelector('.button_inner').style.backgroundColor = 'red';
})