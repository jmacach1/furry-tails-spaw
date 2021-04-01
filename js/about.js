const contactForm = document.getElementById('contactUs');
const PET_OWNER_NAME = "petOwnerName";
const PET_TYPE = "petType";
const MESSAGE = "message";

function sendMessage(e) {
  e.preventDefault();
  const petOwnerName = e.target[PET_OWNER_NAME].value;
  const petType = e.target[PET_TYPE].value;
  const message = e.target[MESSAGE].value;

  const noNameOrMessage = petOwnerName === "" || message === "";
  if (noNameOrMessage) {
    const errorMsg = "Unable to send: No name or message";
    console.log(errorMsg);
    alert(errorMsg);
    return;
  }
  const msg = `
    Send message to Furry Tails sPaw... \n
    Pet Owner Name : ${petOwnerName} \n
    Pet Type : ${petType} \n
    Message : ${message} \n
  `;
  const isSending = confirm(msg);
  if (!isSending) {
    console.log("Message Not Sent - Cancelled");
    return;
  }
  console.log(msg);
  contactForm.reset();
}
document.addEventListener("DOMContentLoaded", function() {
  contactForm.addEventListener("submit", sendMessage);
});