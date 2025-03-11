// Menampilkan nama pengguna di halaman utama
function updateWelcome() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        document.getElementById("userName").textContent = name;
    } else {
        alert("Please enter your name!");
    }
}

// Validasi Formulir Kontak
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah refresh halaman

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validasi sederhana
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Invalid email format!");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Phone number should only contain numbers!");
        return;
    }

    document.getElementById("formOutput").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});

// Fungsi validasi email
function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
