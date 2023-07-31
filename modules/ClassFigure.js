import { SaveJpg } from "./types/SaveJPG";
import { SavePng } from "./types/SavePng";
import { SavePdf } from "./types/SavePdf";

export default class ClassFigure {
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

