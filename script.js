document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');

    const cardColors = ['#FFCDD2', '#E1BEE7', '#BBDEFB', '#C8E6C9', '#FFECB3', '#D7CCC8', '#CFD8DC'];

    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventDescription = document.getElementById('eventDescription').value;

        if (eventName && eventDate && eventDescription) {
            addEvent(eventName, eventDate, eventDescription);
            eventForm.reset();
        }
    });

    function addEvent(name, date, description) {
        const card = document.createElement('div');
        const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];

        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card" style="background-color: ${randomColor};">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                    <p class="card-text">${description}</p>
                    <button class="btn btn-danger btn-sm delete">Delete</button>
                </div>
            </div>
        `;

        const deleteButton = card.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            card.remove();
        });

        eventList.appendChild(card);
    }
});
