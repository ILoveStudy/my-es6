class A {

    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element;
    }

    set html(value) {
        this.element = value;
    }
}


let a = new A();

a.html = 'jackson';

console.log(a.element);








