const post = async (event) => {
    event.preventDefault();
    console.log("testing the post function")
    let description = document.querySelector("#text-box")
    let descriptionval = description.value
    console.log(descriptionval)
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
