export default class cenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const alturaJogo = this.sys.canvas.height;
        const barraDeProgressso = this.add.graphics();

        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            // barra branca preenchida
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            // contorno amarelo
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });


        this.load.on('progress', (porcentagem) => {
            barraDeProgressso.clear();
            barraDeProgressso.fillStyle(0xffffff);
            barraDeProgressso.fillRect(0, 0, larguraJogo * porcentagem, 20);
        });
        
        this.load.on('complete', () => {

        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        } );

        this.load.image('forest', 'images/forest.jpg');
        this.load.image('chao', 'images/chao.png');
        this.load.image('platform', 'images/platform.png');
        this.load.spritesheet('slime', 'images/slime-vermelha.png', { frameWidth: 24, frameHeight: 24 });
    }

    create() {

    }

    update() {
        
    }
}