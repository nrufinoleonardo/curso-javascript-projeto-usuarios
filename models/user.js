class User {

    constructor (_name, _gender, _birth, _country, _email, _password, _photo, _admin) {
        this.name = _name;
        this.gender = _gender;
        this.birth = _birth;
        this.country = _country;
        this.email = _email;
        this.password = _password;
        this.photo = _photo;
        this.admin = _admin
        
        /**
         * this - se refere ao objeto que instanciará a classe
         * .name - se refere ao atributo desse novo objeto
         * _name - se refere ao parâmetro passado no constructor
         */
    }
}