class Person{
    #address;
    #age;
    name;

    constructor(name, address, age){
        this.name = name;
        this.#address =address;
        this.#age = age;
    }
    isAgeGreaterThan(number){
        return this.#age > number;
    }

}
let objPerson = new Person("Jack", "Britain", 6);
console.log(objPerson.isAgeGreaterThan(5));