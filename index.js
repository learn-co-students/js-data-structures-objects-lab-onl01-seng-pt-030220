// Write your solution in this file!
// function destructivelyUpdateObject (obj, key, value) {
//     obj[key] = value;
   
//     return obj;
//   }

//   function nondestructivelyUpdateObject(obj, key, value) {
//     return Object.assign({}, obj, { [key]: value });
//   }
   

//   function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = { ...obj };
   
//     newObj[key] = value;
   
//     return newObj;
//   }


//To start, define a driver variable and assign it to an Object
const driver = ({})

/* updateDriverWithKeyAndValue()- this function should take in three
 arguments: a driver Object, a key and a value. This function should not 
 mutate the driver and should return a new driver that has an updated 
 value for the key passed in. */

 function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value });   
 }

 /*destructivelyUpdateDriverWithKeyAndValue() - this function 
 should work the same as updateDriverWithKeyAndValue() but it should 
 mutate the driver parameter passed in. */

 function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
   
    return obj;
 }

 /*deleteFromDriverByKey() - this function should take in a driver Object 
 and a key. It should delete the key/value pair for the key that was
  passed in from the driver Object. This should all not actually mutate
   the driver passed in.*/

function deleteFromDriverByKey(obj, key){
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}

/*destructivelyDeleteFromDriverByKey() - this function should work the 
same as deleteFromDriverByKey() but it should mutate the driver passed in. 
Be sure and consider whether dot-notation or bracket-notation might affect 
your solution*/

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}
