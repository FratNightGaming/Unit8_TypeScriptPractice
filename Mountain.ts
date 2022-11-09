interface Mountain
{
    name: string;
    height: number;
}

var m1 : Mountain = {name: "Kilimanjaro", height: 19341}
var m2 : Mountain = {name: "Everest", height: 29029}
var m3 : Mountain = {name: "Denali", height: 20310}

var mountains : Mountain [] = [m1, m2, m3];
//mountains = [m1, m2, m3];

function FindNameOfTallestMountain(mounts : Mountain[]) : string
{
    let m : Mountain = mounts.find(m => m.height === Math.max(...mounts.map(m=>m.height)))!;
    return m.name;
}

var tallestMountain : string = FindNameOfTallestMountain(mountains);
console.log(`The tallest mountain is: ${tallestMountain}.`);
