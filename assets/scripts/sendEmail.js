/*EmailJS code segment inspired by the Interactive Frontend course material 
https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js*/

function sendMail(modalContactForm) {
    emailjs
        .send("EMMP", "template_EMMP", {
            from_name: modalContactForm.name.value,
            from_email: modalContactForm.email.value,
            message: modalContactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                document.getElementById("message").innerHTML += "Thank you for your email! We appreciate Your trust in Our service. One of our colleagues will contact shortly!";
                modalContactForm.reset();
                event.preventDefault();
            },
            function (error) {
                console.log("FAILED", error);
                alert("Something went wrong. Please try again later!" + error);
                $("#modalclose").click();
            }
        );
}