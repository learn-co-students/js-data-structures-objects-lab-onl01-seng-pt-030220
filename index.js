// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value){
    return Object.assign({},object, {[key]:value} )

}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key){
    const newObject = {...object}
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}