const employeeList = {
    people: []
};

const engineer1_Registry = {
    Name: "John",
    Age: 18
}

const engineer2_Registry = {
    Name: "Sam",
    Age: 50
}

const engineer3_Registry = {
    Name: "Allan",
    Age: 36
}


const engineer4_Registry = {
    Name: "Helen",
    Age: 25
}


employeeList.people.push (engineer1_Registry);
employeeList.people.push (engineer2_Registry);
employeeList.people.push (engineer3_Registry);
employeeList.people.push (engineer4_Registry);

console.error ("unsort:")
console.error (employeeList);

employeeList.people.sort(function (a, b) {
    if (a.Name > b.Name) {
        return 1;
    }
    if (b.Name > a.Name) {
        return -1;
    }

    return 0;
})

console.error ("sory by name:")
console.error (employeeList);

employeeList.people.sort(function (a, b) {
    if (a.Age > b.Age) {
        return 1;
    }
    if (b.Age > a.Age) {
        return -1;
    }

    return 0;
})

console.error ("sort by age:")
console.error (employeeList);

/* Result:

>node array_sort_ex2.js
unsort:
{
  people: [
    { Name: 'John', Age: 18 },
    { Name: 'Sam', Age: 50 },
    { Name: 'Allan', Age: 36 },
    { Name: 'Helen', Age: 25 }
  ]
}
sory by name:
{
  people: [
    { Name: 'Allan', Age: 36 },
    { Name: 'Helen', Age: 25 },
    { Name: 'John', Age: 18 },
    { Name: 'Sam', Age: 50 }
  ]
}
sort by age:
{
  people: [
    { Name: 'John', Age: 18 },
    { Name: 'Helen', Age: 25 },
    { Name: 'Allan', Age: 36 },
    { Name: 'Sam', Age: 50 }
  ]
}

*/