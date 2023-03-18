class Judul {
    constructor(nama){
        this.nama = nama;
    }

    header(){
        console.log(`============== ${this.nama} ==============`);
    }
}

const judul1 = new Judul("Konsep-Konsep FP");
judul1.header()

function juduls(name){
    console.log(`============== ${name} ==============`);
}

juduls("test");
juduls("sfsdfsdf");
juduls("sdfsdfsdfsd");
juduls("tesdfdsfsdst");
juduls("khjkhjkhjk");