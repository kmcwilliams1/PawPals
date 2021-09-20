const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log(email,username,password)
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          //Might need to replace Dashboard
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);