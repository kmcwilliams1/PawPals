let bioEditEl = document.querySelector('.editBio')
let bioModalEl = document.querySelector('.bioModal')
let bioModalSaveEl = document.querySelector('.bio-modal-save')
let bioModalCancelEl = document.querySelector('.bio-modal-cancel')
let bioModalDeleteEl = document.querySelector('.bioDelete')



bioEditEl.addEventListener('click', bioModalPop)
function bioModalPop() {
    bioModalEl.classList.add('is-active')
};


bioModalSaveEl.addEventListener('click', bioModalSave)
function bioModalSave() {
    bioModalEl.classList.remove('is-active')

};

bioModalCancelEl.addEventListener('click', modalDelete)
function modalDelete() {
    bioModalEl.classList.remove('is-active')
};

bioModalDeleteEl.addEventListener('click', modalDelete)
function modalDelete() {
    bioModalEl.classList.remove('is-active')
};

const updateBio = async (event) => {
    event.preventDefault();
    let age = document.querySelector("#age").value
    let breed = document.querySelector("#breed").value
    let toys = document.querySelector("#toys").value
    let shortBio = document.querySelector("#shortBio").value
    const response = await fetch('/api/post', {
        method: 'POST',
        body:JSON.stringify ({
            age,
            breed,
            toys,
            shortBio
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }

};

document.querySelector('.editBio').addEventListener('submit', updateBio);



// function createbio() {
//     let bioCard = "";
//     bioCard += `
// <ul>
//     <li>${shortBio}</li>
//     <li>I am a ${breed}</li>
//     <li>I am ${age} years old</li>
//     <li>My favorite toys are ${toys}</li>
// </ul>
//       `
//     return bioCard;
// }



// let signUpEl = document.querySelector('.signUp')
// let signUpModalEl = document.querySelector('.signUpModal')
// let signUpModalSaveEl = document.querySelector('.signUpmodal-save')
// let signUpModalCancelEl = document.querySelector('.signUpmodal-cancel')
// let signUpModalDeleteEl = document.querySelector('.signUpdelete')


// let logInEl = document.querySelector('.logIn')
// let logInModalEl = document.querySelector('.logInModal')
// let logInModalSaveEl = document.querySelector('.logInmodal-save')
// let logInModalCancelEl = document.querySelector('.logInmodal-cancel')
// let logInModalDeleteEl = document.querySelector('.logIndelete')



// logInEl.addEventListener('click', logInModalPop)
// function logInModalPop() {
//     logInModalEl.classList.add('is-active')
// };

//     logInModalSaveEl.addEventListener('click', logInModalSave)
//     function logInModalSave() {
//         logInModalEl.classList.remove('is-active')
//     };

//     logInModalCancelEl.addEventListener('click', logInModalDelete)
//     function logInModalDelete() {
//         logInModalEl.classList.remove('is-active')
//     };

//     logInModalDeleteEl.addEventListener('click', logInModalDelete)
//     function logInModalDelete() {
//         logInModalEl.classList.remove('is-active')
//     };






// signUpEl.addEventListener('click', signUpModalPop)
// function signUpModalPop() {
//     signUpModalEl.classList.add('is-active')
// };

//     signUpModalSaveEl.addEventListener('click', signUpModalSave)
//     function signUpModalSave() {
//         signUpModalEl.classList.remove('is-active')
//     };

//     signUpModalCancelEl.addEventListener('click', signUpModalDelete)
//     function signUpModalDelete() {
//         signUpModalEl.classList.remove('is-active')
//     };

//     signUpModalDeleteEl.addEventListener('click', signUpModalDelete)
//     function signUpModalDelete() {
//         signUpModalEl.classList.remove('is-active')
//     };


