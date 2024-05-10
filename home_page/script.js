 //check donor
 const data = document.getElementById("form1");
 console.log(form1);

 data.addEventListener('submit', fetched);
 function fetched(e) {
   e.preventDefault();
   const info1 = document.getElementById("state").value;
   const info2 = document.getElementById("bloodgroup").value;
   const info3 = document.getElementById("inputZip").value;

   console.log(info1, info2, info3);

   async function fetchdata() {
     const url = 'http://localhost:3000/donor'
     const response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify({
         state_cd: info1,
         blood_cd: info2,
         zip_cd: info3,
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     });

     const output= document.getElementById('empty');
     const responseData = await response.json();
     let html = "";
     if ( responseData.message === "success") {
       responseData.Response.forEach(({ first_name, last_name, phone, age, gender, blood }) => {
         html += `
             <div class="col">
                 <div class="card h-100" style="max-width: 800px;">
                     <div class="row g-0">
                         <div class="col-md-4 ps-3 d-flex justify-content-center align-items-center">
                             <img src="/Sample_User_Icon.png" class="img-fluid cardimg" alt="...">
                         </div>
                         <div class="col-md-8">
                             <div class="card-body">
                                 <h5 class="card-title">Blood Group : ${blood} </h5>
                                 <p class="card-text">Name : ${first_name} ${last_name} <br>
                                     Number : ${phone} <br>
                                     Age : ${age} <br>
                                     Gender : ${gender}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         `;
       });
       output.innerHTML = html;

       data.reset();

     } else {
       html = `
           <div class="alert alert-info" role="alert">
             ${responseData.Response ? responseData.Response : responseData.message}
           </div>
       `;
       output.innerHTML = html;
     }
   }
   fetchdata();
 }

 //request blood
 const data2 = document.getElementById('form2');
 data2.addEventListener('submit', fetching2);

 function fetching2(e) {
   e.preventDefault();
   const info1=document.getElementById('fname_rb').value;
   const info2=document.getElementById('lname_rb').value;
   const info3=document.getElementById('age_rb').value;
   const info4=document.getElementById('dob_rb').value;
   const info5=document.getElementById('email_rb').value;
   const info6=document.getElementById('phone_rb').value;
   const info7=document.getElementById('blood_rb').value;
   const info8=document.getElementById('state_rb').value;
   const info9=document.getElementById('inputZip2').value;
   
   console.log(info1,info2,info3,info7,info8,info9);

   async function fetchdata(){
     const url='http://localhost:3000/requestblood'
     const response= await fetch(url,{
       method:'POST',
       body:JSON.stringify({
       fname:info1,
       lname:info2,
       age:info3,
       dob:info4,
       email:info5,
       phone:info6,  
       blood_rb: info7,
       state_rb: info8,
       zip_rb: info9,
     }),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
     });
     if (response.ok) {
       alert('Patient has been registered successfully!');
       data.reset();
     } else {
       alert('Error registering donor. Please try again.');
     }
   }
   fetchdata();
 }

 //donor register
 const data3 = document.getElementById('form3');
 data3.addEventListener('submit', fetching3);

 function fetching3(e) {
   e.preventDefault();
   const info1 = document.getElementById('fname_dr').value;
   const info2 = document.getElementById('lname_dr').value;
   const info3 = document.getElementById('father_dr').value;
   const info4 = document.getElementById('phone_dr').value;
   const info5 = document.getElementById('age_dr').value;
   const info6 = document.getElementById('dob_dr').value;
   const info7 = document.getElementById('gender_dr').value;
   const info8 = document.getElementById('email_dr').value;
   const info9 = document.getElementById('blood_dr').value;
   const info10 = document.getElementById('state_dr').value;
   const info11 = document.getElementById('inputZip3').value;

   console.log(info1, info2, info3, info7, info8, info9);

   if (info3 < 18 && info3 >65 ) {
     alert("Not eligible to Donate")
   } else {

   async function fetchdata() {
     const url = 'http://localhost:3000/donorregister'
     const response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify({
         fname_dr: info1,
         lname_dr: info2,
         father_dr: info3,
         phone_dr: info4,
         age_dr: info5,
         dob_dr: info6,
         gender_dr: info7,
         email_dr: info8,
         blood_dr: info9,
         state_dr: info10,
         zip_dr: info11,
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     });

     if (response.ok) {
       alert('Donor has been registered successfully!');
       data.reset();
     } else {
       alert('Error registering donor. Please try again.');
     }
   }
   }
   fetchdata();
 }

// donation drive
const data4 = document.getElementById('form4');
data4.addEventListener('submit',fetching4);

function fetching4(e){
e.preventDefault();
const info1=document.getElementById('state_dd').value;
const info2=document.getElementById('dod_dd').value;
const info3=document.getElementById('category_dd').value;

console.log(info1,info2,info3);

async function fetchdata(){
 const url = 'http://localhost:3000/donationdrive'
     const response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify({
         state_dd: info1,
         category_dd: info3,
         dod_dd: info2,
       }),
 headers: {
   "Content-type": "application/json; charset=UTF-8"
 }
 });
 
 const output= document.getElementById('empty2');
     const responseData = await response.json();
     let html = "";
     if ( responseData.message === "success") {
       responseData.Response.forEach(({ bbname, state,category, contact, dod, address,pincode  }) => {
         html += `
         <div class="col">
                 <div class="card h-100" style="max-width: 800px;">
                     <div class="row g-0">
                          <div class="col-md-4 ps-3 d-flex justify-content-center align-items-center">
                             <img src="/5979793.png" class="img-fluid cardimg" alt="...">
                          </div>
                         <div class="col">
                             <div class="card-body">
                                 <h5 class="card-title"> ${bbname} </h5>
                                 <p class="card-text">State : ${state} <br>
                                     Number : ${contact} <br>
                                     Date of donation : ${dod} <br>
                                     Category : ${category} <br>
                                     Address : ${address} - ${pincode} 
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         `;
       });
       output.innerHTML = html;
       data.reset();
     } else {
       html = `
           <div class="alert alert-info" role="alert">
             ${responseData.Response ? responseData.Response : responseData.message}
           </div>
       `;
       output.innerHTML = html;
     }
}
fetchdata();
}

 //donate to patient
 const data5 = document.getElementById('form5');
 console.log(form5);

 data5.addEventListener('submit', fetching5);

 function fetching5(e) {
   e.preventDefault();
   const info1 = document.getElementById('state_dp').value;
   const info2 = document.getElementById('blood_dp').value;
   const info3 = document.getElementById('inputZip5').value;

   console.log(info1, info2, info3);

   async function fetchdata() {
     const url = 'http://localhost:3000/donatepatient'
     const response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify({
         state: info1,
         blood: info2,
         zip: info3,
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     });

     const output= document.getElementById('empty3');
     const responseData = await response.json();
     let html = "";
     if ( responseData.message === "success") {
       responseData.Response.forEach(({first_name, last_name, phone, age, blood}) => {
         html += `
             <div class="col">
                 <div class="card h-100" style="max-width: 800px;">
                     <div class="row g-0">
                         <div class="col-md-4 ps-3 d-flex justify-content-center align-items-center">
                             <img src="/Sample_User_Icon.png" class="img-fluid cardimg" alt="...">
                         </div>
                         <div class="col-md-8">
                             <div class="card-body">
                                 <h5 class="card-title">Blood Group : ${blood} </h5>
                                 <p class="card-text">Name : ${first_name} ${last_name} <br>
                                     Number : ${phone} <br>
                                     Age : ${age} <br>
                         
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         `;
       });
       output.innerHTML = html;
       data.reset();
     } else {
       html = `
           <div class="alert alert-info" role="alert">
             ${responseData.Response ? responseData.Response : responseData.message}
           </div>
       `;
       output.innerHTML = html;
     }


   }
   fetchdata();
 }

  // // Scroll-up Js
  $(window).scroll(function () {
    var sc = $('#arrow'),
    scroll = $(window).scrollTop();
    if (scroll >= 120) sc.css("display", "block");
    else sc.css("display", "none");
});
$("#arrow").click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
$(window).scroll(function () {
    var sticky = $('header'),
    scroll = $(window).scrollTop();
    if (scroll >= 120) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
// Scroll-up Js
