document.addEventListener("DOMContentLoaded", function () {
  let userName = prompt("Masukan Nama Anda:", "Guest");
  if (userName) {
    document.getElementById("welcome-name").innerText = userName;
  }
});

function validateForm(event) {
  event.preventDefault(); //

  let name = document.getElementById("name").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Harus diisi semua!");
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Masukan Email yang Valid!");
    return;
  }

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
        <h3>Message Sent!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

  document.getElementById("contact-form").reset();
}
