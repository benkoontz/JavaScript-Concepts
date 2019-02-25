// destructuring by passing objects

const stats = {
    max: 56,
    min: -0.75
};

const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0
    }
})();

console.log(stats);
console.log(half(stats)); // returns 27.625
