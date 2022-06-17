function displayResult(data){
	let lines ='';
	data.forEach(item => {
		const line = `
		  <tr>
			<td width="15%">
			  ${item.name}
			</td>
			<td width="20%">
			  ${item.value}
			</td>
		  </tr>`;
		lines = lines + line;
	});
	return lines;
}

const options = {
  method: 'GET', 
  // mode: 'no-cors', 
  headers: { 
    'Content-Type': 'application/json'
  }
}

fetch('http://127.0.0.1:3000/parameters/', options)
  .then((response) => { 
  console.log('ответ');
  console.log(response);
  return response.json(); })
  .then((data) => { 
	console.log(data); 
	const resultNode = document.querySelector('.result');
	resultNode.innerHTML = displayResult(data);
	})
  .catch((error) => { 
  console.log("error");
  console.log(error);});


  