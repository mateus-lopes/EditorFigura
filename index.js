// Editor de Figura - JS
// Autor: Mateus Lopes Albano

import { ClassFigure } from './modules/ClassFigure.js';

class ClassMain {
    constructor() {
        this.figure = null;
    }

    init() {
        let type = 'png';
            this.saveFigure(type);
    }

    saveFigure(type) {
        console.log('save figure em ' + type)
        classFigure = new ClassFigure();
        classFigure.saveFigure(type);
    }
}

const main = new ClassMain();
main.init();