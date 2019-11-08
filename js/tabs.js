+function () {

document.querySelector('.tab').classList.add('active')
document.querySelector('.tab-panel').classList.add('active')

function selectPanel (e) {
    var target = e.target.dataset.target

    document.querySelectorAll('.tab, .tab-panel').forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
    console.log(document.querySelector('.' + target))
    document.querySelector('.' + target).classList.add('active')
}

document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('click', selectPanel)
})

}();

/*Menu*/

let click = document.getElementsByClassName('mobile_menu');
let close_menu = document.getElementsByClassName('close');
let window_menu = document.querySelector('.window');

click[0].addEventListener('click', () => {
window_menu.style.display = 'block';
});

close_menu[0].addEventListener('click', () => {
window_menu.style.display = 'none';
});