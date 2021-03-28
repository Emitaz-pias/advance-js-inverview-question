const students = [
    {id:3, name:"mr.chinku"},
    {id:4, name:"mr.pinku"},
    {id:5, name:"mr.minku"},
    {id:6, name:"mr.tinku"}
]

const names = students.map(x=>x.name)
console.log(names);
const seniors = students.filter(x=>x.id>3)
console.log(seniors);
const seniorOne = students.find(x=>x.id>4)
// ie. find gives only the first matching element

console.log(seniorOne);