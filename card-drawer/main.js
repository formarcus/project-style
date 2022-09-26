let card = document.querySelector('.card');
let cardToggle = document.querySelector('.toggle');


cardToggle.onclick = function(){
    card.classList.toggle('active')
}

// $(cardToggle).on('click', function () { 
//     card.classList.toggle('active')
//  })