function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable');
      tableBody.innerHTML = '';
      const list = data.data;
      list.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', function() {
          deleteEmployee(item.id);
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error(error));
}

// Add event listener to submit button
document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  createEmployee();
});

// Add event listener to delete button

// Function to create an employee
function createEmployee() {
  const name = document.getElementById('employeeName').value;
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create employee');
    }
    fetchEmployees(); // Refresh the employee list after creating a new employee
  })
  .catch(error => console.error(error));
}

// Function to delete an employee
function deleteEmployee(id) {
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }
    fetchEmployees(); // Refresh the employee list after deleting an employee
  })
  .catch(error => console.error(error));
}

fetchEmployees();
