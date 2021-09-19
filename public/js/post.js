


const post = async (event) => {
    event.preventDefault();
    let description = document.querySelector("#text-box").value
    const response = await fetch('/api/post', {
      method: 'POST',
      body:JSON.stringify ({
          description
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('.submitForm').addEventListener('submit', post);
