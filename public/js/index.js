let editEl = document.querySelector('.edit')
let modalEl = document.querySelector('.modal')
let modalSaveEl = document.querySelector('.modal-save')
let modalCancelEl = document.querySelector('.modal-cancel')
let modalDeleteEl = document.querySelector('.delete')

editEl.addEventListener('click', modalPop)
function modalPop(){
    modalEl.classList.add('is-active')
};


// to save bio edits, will need to .map this and json it
modalSaveEl.addEventListener('click', modalDelete)
function modalDelete(){
    modalEl.classList.remove('is-active')
    // push to {{bio}}
    //add function to push to json
};


modalCancelEl.addEventListener('click', modalDelete)
function modalDelete(){
    modalEl.classList.remove('is-active')
};

modalDeleteEl.addEventListener('click', modalDelete)
function modalDelete(){
    modalEl.classList.remove('is-active')
};

