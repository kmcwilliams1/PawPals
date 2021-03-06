const comment = async (event) => {
    event.preventDefault();
    let description = document.querySelector(".comment-text-box").value
    console.log(description)
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
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

document.querySelector('.commentSubmitForm').addEventListener('submit', comment);
