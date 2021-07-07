function User(id,name){
    this.id = id;
    this.name = name;
    this.human = true;
    this.sayHello = ()=>{console.log(`Hello ${this.human}`)};
}

const alex = new User('12', 'Alexey');
const ivan = new User('1','Ivanushka');



User.prototype.exit = function() {
    console.log(`User ${this.name} with id:${this.id} left the conference`);
};

const gosha = new User('2','Geogriy');

gosha.exit();

// пускай снимает трейсы со всех SBC