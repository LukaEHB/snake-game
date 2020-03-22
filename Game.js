import Snake from './Snake.js'

const GameController = class extends Snake {
    constructor() {
        super();
    }

    init() {

    }
}


$(document).ready(function() {
    new GameController();
})