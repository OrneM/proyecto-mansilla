document.addEventListener('DOMContentLoaded', () => {
    const monthYearElement = document.getElementById('month-year');
    const datesElement = document.getElementById('dates');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const peopleSelectContainer = document.getElementById('people-select-container');
    const timeButtonsContainer = document.getElementById('time-buttons-container');

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        
        monthYearElement.textContent = `${monthNames[month]} ${year}`;

        datesElement.innerHTML = '';

        for (let i = 0; i < firstDayIndex; i++) {
            datesElement.innerHTML += `<div class="date empty"></div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            let divDay = document.createElement('div');
            divDay.className = "date";
            divDay.textContent = i;
            datesElement.appendChild(divDay);
           
            };


    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        renderCalendar();
    }

    prevButton.addEventListener('click', () => changeMonth(-1));
    nextButton.addEventListener('click', () => changeMonth(1));

    renderCalendar();

    // Crear el input de selección de personas
    function createPeopleSelect() {
        const label = document.createElement('label');
        label.textContent = 'Cantidad de personas:';

        const select = document.createElement('select');
        select.id = 'people-select';

        for (let i = 1; i <= 8; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }

        peopleSelectContainer.appendChild(label);
        peopleSelectContainer.appendChild(select);
    }

    createPeopleSelect();

});


