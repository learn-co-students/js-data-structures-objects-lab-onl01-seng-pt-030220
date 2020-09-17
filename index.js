
let driver = {
  me: "marcos",
  wife: "vanessa"
};


function updateDriverWithKeyAndValue(driver, key, val){
  let newDriver = {...driver};
  newDriver[key] = val;

  return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val){

  return Object.assign(driver, {[key]: val});
};

function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver);
  delete newDriver[key]

  return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  console.log(driver)
  return driver;
};

// console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "kid", "laya"))
