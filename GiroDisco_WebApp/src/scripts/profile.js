document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get("firstName");
    const location = urlParams.get("location");
    const fullName = firstName.split(" ").join("").toLowerCase();
    const email = `${fullName}@gmail.com`;
    const fullNameParts = firstName.split(" ");
    const firstNameValue = fullNameParts[0];
    const lastNameValue = fullNameParts.slice(1).join(" ");
  
    document.getElementById("firstNameInput").value = firstNameValue;
    document.getElementById("locationInput").value = location;
    document.getElementById("lastNameInput").value = lastNameValue;
    document.getElementById("emailInput").value = email;
  });

 
 