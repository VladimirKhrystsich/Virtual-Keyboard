var keyboard = document.querySelector('.keyboard');
var keyIndexes = {
    192: 'backtick',
    49: 'num_1',
    50: 'num_2',
    51: 'num_3',
    52: 'num_4',
    53: 'num_5',
    54: 'num_6',
    55: 'num_7',
    56: 'num_8',
    57: 'num_9',
    48: 'num_0',
    189: 'minus',
    187: 'equal',
    8: 'backspace',
    45: 'insert',
    36: 'home',
    33: 'page_up',
    9: 'tab',
    81: 'q',
    87: 'w',
    69: 'e',
    82: 'r',
    84: 't',
    89: 'y',
    85: 'u',
    73: 'i',
    79: 'o',
    80: 'p',
    219: 'left_bracket',
    221: 'right_bracket',
    13: 'enter',
    46: 'delete',
    35: 'end',
    34: 'page_down',
    20: 'caps_lock',
    65: 'a',
    83: 's',
    68: 'd',
    70: 'f',
    71: 'g',
    72: 'h',
    74: 'j',
    75: 'k',
    76: 'l',
    186: 'semicolon',
    222: 'quote',
    220: 'backslash',
    16: 'shift',
    90: 'z',
    88: 'x',
    67: 'c',
    86: 'v',
    66: 'b',
    78: 'n',
    77: 'm',
    188: 'comma',
    190: 'dot',
    191: 'slash',
    38: 'up_arrow',
    17: 'ctrl',
    91: 'win',
    18: 'alt',
    32: 'space',
    37: 'left_arrow',
    40: 'down_arrow',
    39: 'right_arrow'
}

document.addEventListener('keydown', function (event) {
    var key = event.keyCode;
    var targetClass = keyIndexes[key];
    var element = document.getElementsByClassName(targetClass)[0];
    if (event.location < 2) {
        if (event.keyCode === 9) {
            event.preventDefault();
            element.style.backgroundColor = 'green';
        } else {
            element.style.backgroundColor = 'green';
        }
    } else if (event.location === 2) {
        if (event.keyCode === 18) {
            document.querySelector('.right_alt').style.backgroundColor = 'green';
        } else if (event.keyCode === 17) {
            document.querySelector('.right_ctrl').style.backgroundColor = 'green';
        } else if (event.keyCode === 16) {
            document.querySelector('.right_shift').style.backgroundColor = 'green';
        }
    }

});

document.addEventListener('keyup', function (event) {
    var key = event.keyCode;
    var targetClass = keyIndexes[key];
    var element = document.getElementsByClassName(targetClass)[0];
    if (event.location < 2) {
        element.style.backgroundColor = '#36454F';
    } else if (event.location === 2) {
        if (event.keyCode === 18) {
            document.querySelector('.right_alt').style.backgroundColor = '#36454F';
        } else if (event.keyCode === 17) {
            document.querySelector('.right_ctrl').style.backgroundColor = '#36454F';
        } else if (event.keyCode === 16) {
            document.querySelector('.right_shift').style.backgroundColor = '#36454F';
        }
    }
});
