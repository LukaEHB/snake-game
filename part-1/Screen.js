const GridController = class {
    constructor(pixelSize) {
        this.pixelSize = pixelSize;
        this.timeOutId;
        this.$game = $('#game');
        this.pixel = 'pixel'
        this.pixelRow = 'pixel-row'
        this.pixelColor = "#bada55";
        //this.init(); //==> Don't do this if you extend form this class !!
    }

    init() {
        this.createGrid();
        $(window).resize(() => {
            this.resizeGrid()
        });
    }

    createGrid() {
        this.screenWidth = $(document).width();
        this.screenHeight = $(document).height();
        this.gameWidth = Math.floor(this.screenWidth / this.pixelSize);
        this.gameHeight = Math.floor(this.screenHeight / this.pixelSize);

        for (let i = 0; i < this.gameHeight; i++) {

            const pixelRow = $('<div></div>').addClass(this.pixelRow);
            this.$game.append(pixelRow);

            for (let j = 0; j < this.gameWidth; j++) {
                pixelRow
                    .append($('<div></div>').addClass(this.pixel).css({
                            'height': this.pixelSize + 'px',
                            'width': this.pixelSize + 'px',
                        })
                    );
            }
        }
        this.centerGrid();
    }

    centerGrid() {
        const marginWidth = this.screenWidth - this.pixelSize * this.gameWidth;
        const marginHeight = this.screenHeight - this.pixelSize * this.gameHeight;
        $('#game').css('width', this.pixelSize * Math.floor(this.gameWidth));
        $('#game').css('margin-left', marginWidth / 2);
        $('body').css('margin-top', (marginHeight / 2) - 1.5);
    }

    resizeGrid() {
        if (this.timeOutId) clearTimeout(this.timeOutId);
        this.timeOutId = setTimeout(() => {
            $('#game').empty();
            this.createGrid()
        }, 300);
    }

    drawSnake(locations, color, headColor) {

    }

    updateSnake(locations, lastPixel) {

    }


    updatePixel(x, y, color) {

    }
}

export default GridController;