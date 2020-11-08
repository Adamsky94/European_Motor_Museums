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
                modalContactForm.reset();
                alert("Thank you for contacting us! We will shortly get back to you about your enquiry.");
                $("#modalclose").click();
            },
            function (error) {
                console.log("FAILED", error);
                alert("Something went wrong. Please try again later!" + error);
                $("#modalclose").click();
            }
        );
}