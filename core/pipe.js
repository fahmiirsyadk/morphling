module.exports = (...fns) => x => fns.reduce((v, f) => f(v), x);
