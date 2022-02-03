var fields = document.querySelectorAll(".form-group [name]");
var users = {};

function addLine(dataUsers) {
    var tr = document.createElement('tr');

    tr.innerHTML = `
    <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUsers.name}</td>
        <td>${dataUsers.email}</td>
        <td>Sim</td>
        <td>${dataUsers.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>
    `
    document.querySelector("#usersTable").appendChild(tr);
};

document.querySelector("#form-user-create").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Clicou! Meninas Pshhhhhh hahahahahahahaha');
    
    fields.forEach((field, index) => {
        // console.log(field.name, field.id, index);
        
        if (field.name == "gender") {
            if (field.checked) {
                users[field.name] = field.value;
            }
        } else {
            users[field.name] = field.value;
        }
    });
    console.log(users);
    
    addLine(users);
});
