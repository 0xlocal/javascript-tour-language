let handler = {
  get: function (target, name) {
    console.log(target);
    console.log(name);

    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.c = 1;
console.log(p.c, p.b);
console.log(p);
console.log(typeof p);
