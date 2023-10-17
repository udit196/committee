const firebaseConfig = {
    
  };


firebase.initializeApp(firebaseConfig);

const facultyTableBody = document.getElementById('facultyTableBody');
const confirmDeleteButton = document.getElementById('confirmDelete');

function createDeleteButton(facultyId) {
    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm';
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    button.addEventListener('click', () => deleteFaculty(facultyId));
    return button;
}

function deleteFaculty(facultyId) {
    $('#confirmationModal').modal('show'); // Show the confirmation modal

    confirmDeleteButton.addEventListener('click', () => {
        firebase.database().ref(`faculty/${facultyId}`).remove();
        $('#confirmationModal').modal('hide'); // Hide the confirmation modal
    });

    // Handle "Cancel" button click inside the modal
    const cancelDeleteButton = document.getElementById('cancelDelete');
    cancelDeleteButton.addEventListener('click', () => {
        $('#confirmationModal').modal('hide'); // Hide the confirmation modal
    });

       
}

firebase.database().ref('faculty').on('value', snapshot => {
    facultyTableBody.innerHTML = ''; // Clear existing table content

    snapshot.forEach(facultySnapshot => {
        const facultyId = facultySnapshot.key;
        const facultyData = facultySnapshot.val();

        const row = document.createElement('tr');

        const facultyNameCell = document.createElement('td');
        facultyNameCell.textContent = facultyData.facultyName;
        row.appendChild(facultyNameCell);

        const specialityCell = document.createElement('td');
        specialityCell.textContent = facultyData.speciality;
        row.appendChild(specialityCell);

        const departmentCell = document.createElement('td');
        departmentCell.textContent = facultyData.department;
        row.appendChild(departmentCell);

        const collegeCell = document.createElement('td');
        collegeCell.textContent = facultyData.college;
        row.appendChild(collegeCell);

        const actionCell = document.createElement('td');
        actionCell.appendChild(createDeleteButton(facultyId));
        row.appendChild(actionCell);

        facultyTableBody.appendChild(row);
    });
});
