let openModalTrigger = document.getElementById("button");

openModalTrigger.addEventListener("click", () => {
  generatePreview();
});

function generatePreview() {
  let userNamel = document.getElementById("namaL").value;
  let cardNamel = document.getElementById("previewNamel");
  cardNamel.innerHTML = userNamel;

  let userNamep = document.getElementById("namaP").value;
  let cardNamep = document.getElementById("previewNamep");
  cardNamep.innerHTML = userNamep;

  let userBirthplace = document.getElementById("birthplace").value;
  let cardBirthplace = document.getElementById("previewBirthplace");
  cardBirthplace.innerHTML = userBirthplace;

  let userBod = document.getElementById("bod").value;
  let cardBod = document.getElementById("previewBod");
  cardBod.innerHTML = userBod;

  let userRelg = document.getElementById("religion").value;
  let cardRelg = document.getElementById("previewRelg");
  cardRelg.innerHTML = userRelg;

  let userEduc = document.getElementById("pendidikan").value;
  let cardEduc = document.getElementById("previewEduc");
  cardEduc.innerHTML = userEduc;
  //GENDER//
  let userGender1 = document.getElementById("Male").value;
  if (userGender1 == "Male") {
    let cardGender = document.getElementById("previewGender");
    cardGender.innerHTML = "Laki-laki";
  }

  let userGender2 = document.getElementById("Female").value;
  if (userGender2 == "Female") {
    let cardGender = document.getElementById("previewGender");
    cardGender.innerHTML = "Perempuan";
  }
  /////
  let userSchname = document.getElementById("schoolName").value;
  let cardSchname = document.getElementById("previewSchname");
  cardSchname.innerHTML = userSchname;
  
  let userWanum = document.getElementById("wa-num").value;
  let cardWanum = document.getElementById("previewWanum");
  cardWanum.innerHTML = userWanum; 

  let userMail = document.getElementById("mail").value;
  let cardMail = document.getElementById("previewMail");
  cardMail.innerHTML = userMail;

  //let userCourseList = document.getElementsByName("progLang");
  let cardCourse = document.getElementById("Course-checked");
  let text = '<span> Kamu memilih kelas pemrograman </span>';
  let listArray = [];
  let checkboxes = document.querySelectorAll('.checkbox');
  for (let checkbox of checkboxes) {
      if(this.checked == true){
        listArray.push(this.value);
        cardCourse.innerHTML = text + listArray.join (' / ');
        //console.log(this.value);
      }
      else {
        listArray = listArray.filter( e => e !== this.value);
        cardCourse.innerHTML = text + listArray.join (' / ');
        //console.log("unchecked");
      }
  }



  ////COURSE///
  // let userCourse1 = document.getElementsById("c");
  // if (userCourse1.checked == true) {
  //   let cardCourse1 = document.getElementById("previewCourse1");
  //   cardCourse1.innerHTML = "C";
  // }
  // else {
  //   cardCourse1.innerHTML = "";
  // }

  // let userCourse2 = document.getElementsById("python");
  // if (userCourse2.checked == true) {
  //   let cardCourse2 = document.getElementById("previewCourse2");
  //   cardCourse2.innerHTML = "Python";
  // }
  // else {
  //   cardCourse2.innerHTML = "";
  // }

  // let userCourse3 = document.getElementsById("html");
  // if (userCourse3.checked == true) {
  //   let cardCourse3 = document.getElementById("previewCourse3");
  //   cardCourse3.innerHTML = "HTML";
  // }
  // else {
  //   cardCourse3.innerHTML = "";
  // }

  // let userCourse4 = document.getElementsById("java");
  // if (userCourse4.checked == true) {
  //   let cardCourse4 = document.getElementById("previewCourse4");
  //   cardCourse4.innerHTML = "Java";
  // }
  // else {
  //   cardCourse4.innerHTML = "";
  // }
  //

}

function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("previewAva");
    preview.src = src;
  }
}
