var obj1 = {
    name: 'Sirisha',
    course: 'Web Developement',
    profession: 'Engineer',
    address: 'Hyderbad',
    edu: 'MS',
};

var studentDetails = {
    data: [
        {
            name: 'Scott',
            course: 'CSS',
            profession: 'Engineer',
            address: 'Kulcutta',
            edu: 'MS',
        },
        {
            name: 'Carry',
            course: 'JQuery',
            profession: 'Engineer',
            address: 'Delhi',
            edu: 'MS',
        },
        {
            name: 'Smith',
            course: 'HTML',
            profession: 'Engineer',
            address: 'Hyderbad',
            edu: 'MS',
        },
        {
            name: 'Joe',
            course: 'JavaScript',
            profession: 'Engineer',
            address: 'Lucknow',
            edu: 'MS',
        },
        {
            name: 'Jkab',
            course: 'Angular',
            profession: 'Engineer',
            address: 'Bengaluru',
            edu: 'MS',
        }
    ]
};

var tableHeader = ['Name', 'Course', 'Profession', 'Address', 'Education'];

var tableContainer = document.getElementById('tableContainer');
var tableBody = document.getElementById('tableBody');
/* var table = document.createElement('table');
var headTr = document.createElement('tr'); */

// table.setAttribute('id', 'gridList');
// table.classList.add('student-details');
/* table.id = 'gridList';
table.className = 'student-details';
headTr.id='headTr';
tableContainer.appendChild(table); */
/* console.log('name:', obj1.name);
console.log('course:', obj1.course);
console.log('profession:', obj1.profession);
console.log('address:', obj1.address);
console.log('edu:', obj1.edu); */

//forin loop
/* for(let key in obj1){
    console.log(key +': ', obj1[key]);
} */

let tableRow = '';
let card = '';
studentDetails.data.map((items)=>{
    tableRow = tableRow + `<tr>
      <td>${items.name}</td>
      <td>${items.course}</td>
      <td>${items.profession}</td>
      <td>${items.address}</td>
      <td>${items.edu}</td>
    </tr>`;
    card = card + `<div>
      <p>Name: ${items.name}</p>
      <p>Course: ${items.course}</p>
      <p>Profession: ${items.profession}</p>
      <p>Address: ${items.address}</p>
      <p>Education: ${items.edu}</p>
    <div>`;
});
console.log('tableRow', tableRow);
document.getElementById('cardContiner').innerHTML = card;
tableBody.innerHTML = tableRow;

/* let hearEle='';
tableHeader.map(header=>{
    hearEle+=`<th>${hearEle}</th>`;
});

table.appendChild(headTr);
headTr.append(hearEle); */