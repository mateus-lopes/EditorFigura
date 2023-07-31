// ex class: Editor de Figura - JS
// imort class: SaveJpg, SavePdf, SavePng, ClassFigure, ClassMain

class SaveJpg {
    constructor() {
        // pass
    }

    save(){
        return 'jpg'
    }
}

class SavePdf {
    constructor() {
        // pass
    }

    save(){
        return 'pdf'
    }
}

class SavePng {
    constructor() {
        // passs
    }

    save(){
        return 'png'
    }
}

class ClassFigure {
    constructor() {
        // pass
    }
    // save figure
    saveFigure(type) {
        console.log('save figure em ' + type)
        switch (type) {
            case 'png':
                const png = new SavePng();
                png.save('png');
                break;
            case 'jpg':
                const jpg = new SaveJpg();
                jpg.save('jpg');
                break;
            case 'pdf':
                const pdf = new SavePdf();
                pdf.save('pdf');
            default:
                console.log('formato não suportado');
                // alert('formato não suportado')
                break;
        }
    }
}

class ClassMain {
    constructor() {
        this.figure = null;
    }

    init() {
        let type = 'png';
        this.saveFigure(type);
    }

    saveFigure(type) {
        const classFigure = new ClassFigure();
        classFigure.saveFigure(type);
    }
}

const main = new ClassMain();
main.init();