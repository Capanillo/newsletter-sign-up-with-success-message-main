const container = document.querySelector(".container");
const success = document.querySelector(".success");
const btn = document.querySelector(".btn");
const btnModal = document.querySelector(".btn-modal");
const mail = document.getElementById("input-mail");
const errorMail = document.getElementById("text-error-mail");

btn.addEventListener("click", verifyMail);

btnModal.addEventListener("click", () => {
  container.classList.remove("none");
  success.classList.add("none");
  mail.value = "";
});

function verifyMail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailValue = mail.value;

  if (regex.test(mailValue)) {
    errorMail.classList.add("hide");
    mail.classList.remove("error-mail");
    container.classList.add("none");
    success.classList.remove("none");
  } else {
    errorMail.classList.remove("hide");
    mail.classList.add("error-mail");
  }
}
