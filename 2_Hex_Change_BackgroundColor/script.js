
let arrHex = ['#b1eb34', '#3aeb34', '#34eb77','#22914a', '#34ebc3', '#34b7eb', '#346eeb', '#3d34eb', '#b434eb', '#a31212'];

let inHtml = document.querySelector('.inner_text').innerHTML='hex color:';
let initialColor='#22914a';
document.querySelector('.inner_text').innerHTML=`hex color: ${initialColor}`;

let button = document.querySelector('#button_click').addEventListener('click', () => {
    let randomHex = Math.floor(Math.random() * 10);
    let colorHex = arrHex[randomHex];
    document.querySelector('.inner_text').innerHTML = inHtml + colorHex;
    document.querySelector('.inner_button').style.backgroundColor = colorHex;
});