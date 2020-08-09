
const createCards = (htmldata, teamarrey) => {
    htmldata.push(`<!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>My team</title>
       <link rel="stylesheet" href="./style.css">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
   </head>
   <header>
       <h1 id="headerTitle">My team</h1>
   </header>
   
   <body>
       <section class="section">
           <div id="cardContainer" class="container">`);
    for (let i = 0; i < teamarrey.length; i++) {
        htmldata.push(`<div id="theCard" class="card mb-6 mr-5">
            <header id="cardTop" class="card-header">
            <div id="titlesBlock">
                    <h2 id="topTitle" class="card-header-title">${teamarrey[i].getName()}</h2>
                    <h4 id="bottomTitle" class="card-header-title">${teamarrey[i].getRole()}</h4>
                    </div>
            </header>
            <div id="cardBody" class="card-body">

                <div id="idBox">
                    ID: ${teamarrey[i].getId()}
                </div>
                <div class="info-line">
                    Email: <a href="mailto:${teamarrey[i].getEmail()}">${teamarrey[i].email}</a>
                </div>
                <div class="info-line"> 
                ${teamarrey[i].getOptional()}
                </div>

            </div>
        </div>`);
    }

    htmldata.push(`</div>
            </section>
        </body>
        
        </html>`
    );


};

module.exports = createCards;
