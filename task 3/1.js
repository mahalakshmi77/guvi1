// print the name if the age is less than 18 for the given array.

var a=[{name:"b",age:18,mobile:000009},
       {name:"c",age:10,mobile:9558589},
       {name:"d",age:9,mobile:04845857}];
a.forEach(function(a){
  
  if(a.age<18)
  {
    console.log(a.name)
  }
});

output:
 c
 d
