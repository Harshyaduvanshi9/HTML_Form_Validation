document.getElementById("submitBtn").addEventListener("click", function () {
    if (document.getElementById("surveyForm").checkValidity()) {
      
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

     
        const popupMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

        alert("Survey Form Data:\n\n" + popupMessage);

       
        document.getElementById("surveyForm").reset();
    } else {
        alert("Please fill in all the required fields before submitting.");
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("surveyForm").reset();
});