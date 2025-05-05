let contacts = [];

function addme() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!firstName || !lastName || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }

    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    };

    contacts.push(contact);

    const jsonOutput = JSON.stringify(contacts);
    document.getElementById("json-value").textContent = jsonOutput;
}