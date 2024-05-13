const data=document.getElementById('contform');
data.addEventListener('submit' , fetching);

function fetching(e){
  e.preventDefault();
  const info1=document.getElementById('fname').value;
  const info2=document.getElementById('lname').value;
  const info3=document.getElementById('email').value;
  const info4=document.getElementById('contact').value;
  const info5=document.getElementById('textarea').value;

  console.log(info1,info2,info3,info4,info5);

  async function fetchdata(){
    const url="http://localhost:3000/contactdata"
    const response = await fetch(url,{
      method:'POST',
      body:JSON.stringify({
        fname_con:info1,
        lname_con:info2,
        email_con:info3,
        contact_con:info4,
        message_con:info5,
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if(response.ok) {
      alert('Thank you for contacting us!');
    data.reset();
    } else {
      alert('Error. Please try again.');
    }
  }
  fetchdata();
}