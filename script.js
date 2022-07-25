let btnPrideti = document.querySelector('#Add');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let lastnameInput = document.querySelector('#lastname');
let ageInput = document.querySelector('#age');

btnPrideti.addEventListener('click', () => 
    {
        if (document.getElementById("name").value.trim() == "") {
            alert("Iveskite varda");
            return false;
        }
    
        if (document.getElementById("lastname").value.trim() == "") {
            alert("Iveskite pavarde");
            return false;
        }
    
        if (document.getElementById("age").value.trim() == "") {
            alert("Iveskite amziu");
            return false;
        }

        let name = nameInput.value;
        let lastname = lastnameInput.value;
        let age = ageInput.value;

        if (document.getElementById("age").value.trim() <= 0 || isNaN(age)) {
        alert("Iveskite teisinga amziu")
        return false;
    }

        let template = 
            `
            <tr>
            <td>${name}</td>
            <td>${lastname}</td>
            <td>${age}</td>
            </tr>
            `;

        table.innerHTML += template;

        const inputs = document.querySelectorAll('#name, #lastname, #age');

        inputs.forEach(input => {
        input.value = '';
    });
    
    }
)

function DeleteFirst() {
    document.getElementById("myTable").deleteRow(1);
}

var DeleteLast = document.getElementById('DeleteLast');

DeleteLast.addEventListener("click", function(){
    var tr = document.getElementsByTagName('tr');
    console.log(tr.length);
    if(tr.length > 1){
      var removeTr = document.getElementsByTagName('tr')[tr.length - 1];
      removeTr.remove();
    } else {
      alert("Nebera ka trinti");
    }
});