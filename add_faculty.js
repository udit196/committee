// Initialize Firebase and set up your configuration
// Replace the following with your actual Firebase config
const firebaseConfig = {
    
    
  };

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

// Get the form element
const addFacultyForm = document.getElementById('addFacultyForm');

// Listen for form submission
addFacultyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const facultyName = addFacultyForm.facultyName.value;
    const speciality = addFacultyForm.speciality.value;
    const department = addFacultyForm.department.value;
    const college = addFacultyForm.college.value;

    // Push data to Firebase database
    database.ref('faculty').push({
        facultyName: facultyName,
        speciality: speciality,
        department: department,
        college: college
    });

    // Redirect to a success page or perform any other actions
    alert('Faculty member added successfully!');
    addFacultyForm.reset(); // Reset the form
});
