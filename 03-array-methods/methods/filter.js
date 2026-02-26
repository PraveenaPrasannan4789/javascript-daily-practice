//examples

//get even numbers
const numbers=[1,2,3,4,5,6,7,8]
const filteredData = numbers.filter((val)=>{
    return val%2 === 0
})

console.log('filteredData',filteredData)


//get adults
const age=[34,55,12,10,67]
const adults=age.filter((val)=>{
    return val>18;
})
console.log('adults',adults)



//filter objects
const employees =[
    {
        name:'Praveena',
        activeEmployee:true
    },
        {
        name:'Sreelal',
        activeEmployee:true
    },
    {
        name:'Anju',
        activeEmployee:false
    }

]

const activeEmployees= employees.filter((val)=>{
    return val.activeEmployee;
})

console.log('activEmployees',activeEmployees)