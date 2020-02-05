const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (xhr.status === 200) {
    console.log('WORK');
  }
});

xhr.open('POST', 'http://localhost/unam-php/');
xhr.send();
