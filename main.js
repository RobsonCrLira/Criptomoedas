var apikey = {
    key: '80d7fcb6-bb0d-466d-82a2-875f2681d461'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {

        var text = "";
        for (let i = 0; i < 10; i++) {

            text = text + `
                  
                    <div class="media">
                        <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                        <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        </div>
                    </div>
               
                    `;

            document.getElementById("coins").innerHTML = text;

        }
    })
    .catch((error) => {
        console.error(error.message);
    });