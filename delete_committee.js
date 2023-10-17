const firebaseConfig = {
    
    
  };


firebase.initializeApp(firebaseConfig);

const committeeTableBody = document.getElementById('committeeTableBody');
const confirmDeleteButton = document.getElementById('confirmDelete');

function createDeleteButton(committeeId) {
    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm';
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    button.addEventListener('click', () => deletecommittee(committeeId));
    return button;
}

function deletecommittee(committeeId) {
    $('#confirmationModal').modal('show'); // Show the confirmation modal

    confirmDeleteButton.addEventListener('click', () => {
        firebase.database().ref(`committee/${committeeId}`).remove();
        $('#confirmationModal').modal('hide'); // Hide the confirmation modal
    });

    // Handle "Cancel" button click inside the modal
    const cancelDeleteButton = document.getElementById('cancelDelete');
    cancelDeleteButton.addEventListener('click', () => {
        $('#confirmationModal').modal('hide'); // Hide the confirmation modal
    });

       
}

firebase.database().ref('committee').on('value', snapshot => {
    committeeTableBody.innerHTML = ''; // Clear existing table content

    snapshot.forEach(committeeSnapshot => {
        const committeeId = committeeSnapshot.key;
        const committeeData = committeeSnapshot.val();

        const row = document.createElement('tr');

        const committeeNameCell = document.createElement('td');
        committeeNameCell.textContent = committeeData.committee_name;
        row.appendChild(committeeNameCell);

        const specialityCell = document.createElement('td');
        specialityCell.textContent = committeeData.task;
        row.appendChild(specialityCell);

        const departmentCell = document.createElement('td');
        departmentCell.textContent = committeeData.head;
        row.appendChild(departmentCell);

        const collegeCell = document.createElement('td');
        collegeCell.textContent = committeeData.college;
        row.appendChild(collegeCell);

        const actionCell = document.createElement('td');
        actionCell.appendChild(createDeleteButton(committeeId));
        row.appendChild(actionCell);

        committeeTableBody.appendChild(row);
    });
});
