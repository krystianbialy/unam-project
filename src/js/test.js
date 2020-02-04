console.log('HELLO');

const xhr = new XMLHttpRequest();
const url = 'https://unam-project.herokuapp.com';
   
xhr.open('GET', url);
xhr.send();