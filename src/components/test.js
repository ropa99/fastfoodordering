function showCards(cardId,adId){
    console.log("showCards -- Start:" + cardId + " : " +adId);
    //if(!document.getElementById("dynamicCard")){
         const card = document.createElement("card");
         card.id = "dynamicCard";
         card.classList.add("card","card-striped");

        <div class="card mb-4 col-md-4">
        <img class="card-img-top" src="https://via.placeholder.com/150" alt="Ad 1">
        <div class="card-body">
          <h5 class="card-title">Ad 1</h5>
          <p class="card-text">This is the first advertisement.</p>
          <p class="card-text" onclick="alert('Contact: contact1@example.com')">Contact: ***</p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-info btn-block" onclick="alert('Contact: contact1@example.com')">Details</button>
        </div>
      </div>



    //

data.forEach(res => {
        let card = document.createElement("div");

        let name = document.createTextNode('Name:' + res.name + ', ');
        card.appendChild(name);

        let description = document.createTextNode('Description:' + res.description + ', ');
        card.appendChild(description);

        let date = document.createTextNode('date:' + res.date);
        card.appendChild(date);

        let container = document.querySelector("#container");
        container.appendChild(card);
    });