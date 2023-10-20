import CenaCarregamento from './cena-carregamento';
import CenaJogo from './cena-jogo';

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 240,
    parent: 'jogo-slime-floresta',
    scene: [
        CenaCarregamento,
        CenaJogo
    ]
};

const hogo = new Phaser.game(config);