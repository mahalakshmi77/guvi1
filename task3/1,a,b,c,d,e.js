//  var library = [
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
  console.log(typeof(library[1].authordetails.age));
console.log(library[0].readers[1].count = 500);
 library.push("{title : sql",
                "price : 700}");
console.log(library);
library[1].readers.push("{name : person1","count : 400}");
console.log(library[1].readers);
console.log(library[0].readers[0].email ="email1@gmail.com");
console.log(library[0].readers[1].email ="email2@gmail.com");
console.log(library[0].readers); //


output:
>>> number
500
[ { title: 'javascript',
    price: 500,
    readers: [ [Object], [Object] ],
    authordetails: { name: 'raj', age: 40 } },
  { title: 'Nodejs',
    price: 600,
    readers: [],
    authordetails: { name: 'raj', age: 40 } },
  '{title : sql',
  'price : 700}' ]
[ '{name : person1', 'count : 400}' ]
email1@gmail.com
email2@gmail.com
[ { name: 'person 1', count: 300, email: 'email1@gmail.com' },
  { name: 'person 2', count: 500, email: 'email2@gmail.com' } ]

