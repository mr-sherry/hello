let data = [

    {Name:"Zain ali", Rollno:1235 ,subject:{biology:67, math:{status:{one:"student Pass", two:"student fail"}}, chemistry:75}, marks:957, Grade:"A+"},
    {Name:"Ali", Rollno:1236,university:"Islamia university of Bahawalpur" ,subject:{biology:65, math:67, chemistry:74}, marks:967, Grade:"B+"},
    {Name:"ahmad", Rollno:1235 ,subject:{biology:67, math:66, chemistry:75}, marks:957, Grade:"A+"},
    {Name:"arslan", Rollno:1235,university:"Islamia university of Bahawalpur" , marks:957, Grade:"A+"},
    {Name:"abdus salam", Rollno:1235,university:"Air university islamabad" ,degree:"software engineering", marks:957, Grade:"A+"},
    {Name:"Ali raza", Rollno:1238, university:"Islamia university of Bahawalpur" ,degree:"bachelor's degree soft-- eng--", marks:957, Grade:"A+"},
    {Name:"abdul wahab", Rollno:1235,university:"Islamia university of Bahawalpur" ,subject:{biology:67, math:66, chemistry:75}, marks:957, Grade:"D+"},
    {Name:"ahmad", Rollno:1290,university:"nust university islamabad" , marks:957, Grade:"A+"},
    {Name:"ahmad", Rollno:1235,university:"Cholistan university bahawalpur" ,subject:{biology:67, math:66, chemistry:75}, marks:957, Grade:"A+"}
]

console.log(data[5].Name);
console.log(data[5].degree);
console.log(data[8].university);
console.log(data[0].subject.biology);
console.log(data[3].university);

console.log(data[0].subject.math.status.one);



  let   data2 = {"ahmad":555, "ali":333,"arslan":222}
  console.log(Object.entries(data2));
    console.log(Object.keys(data2));
    console.log(Object.values(data2));
    

    person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue" 
    };
    console.log(person.firstName + " is " + person.age + " year old");
    
    
    
 
 

 
 

