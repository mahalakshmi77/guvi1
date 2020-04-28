//deleting the elements:

function removeProperty(obj, key){
 var a={"cat" : 20,
 "dog" : 40,
 "meow" : 50}
delete a["cat"]
delete a["meow"]
delete a["dog"]
console.log(a)
}
removeProperty()

Output:
{}
