class Personnage {
    constructor(age,nom,ville){
        this.nom = nom,
        this.age=age,
        this.ville=ville
        this.presentation = () =>{
            return console.log(`Bonjour, je m'appelle ${this.nom}!`);
        }
    }
}

let perso1 = new Personnage (29,"Andy","Bruxelles") ;
let perso2 = new Personnage(65,"Antoine","Aneho");

//console.log(perso2);

//Exo2 //creation de presentation

perso1.presentation(); //Appel la methode presentation qui se trouve dans l'objet 1 car il a été déclaré dans le constructeur de Personnage (On le fait seulement en dehors des paramètres())
perso2.presentation();