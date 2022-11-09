var m1 = { name: "Kilimanjaro", height: 19341 };
var m2 = { name: "Everest", height: 29029 };
var m3 = { name: "Denali", height: 20310 };
var mountains = [m1, m2, m3];
//mountains = [m1, m2, m3];
function FindNameOfTallestMountain(mounts) {
    var m = mounts.find(function (m) { return m.height === Math.max.apply(Math, mounts.map(function (m) { return m.height; })); });
    return m.name;
}
var tallestMountain = FindNameOfTallestMountain(mountains);
console.log("The tallest mountain is: ".concat(tallestMountain, "."));
