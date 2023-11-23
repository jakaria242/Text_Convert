

// // ================== All querySelector Start =========================
let h1 = document.querySelector("h1")
let text = document.querySelector("#text");
let upperbtn = document.querySelector(".uppercase");
let lowerbtn = document.querySelector(".lowercase");
let capitalbtn = document.querySelector(".capitalize");
let copybtn = document.querySelector(".copy");
let deletbtn = document.querySelector(".delet");
let clearbtn = document.querySelector(".clear");

// // ================== All querySelector End =========================



// // ======================Uppercase Button Start ===============================

upperbtn.addEventListener("click", function() {
    let upper = text.value;
    if(!upper){
        alert("Plese Enter Your Text")
    }else{
        let newtext = upper.toUpperCase();
        text.value = newtext;
    }
})

// // ======================Uppercase Button End ===============================



// // ======================Lowercase Button Start ===============================

lowerbtn.addEventListener("click", function() {
    let lower = text.value;
    if(!lower){
        alert("Plese Enter Your Text")
    }else{
        let newtext = lower.toLowerCase();
        text.value = newtext;
    }
})

// // ======================Lowercase Button End ===============================


// // =====================Capitalizee Button Start ============================

capitalbtn.addEventListener("click", function() {
    let capital = text.value;
    if(!capital){
        alert("Plese Enter Your Text")
     }else{
       let arr = capital.split(" ");
       for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()+ arr[i].substring(1);
         text.value = arr.join(" ")
       }
     }
})

// // ======================Capitalizee Button End ==============================


// // ======================Copy Button Start ===============================
copybtn.addEventListener("click", () => {
    let copy = text.value;
    if (!copy) {
      alert("There is no text Here")
    }else{
       navigator.clipboard.writeText(text.value);
    }
})
// // ======================Copy Button End ===============================

// // ======================Delet Button Start ===============================
deletbtn.addEventListener("click", () => {
    let delet = text.value;
    if (!delet) {
      alert("There is no text Here")
    }else{
      let newdelet = delet.slice(0,-1)
      text.value = newdelet;
    }
})
// // ======================Delet Button End ===============================

// // ======================Clear Button Start ===============================
clearbtn.addEventListener("click", function() {
    let clear = text.value;
    if (!clear) {
      alert("Allredy clean")
    }else{
       text.value = "";
    }
})
// // ======================Clear Button End ===============================

