emailjs.init("pf6wrj7HS9lHKGTpu");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");

  const templateParams = {
    fullname: document.querySelector('input[name="fullname"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    subject: document.querySelector('input[name="subject"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  console.log("Template params:", templateParams);

  emailjs
    .send("service_3dng3dm", "template_oqd54us", templateParams)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((err) => {
      console.log("Error sending email:", err);
    });
});
