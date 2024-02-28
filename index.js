var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'attempted change';
  } catch (e) {
    console.log(e);
  }
}
