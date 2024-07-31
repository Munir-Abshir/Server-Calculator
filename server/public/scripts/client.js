let opperator = '';

console.log('client.js is sourced!');
function onReady(){
axios({
    method: "GET",
    url: "/calculations"
})
.then(function(response){
    console.log(response)
    let calculationsFromServer = response.data
    let resultContent = document.querySelector("#results");
    for(let result of calculationsFromServer){
        resultContent.innerHTML +=
        `<tr>
            <td>${result.numOne} </td>
            <td>${result.numTwo} </td>
            <td>${result.operator} </td>
            <td>${result.result} </td>
        
        `;
    }
}).catch(function(error){
    console.log(error);
})

// let newResults = document.querySelector("#Newresults");
// newResults.innerHTML = response.data[]
}


function setOpperator(event){
    event.preventDefault();
    console.log('what was clicked:', event.target);
    console.log('the opperator?:', event.target.textContent);
    opperator = event.target.textContent;
}
console.log("what")

function standard(event){
let firstNumber = document.querySelector('#NumberOne').value;
let secondNumber = document.querySelector('#NumberTwo').value;
axios.post("/calculations", {firstNumber, secondNumber, opperator} )
.then(response => {
    console.log('post works', response)
}) .catch (error => {
    console.log('post failed');
})


console.log("my numbers are:" ,firstNumber + secondNumber)



}