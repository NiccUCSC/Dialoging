class Title extends Phaser.Scene {
    constructor() {
        super("titleScene")
    }

    preload() {
        // load assets
        this.load.path = "./assets/"

        // load JSON (ie dialog text)
        this.load.json('dialog', 'json/dialog.json')

        // load images
        this.load.image('dialogbox', 'img/dialogbox.png')
        this.load.image('homer', 'img/homer.png')
        this.load.image('minerva', 'img/minerva.png')
        this.load.image('jove', 'img/jove.png')
        this.load.image('neptune', 'img/neptune.png')

        // custom image
        this.load.image('narrator', 'img/narrator.png')

        // load bitmap font
        this.load.bitmapFont('narrator_font', 'font/narrator_inverted.png', 'font/narrator_font.xml')
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'narrator_font', 'THE ODYSSEY', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'narrator_font', 'Press SPACE to start', 16).setOrigin(0.5)

        // create input
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("talkingScene")
        }
    }
}