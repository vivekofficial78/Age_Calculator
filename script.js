function calculateAge() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    var days;
    var months;

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        monthDiff += 12;
    }

    if(today.getDate() < birthDate.getDate()){
        monthDiff--;
        days = 30 + today.getDate() - birthDate.getDate();
    } else {
        days = today.getDate() - birthDate.getDate();
    }

    months = monthDiff;
    var output = `Hi, ${name}, you are ${age} years, ${months} months & ${days} days old as of today.`;
    document.getElementById("result").innerHTML = output;
}

function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}