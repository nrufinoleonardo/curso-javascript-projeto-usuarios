class UserController {

    constructor(formId, tableId) {
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    addLine(dataUser) {
        console.log(dataUser);
    
        var tr = document.createElement('tr');
    
        tr.innerHTML = `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
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
            
            let values = this.getValues(); //obtendo todos os valores e armazenando em values
            
            this.getPhoto((content) => {
                values.photo = content;
                this.addLine(values);
            } /** fechamento da função passada como parâmetro */);

        }); //fechamento do addEventListener de Submit       
    } //fechamento do método onSubmit

    getPhoto(callback){
        
        let fileReader = new FileReader();//instanciando o FileReader

        let elements = [...this.formEl.elements].filter((item)=>{
            //filtrando o array de ítens do formulario e guardando em uma variável

            if(item.name === "photo"){
                return item;
            } //verificando se o nome do atributo é photo e retornando caso positivo;

        }/** fechamento do filter */);

        
        let file = elements[0].files[0]; //obtendo o primeiro ítem da lista e o primeiro elemento, pois só é permitida uma foto de perfil

        
        fileReader.onload = ()=>{
            //esperando o arquivo "carregar"
            callback(fileReader.result);
        }//fechamento da função de callback (função de retorno)

        fileReader.readAsDataURL(file);
    }

    getValues() {
        let user = {};
        // .forEach é um método para array e não pode ser usado para objeto
        // transformando o this.formEl.elements em um array com o spread '...'
        [...this.formEl.elements].forEach(
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