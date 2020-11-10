//get elements
const dropdownTitles = document.querySelectorAll('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');
const confirmBtn = document.getElementById('confirm');
const orderMessage = document.getElementById('order-message');

//bind listeners to these elements
dropdownTitles.forEach(title => title.addEventListener('click', toggleMenuDisplay));
dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));
confirmBtn.addEventListener('click', displayOrder);

/* Clicking the dropdown element */
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	return elem;
} 

/* if the menu is clicked show, otherwise hide */
function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
			
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}

/* Selecting dropdown options */
function toggleMenuDisplay(e){
    const menu = e.target.closest('.dropdown').querySelector('.menu');
	toggleClass(menu,'hide');
}
const selected = {
    type: '',
    quantity: '',
    where: '',
};

/* placing the selected option in the dropdown */
function handleOptionSelected(e){
    const dropdown = e.target.closest('.dropdown');
    const id = dropdown.id;
	toggleClass(dropdown.querySelector('.menu'), 'hide');			

    const newValue = e.target.textContent;
	const titleElem = dropdown.querySelector('.title');


    titleElem.textContent = newValue;
    selected[id] = newValue;
    console.log(selected)
}



/* displaying order message */

function displayOrder(e) {
        toggleClass(orderMessage, 'show')

        setTimeout(() => {
            toggleClass(orderMessage, 'show')
        }, 4000)
}
