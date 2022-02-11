class UserController {

    constructor(formId, tableId) {
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    addLine(dataUsers) {
        console.log(dataUsers);
    
        var tr = document.createElement('tr');
    
        tr.innerHTML = `
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUsers.name}</td>
            <td>${dataUsers.email}</td>
            <td>${dataUsers.admin}</td>
            <td>${dataUsers.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        `
        this.tableEl.appendChild(tr);
    }; //fechamento do método addLine

    onSubmit(){
        this.formEl.addEventListener("submit", (e) => {
            e.preventDefault();
                
           this.addLine(this.getValues());
        }); //fechamento do addEventListener de Submit       
    } //fechamento do método onSubmit

    getValues() {
        let user = {};
        // .forEach é um método para array e não pode ser usado para objeto

        this.formEl.elements.forEach(
            (field, index) => {

                if (field.name == "gender") {
                    if (field.checked) {
                        user[field.name] = field.value;
                    } //fechamento do if (está checkado?)
                } else {
                    user[field.name] = field.value;
                } // fechamento do else → não está checkado
            }// fechamento da arrow function
        )// fechamento do forEach */

        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        ); //fechamento do objeto instanciado
    }; //fechamento do método getValues

}; //fechamento da classe userController