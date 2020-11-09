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

function daysWeek(){
    const daysWeek = document.querySelector('#days')
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
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

function holidays(string){
    const btnContainer = document.querySelector('.buttons-container');
    const btnHoliday = document.createElement('button');
    btnHoliday.id = 'btn-holiday';
    btnHoliday.innerText = string;
    btnContainer.appendChild(btnHoliday);
}

holidays('Feriados');

function colorsHolidays(){
    const btnHoliday = document.querySelector('.buttons-container');
    const holidays = document.querySelectorAll('.holiday');

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