const superAnimal = {
  bark: () => {
    console.log("bark");
  },
};

const bird = {
  fly: () => {
    console.log("fly");
  },
};

const dog = {
  run: () => {
    console.log("run");
  },
};
// this causes a runtime error. fix it using inheritance
bird.bark();
dog.bark()
