function locationupdaten() {
    navigator.geolocation.getCurrentPosition(
        function (pos) {
            let card = document.getElementById("locationcard");
            card.innerText = "lat = " + pos.coords.latitude +
                "long = " + pos.coords.longitude;
        }
        ,
        function (err) {
            alert("Unable to retrieve position: " + err)
        }
    );
}

function callNumber(number) {
    if (!number)
        number = "+4962141050"
    if (window.usingCordova && window.plugins.CallNumber) {
        window.plugins.CallNumber.callNumber((result) => {
            console.log("Number dialed")
        }, (result) => {
            alert("Unable to call number" + result)
        }, number, true);
    }
}


function bodyGeladen() { //die funktion wird aufgerufen, sobald alles einmal geladen hat, d.h. bis unten in der Funktion und es wird abgefragt, ob wir uns gerade in der Nativen App befinden oder im Browser
    if (!window.usingCordova) {
        initApp();
    }
}

function initApp() {
    console.log("Starting framework7 app...")
    var app = new Framework7({
        root: '#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: {
            swipe: 'left',
        }
    });

    if (window.usingCordova) { //schaut, ob es ein Broswer ist oder ob es Cordova ist
        console.log("In der nativen Anwendung")
    } else { //Browser
        console.log("Im Browser")
    }


}

document.addEventListener('deviceready', initApp, false);

