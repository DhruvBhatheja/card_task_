



showall.addEventListener('click',function(){
    // alert()
    allEmployees()
})

function allEmployees(){


     var xmlhttp = new XMLHttpRequest();
    
    var url = "http://localhost:3000/db"; 
    xmlhttp.open('GET', url, true); 
    xmlhttp.onload = function(){
    
    
    
    if(this.readyState ==4 && this.status ==200)
    {  allData = JSON.parse(this.responseText); 
    
    } 
    
    datastore="";
    for(single in allData.students){
    //     datastore+=`   <div class="col-3">
    //     <div class="card text-white bg-primary mb-3">
    //       <div class="card-body">
    //         <p><strong>name:</strong>${allData.students[single].name}</p>
    //         <span><strong>budget_name</strong> ${allData.students[single].grade}</span>

    //       </div>
    //     </div>
    //   </div>`

    datastore+=` <div class="col-4 col-lg-4 col-sm-6">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal"> Info</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
       
        </h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>name <span id="cloud_pct">${allData.students[single].name}</span></li>
          <li>budget_name <span id="feels_like">${allData.students[single].budget_name}</span></li>
          <li>expiry <span id="humidity">${allData.students[single].expiry}</span></li>
          <li>currency:  <span id="currency">${allData.students[single].currency}</span></li>
          <li>available_value:  <span id="currency">${allData.students[single].available_spent_value}</span></li>
          <li>Spend_value:  <span id="currency">${allData.students[single].Spend_value}</span></li>
          
          <li><strong> card_type:  <span id="card_type">${allData.students[single].card_type}</strong></span></li>

          
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-primary">
         Details
        </button>
      </div>
    </div>
  </div>`

    //   console.log(allData.data)  
    //   console.log(allData.name)
    }
    alllist.innerHTML=datastore ;
    // console.log(allData.data[single].name)
    console.log(allData)
    
    // dataStore ="";
    // for (single in allData.data ){
    
    // }
}
xmlhttp.send();
}



