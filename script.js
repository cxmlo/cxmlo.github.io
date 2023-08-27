const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('dropdown-menu');

toggleBtn.oneclick = function () {
    dropDownMenu.classList.toggle('open')
}
