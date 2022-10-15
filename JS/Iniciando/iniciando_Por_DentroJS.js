

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


getObject();

 //getTypeName();

 // Arrays  ----- Cont...  hoji nada...

