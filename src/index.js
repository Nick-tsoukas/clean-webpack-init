require('./styles.scss');

class Car {
  manufacturer(car) {
    document.write(`I wish I had  a ${car}`)
  }
}

const bmw = new Car;

bmw.manufacturer(`bmw`);
