function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
}
createDaysOfTheWeek()

//Exercício 1 - Cria cada dia do calendário de forma dinâmica e adiciona como filhas da tag <ul> com id 'days'.
function daysWeek(){
    let daysWeek = document.querySelector('#days')
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    for(let index = 0; index < dezDaysList.length; index +=1){
        let li = document.createElement('li');
        li.className = 'day';
        if(dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList == 31){
            li.className = 'day holiday';
        }else if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList == 18 || dezDaysList == 25){
            li.className = 'day friday';
        }
        li.innerText = dezDaysList[index];
        days.appendChild(li);
    }
}
daysWeek();

//Exercício 2 - Cria o botão feriado e adiciona id a ele. 

function holidays(string){    
    let btnContainer = document.querySelector('.buttons-container');
    let btnHoliday = document.createElement('button');
    btnHoliday.id = 'btn-holiday';
    btnHoliday.innerText = string;
    btnContainer.appendChild(btnHoliday);
}

holidays('Feriados');

//Exercício 3 - Adiciona função de alterar cor dos feriados ao botão criado no exercício 3.
function colorsHolidays(){
    let btnHoliday = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');

    for(let index = 0; index < holidays.length; index +=1){
        if(holidays[index].style.backgroundColor == 'green'){
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        }else{
            holidays[index].style.backgroundColor = 'green';
        }
    } 
    btnHoliday.addEventListener('click', colorsHolidays);
}

colorsHolidays();

//Exercício 4 - Cria um botão "Sexta-Feira" dinâmicamente.
function createBtnFriday(friday){
    let btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
    btnFriday.innerText = friday;
    document.querySelector('.buttons-container').appendChild(btnFriday);
}

createBtnFriday('Sexta-feira');

//Exercício 5 - Adiciona evento que altera o texto exibido nos dias que são sexta-feira.
function eventFriday(){
    let btnFriday = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let arrayDays = [4, 12, 19, 26];
    for(let index = 0; index < fridays.length; index +=1){
        if(fridays[index].innerText === 'Sexta-feira'){
            fridays[index].innerText = arrayDays[index];
        }else{
            fridays[index].innerText = 'Sexta-feira';
        }
    }
    btnFriday.addEventListener('click', eventFriday);
}
eventFriday();

//Exercício 6 - Adiciona efeito de zoom ao passar o mouse sobre os dias do calendário. 
let daysZoom = document.querySelector('#days')
function zoomUP(){
    daysZoom.addEventListener('mouseover', function(e){
        e.target.style.fontSize = '30px';
    });
}

function zoomDown(){
    daysZoom.addEventListener('mouseout', function(e){
        e.target.style.fontSize = '20px';
    });
}


zoomUP();
zoomDown();

//Exercício 7 - Implementa função que adiciona tarefa personalizada ao calendário.
function toDo(string){
    let divTasks = document.querySelector('.my-tasks');
    let span = document.createElement('span');
    span.innerText = string;
    divTasks.appendChild(span);
}
toDo('Estudar');