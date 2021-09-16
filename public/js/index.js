let editEl = document.querySelector('.edit')
let bioModalEl = document.querySelector('.bioModal')
let BioModalSaveEl = document.querySelector('.modal-save')
let modalCancelEl = document.querySelector('.modal-cancel')
let modalDeleteEl = document.querySelector('.delete')


// let signUpEl = document.querySelector('.signUp')
// let signUpModalEl =  document.querySelector('.signUpModalEl')
// let logInEl = document.querySelector('.logIn')
// let logInModalEl =  document.querySelector('.logInModal')



editEl.addEventListener('click', bioModalPop)
function bioModalPop(){
    bioModalEl.classList.add('is-active')
};

// to save bio edits, will need to .map this and json it
BioModalSaveEl.addEventListener('click', modalDelete)
function modalDelete(){
    bioModalEl.classList.remove('is-active')
    // push to {{bio}}
    //add function to push to json
};

modalCancelEl.addEventListener('click', modalDelete)
function modalDelete(){
    bioModalEl.classList.remove('is-active')
};

modalDeleteEl.addEventListener('click', modalDelete)
function modalDelete(){
    bioModalEl.classList.remove('is-active')
};




// logInEl.addEventListener('click', logInModalPop)
// function logInModalPop(){
//     logInModalEl.classList.add('is-active')
// };

// modalCancelEl.addEventListener('click', modalDelete)
// function modalDelete(){
//     logInModalEl.classList.remove('is-active')
// };

// modalDeleteEl.addEventListener('click', modalDelete)
// function modalDelete(){
//     logInModalEl.classList.remove('is-active')
// };




// signUpEl.addEventListener('click', signUpModalPop)
// function signUpModalPop(){
//     signUpModalEl.classList.add('is-active')
// };

// modalCancelEl.addEventListener('click', modalDelete)
// function modalDelete(){
//     signUpModalEl.classList.remove('is-active')
// };

// modalDeleteEl.addEventListener('click', modalDelete)
// function modalDelete(){
//     signUpModalEl.classList.remove('is-active')
// };

