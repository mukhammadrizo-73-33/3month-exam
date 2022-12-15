

let result = document.getElementById("result");
let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", (e) => {
   e.preventDefault();
   input.value = input.value.toLowerCase();

   if (input.value.trim() == "ishchi") {
      return result.textContent = "Hello";
   }
   if (input.value.trim() == "director") {
      return result.innerText = "Greeting"
   }
   if (input.value == "") {
      return result.innerText = "no login"
   } else {

      return result.textContent = "bunday lavozim mavjud emas";
   }
   // if (input.value != "ishchi" && input.value != "director") {
   // }
})


// 3-topshiriq

let button3 = document.getElementById("buttom3");

button3.addEventListener("click", (e) => {
   let result3 = document.getElementById("result3");
   let input3 = document.getElementById("input3");
   input3 = +(input3.value);
   if (input3 < 0) return result3.textContent = "o dan katta son kiriting"
   if (input3 < 100) {
      if (input3 < 10) {
         if (input3 == 0) return result3.textContent = "Nol"
         if (input3 == 1) return result3.textContent = "Bir"
         if (input3 == 2) return result3.textContent = "Ikki"
         if (input3 == 3) return result3.textContent = "Uch"
         if (input3 == 4) return result3.textContent = "To'rt"
         if (input3 == 5) return result3.textContent = "Besh"
         if (input3 == 6) return result3.textContent = "Olti"
         if (input3 == 7) return result3.textContent = "Yetti"
         if (input3 == 8) return result3.textContent = "Sakkiz"
         if (input3 == 9) return result3.textContent = "To'qqiz"
      } else {
         if (input3 == 10) return result3.textContent = "O'n"
         if (input3 == 20) return result3.textContent = "Yigirma"
         if (input3 == 30) return result3.textContent = "O'ttiz"
         if (input3 == 40) return result3.textContent = "Qirq"
         if (input3 == 50) return result3.textContent = "Elli"
         if (input3 == 60) return result3.textContent = "Otmish"
         if (input3 == 70) return result3.textContent = "Yetmish"
         if (input3 == 80) return result3.textContent = "Sakkon"
         if (input3 == 90) return result3.textContent = "To'qson"

         input3 = input3.toString().split("");
         let data = "";
         if (input3[0] == "1") data = "O'n "
         if (input3[0] == "2") data = "Yigirma "
         if (input3[0] == "3") data = "O'ttiz "
         if (input3[0] == "4") data = "Qirq "
         if (input3[0] == "5") data = "Elli "
         if (input3[0] == "6") data = "Otmish "
         if (input3[0] == "7") data = "Yetmish "
         if (input3[0] == "8") data = "Sakkon "
         if (input3[0] == "9") data = "To'qson "
         if (input3[1] == "1") data = data + "bir";
         if (input3[1] == "2") data = data + "ikki";
         if (input3[1] == "3") data = data + "uch";
         if (input3[1] == "4") data = data + "to'rt";
         if (input3[1] == "5") data = data + "besh";
         if (input3[1] == "6") data = data + "olti"
         if (input3[1] == "7") data = data + "yetti"
         if (input3[1] == "8") data = data + "sakkiz"
         if (input3[1] == "9") data = data + "to'qqiz"
         return result3.textContent = data
      }

   } else {
      return result3.textContent = "Yuzda kichik son kiriting"
   }

})


// 4-topshiriq


let tortinchi = () => {
   let arry = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
   let data = 0
   for (let i = 0; i < arry.length; i++) {
      data = data + arry[i] + 3;
   }
   return result4.textContent = data;
}
tortinchi();



// 5-topshiriq

let beshinci = () => {
   let arry1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
   let arry2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34]
   let data = [];
   let data2 = "";
   for (let i = 0; i < arry1.length; i++) {
      data.push(arry1[i] + arry2[i]);
      data2 = data2 + data[i].toString() + " ";
   }

   return result5.textContent = data2;
}

beshinci();


// 6-topshiriq  inputdan chiqanda ishlaydi




let result6 = document.getElementById("result6");
let input6 = document.getElementById("input6");


input6.addEventListener("change", (e) => {
   e.preventDefault();
   input6.value = input6.value.toUpperCase()

   // return result6.textContent=input6
})





// 7-topshiriq

let result7 = document.getElementById("result7");
let input7_1 = document.getElementById("input7_1");
let input7_2 = document.getElementById("input7_2");
let button7 = document.getElementById("button7")

button7.addEventListener('click', e => {
   e.preventDefault();
   console.log(input7_1.value, input7_2);
   input7_1.value.trim()
   if (input7_1.value.trim().length == 0 || input7_1.value.trim() == "") return result7.textContent = "Ism kiritish majburiy"
   if (input7_2.value.trim() == "") return result7.textContent = "Yosh kiritish majburiy"
   if (input7_1.value.trim().length <= 2) return result7.textContent = "Ism min 3"
   if (input7_1.value.trim().length > 32) return result7.textContent = "Ism max 32"
   if (input7_2.value.trim() <= 0) return result7.textContent = "Yosh min 1"
   if (input7_2.value.trim() > 150) return result7.textContent = "Yosh max 150"

   return result7.textContent = input7_1.value.trim() + " " + input7_2.value.trim();
})




// 8-topshiriq
let button8 = document.getElementById("button8");

button8.addEventListener('click', e => {
   e.preventDefault();
   let input8value = document.getElementById("input8");
   let result8 = document.getElementById("result8");

   input8value = +(input8value.value.trim());
   let arry = [23, 56, 4, 78, 5, 63, 45, 210, 56];
   let data = false;
   let index
   let string1 = ""

   for (let i = 0; i < arry.length; i++) {
      if (arry[i] == input8value) {
         index = i;
         data = true
         arry.splice(index - 1, 1);
      } else {
         string1 = string1 + arry[i].toString() + " ";
      }
   }
   if (!data) return result8.textContent = "Bunday son yo'q";

   return result8.textContent = string1
})



// 9-topshiriq
let button9 = document.getElementById("button9")
button9.addEventListener('click', e => {
   e.preventDefault();
   let input9 = document.getElementById("input9");
   let ul = document.getElementById("result9")

   let newLi = document.createElement("li");
   newLi.textContent = input9.value.trim();
   ul.append(newLi);
   input9.value="";
})