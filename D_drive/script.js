// donation drive
const data4 = document.getElementById('form4');
data4.addEventListener('submit', fetching4);

function fetching4(e) {
  e.preventDefault();
  const info1 = document.getElementById('state_dd').value;
  const info2 = document.getElementById('category_dd').value;
  const info3 = document.getElementById('dod_dd').value;

  console.log(info1, info2, info3);

  async function fetchdata() {
    const url = 'http://localhost:3000/donationdrive'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        state_dd: info1,
        category_dd: info2,
        dod_dd: info3,
      
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    const output= document.getElementById('empty');
    const responseData = await response.json();
    let html = "";

    if ( responseData.message === "success") {
      responseData.Response.forEach(({ bbname, state,category, contact, dod, address,pincode }) => {
        html += `
            <div class="col">
                <div class="card h-100" style="max-width: 800px;">
                    <div class="row g-0">
                        <div class="col-md-4 ps-3 d-flex justify-content-center align-items-center">
                            <img src="/Check_Donor/user.png" class="img-fluid cardimg" alt="...">
                        </div>
                        <div class="col-md-8">
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