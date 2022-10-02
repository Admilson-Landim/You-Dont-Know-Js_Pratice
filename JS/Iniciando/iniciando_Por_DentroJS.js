

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
    
}


getTypeName();

