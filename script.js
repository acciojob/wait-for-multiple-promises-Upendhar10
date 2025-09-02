//your JS code here. If required.

function Main(){
	// output targets tbody
	let output = document.getElementById('output');
	output.innerText = "Loading..."

	let start = Date.now();
	
	Promise.all([
		randomPromise("Promise1"),
		randomPromise("Promise2"),
		randomPromise("Promise3"),
	])
	.then((values) => {
		let TotalTime = (Date.now() - start)/1000;
		ResolveAllPromises(values, TotalTime);
	})
	.catch((err) => console.log(err))
}

function randomPromise(name){
	return new Promise((resolve) => {
		let delay = Math.floor(Math.random() * 2000) + 1000;
		setTimeout(function(){
			resolve({name, delay})
		}, delay)
	})
}

function ResolveAllPromises(values, TotalTime){
	let output = document.getElementById("output");
	output.innerText = "";
	
	values.forEach((val) => {
		let row = document.createElement('tr');
		row.innerHTML = `
			<td>${val.name}</td>
			<td>${Math.floor(val.delay / 1000)}</td>
		`
		output.append(row);
	})
	
	let totalRow = document.createElement('tr');
	totalRow.innerHTML = `
		<td><b>Total</b></td>
	    <td>${TotalTime.toFixed(3)}</td>
	`
	output.appendChild(totalRow)
}

Main();

