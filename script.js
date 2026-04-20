// Create the student object
const student = {
  name: "John"
};

// Function to get all keys
function getKeys(obj) {
  return Object.keys(obj);
}

// Test
console.log(getKeys(student)); // ["name"]