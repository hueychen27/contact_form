const inputs = document.getElementsByClassName("form-control");

check();
function check() {
    Array.from(inputs).forEach((el) => {
        if (el.checkValidity() && (el.getAttribute("disabled") != false)) {
            el.classList.remove("is-invalid");
            el.classList.add("is-valid");
            if (el.getAttribute("disabled") != false) el.classList.remove("is-valid");
        } else {
            el.classList.add("is-invalid");
            el.classList.remove("is-valid");
        }
    })
    requestAnimationFrame(check);
}

/**
 * @param {string} email Email that will be referred to.
 * @param {string} phone Phone number that will be referred to if a value is given.
 * @param {string} name Full name that will be referred to.
 * @param {string} body Text that will be referred to.
*/
function send(email, phone, name, body) {
    const contents = `Sent by: ${name} (name), ${email} (email), ${phone} (phone number). <br>${body}`
    Email.send({
        SecureToken: "cd92f614-c113-439c-b499-614b01ea36fd",
        To: "hueychen27@outlook.com",
        From: email,
        Subject: "Contact Us Message",
        Body: contents
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    confirmButtonText: "Dismiss",
                    title: "Message Sent",
                    text: "You have successfully sent the message.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    confirmButtonText: "Dismiss",
                    title: "Failed",
                    text: "Could not send message.",
                    footer: "Is your email correct?",
                    icon: "error"
                });
            }
        }
    )
}