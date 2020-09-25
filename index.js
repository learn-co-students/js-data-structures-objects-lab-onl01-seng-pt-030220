// Write your solution in this file!
let driver = {


}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };

  newObj[key] = value;

  return newObj;
  return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value
return driver
}

function deleteFromDriverByKey(driver, key) {
  const newObj = { ...driver }
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
delete  driver[key]
return driver

}
