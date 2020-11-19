/*EmailJS code segment inspired by the Interactive Frontend course material 
https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js*/

/*Code that prevents the site to reload after pressing the submit button*/
document.getElementById("contact-form").addEventListener("submit",(event)=>{
    event.preventDefault();
})

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
                /* Code for replacing placeholder text as a feedback for the user from https://stackoverflow.com/questions/13506481/change-placeholder-text */
                $("#message").attr("placeholder","Thank you for your email! We sincerely appreciate Your trust in Our service. One of our colleagues will be in touch shortly!");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Something went wrong. Please try again later!" + error);
                $("#modalclose").click();
            }
        );
}