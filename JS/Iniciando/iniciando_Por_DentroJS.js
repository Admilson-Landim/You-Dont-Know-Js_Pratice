

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

    console.log("type i: " + typeof "fyy");
    
}

 getTypeName();


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
    var c = "41";
    var d = undefined;
    var e = null;
    var f = "eu hien, JS !!!"
    var g = "";
    var h;
    var i = 0;
    var j = null
    var k = -42;
    var l = true;
    var m = false;
    var n = [1, 2, 3];
    var o = [1, 2, 3];
    var p = "1,2,3";
 

    //console.log( a == b);
    //console.log( a === b);
    //console.log("»»»»»»»»»»»»»»");
    console.log( new String("a") == "a" && "a" == new String("a"));
    console.log( new String("a") == new String("a"));
    console.log( "a" == new String("a"));

    console.log("»»»»»»»»»»»»»»");
    console.log( n == p);
    console.log( o == p);
    console.log( n == o);
    console.log( n[0] == o[0]);
    console.log( p[0] == o[0]);

    
}

 igualdade();


function desIgualdade() {
    var a = "41";
    var b = 42;
    var c = "43";
    var cc = "ab"
    var d = undefined;
    var e = null;
    var f = "eu hien, JS !!!"
    var g = "";
    var h;
    var i = 0;
    var j = null
    var k = -42;
    var l = true;
    var m = false;
    var n = [1, 2, 3];
    var o = [1, 2, 3];
    var p = "1,2,3";
 

    console.log("»»»»»»»»»»»»»»");
    console.log( a < b);
    console.log( a > b);
    console.log( a == b);
    

    
}

//desIgualdade();

 //getTypeName();  getObject();  arrayExemple(); 

 // desIgualdade  ----- 


 function CompilerOnline_00(){
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler

    console.log("******************************************");


    land = [12, ['landim', 10, 'calha'], ['Admilson', 'landim', 'de', 'Pina', ["werty", "STP"], [] ], ['Calheta', 'Praia'] ]

    console.log(land)

    console.log("******************************************");
    console.log(land[0])
    console.log(land[1])
    console.log(land[2])
    console.log(land[3])

    console.log("******************************************");


    console.log(land[2][0])
    console.log(land[2][4])
    console.log(land[2][4][1])

 }


CompilerOnline_00()
