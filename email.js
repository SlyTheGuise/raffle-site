import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';

export function sendWinnerEmail(name, email) {
  emailjs.init("TgVZqxpr4QGUtTV8Y"); // Replace with your EmailJS public key

  const templateParams = {
    to_name: name,
    to_email: email,
    message: `🎉 Congratulations ${name}, you’ve won the raffle draw! 🎁`
  };

  emailjs.send("service_8qpiqy4", "template_l1046di", templateParams)
    .then(response => {
      console.log("Winner email sent!", response.status, response.text);
    })
    .catch(error => {
      console.error("Failed to send winner email:", error);
    });
}
