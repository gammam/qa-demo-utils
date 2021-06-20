// My module
var fakerator = require("fakerator");
var codiceFiscaleUtils = require ("@marketto/codice-fiscale-utils")
var Parser = codiceFiscaleUtils.Parser;
var it_fakerator = fakerator("it-IT");

function fakePayment() {
    

   //  CodiceFiscale/P.IVA;Tipo Pagatore;Nome;Cognome;Indirizzo;Civico;Localita;Provincia;CAP;Nazione;Email;Telefono;ID Tenant;Importo;Causale

    // const tSubject= it_fakerator.random.arrayElement(['F','G'])

    const tSubject = 'F'
    this.tSubject = tSubject;

    if (tSubject == 'F'){
        // persona fisica
        const my_gender = it_fakerator.random.arrayElement(['M', 'F'])
        const my_user = it_fakerator.entity.user(my_gender);
        const my_place = it_fakerator.random.arrayElement(['Roma', 'Napoli','Milano','Salerno','Agropoli'])
        this.nome = my_user.firstName;
        this.cognome = my_user.lastName;
        this.dob =  my_user.dob
        this.cf = Parser.encodeCf({
            date: new Date(my_user.dob),
            lastName : my_user.firstName,
            firstName: my_user.lastName,
            gender: it_fakerator.random.arrayElement(['M', 'F']),
            place : my_place
        })
        this.indirizzo = my_user.address.street;
        this.civico =it_fakerator.random.number(1,99999);
        this.localita = my_place
        this.provincia = 'RM'
        this.cap = my_user.address.zip
        this.nazione = my_user.address.country
        this.email = my_user.email
        this.telefono = my_user.phone
        this.idTenant = ''
        this.importo = it_fakerator.random.number(1,9999).toFixed(2) / 100 
        this.causale = it_fakerator.lorem.sentence()
  }
}
  

  
  module.exports = fakePayment;