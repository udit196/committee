// Initialize Firebase using your configuration
const firebaseConfig = {
  
  
};

firebase.initializeApp(firebaseConfig);

const committeeTableBody = document.getElementById('committeeTableBody');

function displayCommittees(committees) {
  committeeTableBody.innerHTML = '';

  committees.forEach(committee => {
    const row = document.createElement('tr');

    const committeeNameCell = document.createElement('td');
    committeeNameCell.textContent = committee.committee_name;
    row.appendChild(committeeNameCell);

    const taskCell = document.createElement('td');
    taskCell.textContent = committee.task;
    row.appendChild(taskCell);
    const headCell = document.createElement('td');
    headCell.textContent = committee.head;
    row.appendChild(headCell);
    const collegeCell = document.createElement('td');
    collegeCell.textContent = committee.college;
    row.appendChild(collegeCell);

    // ... Add other cells for Due Date, Members, Head, College

    committeeTableBody.appendChild(row);
  });
}

// Retrieve committee data from Firebase and display it
firebase.database().ref('committee').on('value', snapshot => {
  const committees = [];
  snapshot.forEach(committeeSnapshot => {
    const committeeData = committeeSnapshot.val();
    committees.push(committeeData);
  });
  // console.log(committees)
  displayCommittees(committees);
});
