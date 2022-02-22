class Support {
    name;
    roll = 'Support web dev';
    address = 'Bangaldesh';
    constructor(name2){
        this.name= name2;
    }

    startSession(){
        console.log(this.name + 'start a support session');
    }
}

const amir = new Support('amir');
amir.startSession();
console.log(amir);