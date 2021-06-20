"use strict";
exports.__esModule = true;
var fakerator = require("fakerator");
const fs = require('fs');
const { parseAsync } = require('json2csv');
var fakePayment = require("./fakePayment")
var it_fakerator = fakerator("it-IT");


async function addFakePayment(array){
    array.push(new fakePayment())
}

const rows = 5
console.log("rows number : ",rows);

var  resultArray = []
var promises = []
for (var i = 0; i < rows; i++) {
    promises.push(addFakePayment(resultArray))
  }
 Promise.all(promises).then(
            () =>{
 //  CodiceFiscale/P.IVA;Tipo Pagatore;Nome;Cognome;Indirizzo;Civico;Localita;Provincia;CAP;Nazione;Email;Telefono;ID Tenant;Importo;Causale
                const fields =[
                    {label: 'CodiceFiscale/P.IVA',
                    value: 'cf'},
                    {label: 'Tipo Pagatore',
                    value: 'tSubject'},
                    {label: 'Nome',
                    value: 'nome'},
                    {label: 'Cognome',
                    value: 'cognome'},
                    {label: 'Indirizzo',
                    value: 'indirizzo'},
                    {label: 'Civico',
                    value: 'civico'},
                    {label: 'Localita',
                    value: 'localita'},
                    {label: 'Provincia',
                    value: 'provincia'},
                    {label: 'CAP',
                    value: 'cap'},
                    {label: 'Nazione',
                    value: 'nazione'},
                    {label: 'Email',
                    value: 'email'},
                    {label: 'Telefono',
                    value: 'telefono'},
                    {label: 'ID Tenat',
                    value: 'idTenant'},
                    {label: 'Importo',
                    value: 'importo'},
                    {label: 'Causale',
                    value: 'causale'},
                ]
                const opts = { fields };
                parseAsync(resultArray, opts)
                .then(csv => {
                    fs.writeFileSync("output.csv", csv);
                })
                .catch(err => console.error(err));
            }
        )

