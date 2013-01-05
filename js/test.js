
// pixel fire
var $x8 = function () {

    var w = screen.width; // viewport width

    var h = screen.height;  // viewport height

    var r = String(Math.floor(Math.random() * 100)); // cache bust

    var s = "http://458-view.c3tag.com/vtcall.php?iN=" + r;

    var t = "&ca=" + escape("X 1-50 Broad") + "&ci=" + escape("458") + "&uid=" + escape("147965971349254978") + "&nuid=0&sT=5&ad=" + escape("");

    var aI = "&size=" + escape("") + "&campaign=" + escape("") + "&placement=" + escape("") + "&creative=" + escape("") + "&advertiser=" + escape("") + "&adid=" + escape("") + "&w=" + escape(w) + "&h=" + escape(h);

    var u = s + t + aI;

    var $b2 = document.createElement("img");

    $b2.setAttribute("width", "1");

    $b2.setAttribute("height", "1");

    $b2.alt = "";

    $b2.src = u;

    document.body.appendChild($b2) 

}, $x9 = function () {

    var a = $a5.$a1.$a3 + ".*$";

    var b = $a5.$a1.$a4 + "?id=X 1-50 Broad&cid=458&t=72&rv=&uid=&td=&ad=&size=&campaign=&placement=&creative=&advertiser=&adid=&c3px=";

    var c = document.getElementsByTagName("script")[0];

    var e = document.createElement("script");

    e.type = "text/javascript";

    e.async = true;

    e.src = "http://458-view.c3tag.com/" + b;

    var r = new RegExp(a);

    var f = document.getElementsByTagName("script");

    var g = f.length;

    for (var i = $a5.$a1.$a2; i < g; i++) {

        if (r.exec(f[i]["src"])) {

            d = f[i];

            d.parentNode.insertBefore(e, d.nextSibling);

            $a5.$a1.$a2 = i + 1;

            i = g

        }

    }

};

if (window["$z8"]) {

    $z8.push([$x8, $x9])

} else {

    var $z8 = [

        [$x8, $x9]

    ]

}

if (!window.$a5) {

    $a6 = {

        $a1: {

            $a2: 0,

            $a0: new Array(),

            $a3: "v.js",

            $a4: "c3VTabstrct-6-2.php"

        }

    };

    window.$a5 = $a6

}

var $b3 = function () {

    for (var i = 0; i < $z8.length; i++) {

        $z8[i][0]();

        $z8[i][1]()

    }

};

if (!window.onloadSet) {

    onloadSet = true;

    if (window.addEventListener) {

        window.addEventListener("load", $b3)

    } else {

        window.attachEvent("onload", $b3)

    }

};
