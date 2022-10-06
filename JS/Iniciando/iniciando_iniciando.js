
// Iniciando Pratica: You Dont Know JS /*  */

const TAX_RATE = 0.08;


function antesFuncção() {
     
    a = "21";
    b  = a + 3;
    c = Number(a);

    console.log(b);

     alert(b);

    var  age = prompt("Please tell your age: ");  // solicitar um entrada na tela

    console.log(age);

    var ten_years = parseInt(age) + 10;

    console.log("In ten years you've ", ten_years, " years old !!!");

    console.log("In ten years you've ", Number(age) + 9, " years old !!!");  // Converter age em numero


    console.log(a);
    console.log(c);


    const TAX_RATE = 2; 
    const ACCESSORY_PRICE = 9.99;

    var amount = 99.99;
    var bank_balance = 302.13;

    if(amount < bank_balance) {
        console.log("Vou levar este celular...");
        amount = amount + ACCESSORY_PRICE;
        console.log(amount);

    }else {
        console.log("Não, obrigado !!!"); 
    }

    
}


function testeWhile(){
    var i = 0;

    while (true){
        if( (i <= 9) === false) { 
            break;
        }

        console.log(i);
        i += 1;
    }

}

function printAmount(amt){
    console.log(amt.toFixed(2));
}

function formatAmount(){
    return "$" + amount.toFixed(2);
}

function calculateFinalPurchaseAmount(amt){
    // calculando o novo amount adicionando taxa

    amt = amt + (amt * TAX_RATE);

    // retorne o novo amount 
    return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

//console.log(amount);


function outer(){
    var a = 1;

    function inner(){
        var b = 2;

        console.log(a+b);
    }

    inner();

    console.log(a);
    
}



function praticeExercice(){

    // compra movel e acessorios enquanto teni cash, 

    const taxa_imposto = 0.01;
    const preco_telemove = 10;
    const preco_acessorio = 2;
    const limite_gasto = 10;
    var saldo_banco = 80;
    var phones = 0;
    var acessorios = 0;
    var gasto = 0;

    function calcule_taxa_imposto(){
        var preco_total = preco_telemove + (preco_telemove * taxa_imposto);

        return  preco_total;
    }

    preco_total = calcule_taxa_imposto();
    // console.log(preco_total);


    // validando se saldo da para gastar » se da para comprar telefone e acessorios e não ultrapassar limite de gasto !!!
    while(saldo_banco > limite_gasto && saldo_banco >= limite_gasto - preco_telemove - preco_acessorio){

        if(saldo_banco > preco_total){
            phones += 1;

            saldo_banco = saldo_banco - preco_total;
            gasto =  gasto + preco_total;

            if(saldo_banco > limite_gasto && saldo_banco >= limite_gasto - preco_acessorio){
                acessorios += 1;

                saldo_banco = saldo_banco - preco_acessorio;
                gasto =  gasto + preco_acessorio;
            }
        }

        console.log(saldo_banco + ": Saldo Atual ");
        console.log(gasto  + ": Saldo Gasto ");
        console.log(phones + " Telefone e " + acessorios + " acessorios !!!");
    }



    calcule_taxa_imposto();

}


// praticeExercice();




