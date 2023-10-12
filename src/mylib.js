module.exports = {
    add: function(a, b) {
        return a + b;
    },
    substract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b ===0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};

