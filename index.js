// Write your solution in this file!

const driver = {}
    //const key = "lastname"
    //const value = "Robert"

function updateDriverWithKeyAndValue(driver, key, value) {

    return Object.assign({}, driver, {
        [key]: value
    });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value
    return Object.assign({}, driver, {
        [key]: value
    });

}

function deleteFromDriverByKey(driver, key) {

    const newobj = { key: "" }
    delete newobj[key]
    return newobj
}

function destructivelyDeleteFromDriverByKey(driver, key) {


    delete driver[key]
    return driver
}