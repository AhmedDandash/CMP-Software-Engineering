function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => deleteEmployee(item.id)); // Adding event listener
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button

document.getElementById('employeeForm').addEventListener('submit', function(event) { createEmployee();});

// TODO


// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  var EmpName = document.getElementById('name').value;
  var EmpId = document.getElementById('id').value;
  const EmpEntity = {name: EmpName,id:EmpId};
 fetch('http://localhost:3000/api/v1/employee', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(EmpEntity)
})
fetchEmployees();
}

// TODO
function deleteEmployee (id){
  // get id
  // send id to BE
  // call fetchEmployees
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })


  fetchEmployees();
}

fetchEmployees() 
