
 function validateForm() {
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var age = document.getElementById("age").value;
            var email = document.getElementById("mail").value;
            var password = document.getElementById("pass").value;
            var phone = document.getElementById("no").value;
            var dob = new Date(document.getElementById("dob").value);
            var today = new Date();
    
            if (!fname || !lname || !age || !dob || !email || !password || !phone) {
                alert("All fields are required!");
                return false;
            }
            var phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return false;
            }
            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return false;
            }
            alert("Submitted successfully!");
            return true;

        }
   