const firebaseConfig = {
  
  
};

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('submit').addEventListener('click',(e)=>{
      e.preventDefault()
      console.log("hello")
        c_name=document.getElementById("c_name");
        members=document.getElementById("members");
        head=document.getElementById("head");
        due_date=document.getElementById("d_date");
        clg=document.getElementById("clg");
        task=document.getElementById("task");
        var selectedArray = new Array(); 
      var i;
      var count = 0;
      for (i=0; i<members.options.length; i++) { 
          if (members.options[i].selected) {
              selectedArray[count] = members.options[i].value;
              count++; 
          } 
      } 
        const data={
          committee_name:c_name.value,
          head:head.value,
          members:selectedArray,
          due_date:due_date.value,
          task:task.value,
          college:clg.value,
  
        }              // Push data to Firebase database
  database.ref('committee').push(data);

  // Redirect to a success page or perform any other actions
  alert('Faculty member added successfully!');
  // addFacultyForm.reset(); 
  
          console.log(data);
        });

  });

  // Initialize Firebase and set up your configuration
// Replace the following with your actual Firebase config

