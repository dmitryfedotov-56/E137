const response = `[
  {"name":"width", "value":"20"},
  {"name":"height", "value":"10"}
]`;

const result =JSON.parse(response);

console.log(result);

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
};

console.log(displayResult(result));

const resultNode = document.querySelector('.result');

resultNode.innerHTML = displayResult(result);

