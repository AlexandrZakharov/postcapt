const searchIcon = document.querySelector('.header-wrapper__search-icon');
const textInput = document.querySelector('.header-wrapper__search-input');
const searchWraper = document.querySelector('.header-wrapper__search');

function onClickInput(e) {
    textInput.style.cssText = 'top: 40px; border-bottom: 1px solid #343434';
    searchIcon.style.cssText = 'margin-top: 14px';
}

document.addEventListener('click', (e) => {
    if(e.target.className !== 'header-wrapper__search-input') {
        textInput.style.cssText = 'top: 14px; border-bottom: 1px solid #F6F6F6';
        searchIcon.style.cssText = 'margin-top: 8px';  
    }
})

textInput.addEventListener('click', onClickInput)