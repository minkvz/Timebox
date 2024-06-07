document.getElementById('timebox-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const description = document.getElementById('description').value;

    const timeboxItem = document.createElement('li');
    timeboxItem.innerHTML = `<strong>Task:</strong> ${task} <br>
                             <strong>Start Time:</strong> ${startTime} <br>
                             <strong>End Time:</strong> ${endTime} <br>
                             <strong>Description:</strong> ${description}`;

    document.getElementById('timebox-items').appendChild(timeboxItem);

    // Clear the form fields
    document.getElementById('timebox-form').reset();
});
