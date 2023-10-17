const firebaseConfig = {
    
    
  };
// Initialize the Firebase app
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const facultyTableBody = document.getElementById('facultyTableBody');

db.ref('faculty').on('value', snapshot => {
    facultyTableBody.innerHTML = ''; // Clear existing table content

    snapshot.forEach(facultySnapshot => {
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

        facultyTableBody.appendChild(row);
    });
});
