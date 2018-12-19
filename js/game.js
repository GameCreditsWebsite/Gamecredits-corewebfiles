var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("game").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="images/game.png" > </th>
                <td>Value : $ ${currency.price_usd.slice(0, 4)}</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request


var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("supply").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="https://png.pngtree.com/svg/20170922/supply_chain_1390609.png"> </th>
                <td>Available Supply : ${currency.available_supply.slice(0, 8)}</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request


var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("price").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="https://png.pngtree.com/svg/20170707/crown_2__309563.png"> </th>
                <td>${'Cryptocurrency Ranking : ' + currency.rank}</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request

var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("marketcap").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Stocks-icon.png"> </th>
                <td>Market Cap : ${currency.market_cap_usd} $</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request

var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("percent_change_24h").innerHTML =`
               	<th class="tableimg"><img height="50px" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/24_Horas_TVN_corto.png"> </th>
				<td>Percent change 24h : ${currency.percent_change_24h} %</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request

var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("gameleft").innerHTML =`
               	<th class="tableimg"><img height="50px" width="50px" src="https://data.gov.in/sites/default/files/Mining_6.png"> </th>
                <td>Supply Left : ${84000000 - currency.available_supply}</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request