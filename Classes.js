class Actor {
    #name;
    #address;
    static active = true;
    active;

    constructor(name, address, active){
        this.#name = name;
        this.#address = address;
        this.active = active;
    }
    #getInfo(){ 
        return `${this.#name} lives in ${this.#address}.`;
    }

    printInfo(){
        console.log(this.#getInfo());
    }
}

const actor = new Actor("John Wick","Jakarta");
console.log(actor.active);