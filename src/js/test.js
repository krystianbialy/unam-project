const xhr = new XMLHttpRequest();

xhr.addEventListener("load",  function() {
    if (xhr.status === 200) {
        const json = JSON.parse(xhr.response);
        console.log(json);
    }
});

xhr.open("POST", "http://localhost/unam-php", true);
xhr.send();