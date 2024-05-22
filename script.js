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

    // Crear los botones de horarios
    function createTimeButtons() {
        const startHour = 18;
        const endHour = 23;
        const interval = 15; // Intervalo de 15 minutos

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += interval) {
                const button = document.createElement('button');
                button.classList.add('time-button');
                button.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                timeButtonsContainer.appendChild(button);
            }
        }
    }

    createTimeButtons();
});


