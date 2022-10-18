

function getTypeName(){
    var a;
    typeof a;
    console.log("type A: " + typeof a);

    b = "Hello World";
    typeof b;
    console.log("type b: " + typeof b);

    c = 42;
    typeof c;
    console.log("type c: " + typeof c);

    d = true;
    typeof d;
    console.log("type d: " + typeof d);

    e = null;
    typeof e;
    console.log("type e: " + typeof e);

    f = undefined;
    typeof f;
    console.log("type f: " + typeof f);

    g = {b: "b", c: "c", d: "d", e: "e", f: "f", g: "g"};
    typeof g;
    console.log("type g: " + typeof g);

    h = 'abc';
    typeof h;
    console.log("type h: " + typeof h);
    
}


function getObject(){
    var obj = {
        a: "hello world",
        b: 42,
        c: false
    };
     
    obj.a;
    console.log("a: " + obj.a);
    obj.b;
    console.log("b: " + obj.b);
    obj.c;
    console.log("c: " + obj.c);
   
    console.log("");
    console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
    obj["a"];
    console.log("a: " + obj["a"]);
    obj["b"];
    console.log("b: " + obj["b"]);
    obj["c"];
    console.log("c: " + obj["c"]);

    console.log("");
    console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
    // -----------------------------------------

    var obj01 = {
        a: "Hello People !!!",
        b: 42,
        c: "b"
    };

    var b = "c";

    console.log("b: " + obj01[b]);

    obj[b];
    console.log("obj01[b]: " + obj01[b]);

    obj01["b"];
    console.log("obj01['b'] " + obj01["b"]);
}


function arrayExemple(){
    var arr = [
        "hello world",
        42,
        false,
        "tr"
    ];

    arr[0];
    console.log(" " + arr[0]);
    arr[1];
    console.log(" " + arr[1]);
    arr[2];
    console.log(" " + arr[2]);

    typeof arr;
    console.log("»»» " + typeof arr);

}

function tipoNativo(){
    function foo(){
        return 42;
    }

    foo.bar = "Hello world!";

    console.log("foo:::: " + typeof foo);
    console.log("foo_funtion:::: " + typeof foo());
    console.log("foo.bar:::: " + typeof foo.bar);
    console.log(" " );
    console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
    console.log("foo.br___ " +  foo.bar);
    console.log("foo___ " + foo);
    console.log("foo_function__ " + foo());


    var a = "hello world!";
    var b = 3.14159;

    console.log(" " + a.length);
    console.log(" " + a.toUpperCase());
    console.log(" " + b.toFixed(4));


}

function coercao() {   
    var a = "42";
    var b = Number(a);
    
    console.log("a:::: " + a);
    console.log("b:::: " + b);


    var c = "4233";
    var d = c * 1;
    
    console.log("c:::: " + c);
    console.log("d:::: " + d);
}

function igualdade() {
    var a = "42";
    var b = 42;


    console.log( a == b);
    console.log( a === b);
}

igualdade();

 //getTypeName();  getObject();  arrayExemple(); 

 // Igualdade  ----- 

