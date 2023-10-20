export default class cenajogo extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenajJogo'
        });
    }

    preload() {

    }

    create() {
       // const larguraJogo = this.sys.canvas.width;
       // const alturaJogo = this.sys.canvas.height;
       // this.add.image(larguraJogo/2, alutra/2, 'forest');
        this.add.image(0, 0, 'forest');
        imagemFundo.setOrigin(0, 0);
    }

    update() {

    }
}