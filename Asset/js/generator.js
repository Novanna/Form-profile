let openModalTrigger = document.getElementById("button");

openModalTrigger.addEventListener("click", openModal);

function openModal() {
  document.getElementById("modal-wrapper").classList.add("visible");

  generatePreview();
}

function generatePreview(){
    let userNamel = document.getElementById("namaL").value;
    let userNamep = document.getElementById("namaP").value;
    let userBirthplace = document.getElementById("birthplace").value;
    let userBod = document.getElementById("bod").value;
    let userRelg = document.getElementByName("agama").value;
    let userGender = document.getElemetByName("gender").value;
    let userLoc = document.getElementById("domisili").value;
    let userEduc = document.getElementByName("pendidikan").value;
    let userSchname = document.getElementById("schoolName").value;
    let userProglang = document.getElementByName("proglang").value;
    let userWanum = document.getElementById("wa-num").value;
    let userMail = document.getElementById("mail").value;
    let userAva = document.getElementById("ava").value;

    let cardNamel = document.getElementById("previewNamel");
    let cardNamep = document.getElementById("previewNamep");
    let cardBirthplace = document.getElementById("previewBirthplace");
    let cardBod = document.getElementById("previewBod");
    let cardRelg = document.getElementById("previewRelg");
    let cardGender = document.getElementById("previewGender");
    let cardLoc = document.getElementById("previewLoc");
    let cardEduc = document.getElementById("previewEduc");
    let cardSchname = document.getElementById("previewSchname");
    let cardProglang = document.getElementById("previewProglang");
    let cardWanum = document.getElementById("previewWanum");
    let cardMail = document.getElementById("previewMail");
    let cardAva = document.getElementById("previewAva");

    cardNamel.innerHTML = nameLInput;
    cardNamep.innerHTML = namePInput;
    cardBirthplace.innerHTML = birthPlaceInput;
    cardBod.innerHTML = bodInput;
    cardRelg.innerHTML = relgInput;
    cardGender.innerHTML = genderInput;
    cardLoc.innerHTML = locInput;
    cardEduc.innerHTML = educInput;
    cardSchname.innerHTML = schnameInput;
    cardProglang.innerHTML = proglangLInput;
    cardWanum.innerHTML = wanumInput;
    cardMail.innerHTML = mailInput;
    cardAva.setAttribute("src","img/" + userAva.split("\\").pop());

}

let modalWindow = document.getElementById("modal-wrapper");
modalWindow.addEventListener("click", closeModal);

function closeModal() {
  modalWindow.classList.remove("visible");
}
