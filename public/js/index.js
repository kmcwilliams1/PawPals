let bioEditEl = document.querySelector('.edit')
let bioModalEl = document.querySelector('.bioModal')
let bioModalSaveEl = document.querySelector('.bio-modal-save')
let bioModalCancelEl = document.querySelector('.bio-modal-cancel')
let bioModalDeleteEl = document.querySelector('.biodelete')


let signUpEl = document.querySelector('.signUp')
let signUpModalEl = document.querySelector('.signUpModal')
let signUpModalSaveEl = document.querySelector('.signUpmodal-save')
let signUpModalCancelEl = document.querySelector('.signUpmodal-cancel')
let signUpModalDeleteEl = document.querySelector('.signUpdelete')


let logInEl = document.querySelector('.logIn')
let logInModalEl = document.querySelector('.logInModal')
let logInModalSaveEl = document.querySelector('.logInmodal-save')
let logInModalCancelEl = document.querySelector('.logInmodal-cancel')
let logInModalDeleteEl = document.querySelector('.logIndelete')


bioEditEl.addEventListener('click', bioModalPop)
function bioModalPop() {
    bioModalEl.classList.add('is-active')
};

// to save bio edits, will need to .map this and json it
    bioModalSaveEl.addEventListener('click', bioModalSave)
    function bioModalSave() {
        bioModalEl.classList.remove('is-active')
        // push to {{bio}}
        //add function to push to json
    };

    bioModalCancelEl.addEventListener('click', modalDelete)
    function modalDelete() {
        bioModalEl.classList.remove('is-active')
    };

    bioModalDeleteEl.addEventListener('click', modalDelete)
    function modalDelete() {
        bioModalEl.classList.remove('is-active')
    };




logInEl.addEventListener('click', logInModalPop)
function logInModalPop() {
    logInModalEl.classList.add('is-active')
};

    logInModalSaveEl.addEventListener('click', logInModalSave)
    function logInModalSave() {
        logInModalEl.classList.remove('is-active')
    };

    logInModalCancelEl.addEventListener('click', logInModalDelete)
    function logInModalDelete() {
        logInModalEl.classList.remove('is-active')
    };

    logInModalDeleteEl.addEventListener('click', logInModalDelete)
    function logInModalDelete() {
        logInModalEl.classList.remove('is-active')
    };





    
signUpEl.addEventListener('click', signUpModalPop)
function signUpModalPop() {
    signUpModalEl.classList.add('is-active')
};

    signUpModalSaveEl.addEventListener('click', signUpModalSave)
    function signUpModalSave() {
        signUpModalEl.classList.remove('is-active')
    };

    signUpModalCancelEl.addEventListener('click', signUpModalDelete)
    function signUpModalDelete() {
        signUpModalEl.classList.remove('is-active')
    };

    signUpModalDeleteEl.addEventListener('click', signUpModalDelete)
    function signUpModalDelete() {
        signUpModalEl.classList.remove('is-active')
    };


