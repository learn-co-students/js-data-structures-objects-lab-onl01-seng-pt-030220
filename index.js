// Write your solution in this file!

const driver = {}

//should not mutate driver and should return a new driver
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {
        [key]: value
    });
}

//should mutate driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

//take in driver Object and a key. 
//should delete the key/value pair for the key that was passed in from the driver Object
//should not mutate the driver
function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

//should delete the key/value pair
//should mutate the driver
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}