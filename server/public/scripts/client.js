let operator = '';

console.log('client.js is sourced!');
function onReady(){
axios({
    method: "GET",
    url: "/calculations"
})
.then(function(response){
    console.log("response from get is", response);
    let calculationsFromServer = response.data
    let resultContent = document.querySelector("#results");
    let newResultContent = document.querySelector('#Newresults');
    for(let result of calculationsFromServer){
        resultContent.innerHTML +=
        `<div id="table">
            <h4>${result.numOne} ${result.operator} ${result.numTwo} = ${result.result}</h4>

        </div>
        `;


        // for(let result of calculationsFromServer){
            newResultContent.innerHTML =
            `<div>
                <h2> ${calculationsFromServer[calculationsFromServer.length - 1].result}</h2>
    
            </div>
            `;
        // }
    }
}).catch(function(error){
    console.log(error);
})

// let newResults = document.querySelector("#Newresults");
// newResults.innerHTML = response.data[]
}


function setOpperator(event){
    event.preventDefault(event);
    console.log('what was clicked:', event.target);
    console.log('the opperator?:', event.target.textContent);
    operator = event.target.textContent;
}
console.log("whabt")


function standard(event){
    event.preventDefault();
    console.log("what");
let firstNumber = document.querySelector('#NumberOne').value;
let secondNumber = document.querySelector('#NumberTwo').value;

let newCalculations = {
    numOne:firstNumber, 
    numTwo: secondNumber, 
    operator: operator
} ;

axios.post("/calculations", newCalculations )
.then(response => {
    console.log('post works', response)
    axios({
        method: "GET",
        url: "/calculations"
    })
    .then(function(response){
        console.log("response from get is", response);
        let calculationsFromServer = response.data
        let resultContent = document.querySelector("#results");
        let newResultContent = document.querySelector('#Newresults');
        resultContent.innerHTML = " "
        for(let result of calculationsFromServer){
            resultContent.innerHTML +=
            `<div id="table">
                <h4>${result.numOne} ${result.operator} ${result.numTwo} = ${result.result}</h4>
    
            </div>
            `;
    
    
            // for(let result of calculationsFromServer){
                newResultContent.innerHTML =
                `<div>
                    <h2> ${calculationsFromServer[calculationsFromServer.length - 1].result}</h2>
        
                </div>
                `;
            // }
        }
    }).catch(function(error){
        console.log(error);
    })
}) .catch (error => {
    console.log('post failed');
    response.sendStatus(200);
})

// onReady()

}
function erase(event){    
    event.preventDefault();
console.log("in earse function");
document.querySelector('#NumberOne').value = "";
document.querySelector('#NumberTwo').value = "";

}
onReady()


