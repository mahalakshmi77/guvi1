// var library = [
  {
    title : "javascript",
    price : 500,
    readers : [
      {
        name : "person 1",
        count : 300
        },
      {
        name : "person 2",
        count : 400
        }
      ],
      authordetails : {
        name : "raj",
        age : 40
        }
  },
  {
    title : "Nodejs",
    price : 600,
    readers : [],
    authordetails : {
      name : "raj",
      age : 40
      }
  }
  ]
console.log(library[0].price);     //printing the price
console.log(library[1].authordetails.age); //printing author age
console.log(library[0].readers[1].count); //printing count of readers[1]

  
Output:
>>> 500
40
400
