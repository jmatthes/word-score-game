requirejs.config({
    urlArgs: 'v=' + (new Date()).getTime(),
    paths: {
        "jquery": '../lib/jquery-3.2.1',
        "wordList": "../lib/wordList",
        "wordBank": "../lib/wordBank",
        "game": "../js/word-score-game"
    },
    shim: {
        "game": {
            deps: [ "jquery" ],
            exports: "game"
        }
    }
});

requirejs(['jquery','wordList','wordBank','game'], function($) {
    startGame();
    $("#find-word-button").click(function() {
        findWordToUse();
    });
    $("#human-find-word-button").click(function() {
        humanFindWordToUse();
    });
    $("#retire-hand-button").click(function() {
        retireHand();
    });
    $('#human-word-input').keypress(function(event) {
        if (event.which == 13) {
            humanFindWordToUse();
        }
    });
});
