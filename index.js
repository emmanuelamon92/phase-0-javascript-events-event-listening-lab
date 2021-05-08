function addingEventListener(){
    const input = document.querySelector('input');
    input.addEventListener('click', function (){
        alert('I was clicked!');
    });
}

addingEventListener();

// alert('I was clicked!');

// function addEventListener(){
//     const input = document.querySelector('input');
//     alert('I was clicked!');
//     input.addEventListener('click', addEventListener);
// }