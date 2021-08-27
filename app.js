var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View;
(function (View_1) {
    var View = (function (_super) {
        __extends(View, _super);
        function View() {
            var _this = _super.call(this) || this;
            _this.memory = 0;
            _this.currentNumber = 0;
            _this.style = new PIXI.TextStyle({
                align: 'center',
                fill: 0x000000,
                fontSize: 20,
            });
            _this.TextviewStyle = new PIXI.TextStyle({
                fontSize: 36,
            });
            _this.textview = new PIXI.Text(" 0", _this.TextviewStyle);
            _this.background = new PIXI.Sprite();
            _this.text1 = new PIXI.Text('1', _this.style);
            _this.text2 = new PIXI.Text('2', _this.style);
            _this.text3 = new PIXI.Text('3', _this.style);
            _this.text4 = new PIXI.Text('4', _this.style);
            _this.text5 = new PIXI.Text('5', _this.style);
            _this.text6 = new PIXI.Text('6', _this.style);
            _this.text7 = new PIXI.Text('7', _this.style);
            _this.text8 = new PIXI.Text('8', _this.style);
            _this.text9 = new PIXI.Text('9', _this.style);
            _this.text0 = new PIXI.Text('0', _this.style);
            _this.textMC = new PIXI.Text('MC', _this.style);
            _this.textMR = new PIXI.Text('MR', _this.style);
            _this.textMS = new PIXI.Text('MS', _this.style);
            _this.textMplus = new PIXI.Text('M+', _this.style);
            _this.textMm = new PIXI.Text('M-', _this.style);
            _this.textCE = new PIXI.Text('CE', _this.style);
            _this.textBack = new PIXI.Text('<-', _this.style);
            _this.textC = new PIXI.Text('C', _this.style);
            _this.textPorM = new PIXI.Text('+-', _this.style);
            _this.textSR = new PIXI.Text('√', _this.style);
            _this.textDiv = new PIXI.Text('/', _this.style);
            _this.textPercent = new PIXI.Text('%', _this.style);
            _this.textTime = new PIXI.Text('*', _this.style);
            _this.textDx = new PIXI.Text('1/x', _this.style);
            _this.textM = new PIXI.Text('-', _this.style);
            _this.textEqual = new PIXI.Text('=', _this.style);
            _this.textDot = new PIXI.Text('.', _this.style);
            _this.textP = new PIXI.Text('+', _this.style);
            var app = new PIXI.Application({ backgroundColor: 0x1099bb });
            document.body.appendChild(app.view);
            PIXI.loader
                .add("workday3/pic/h5source.json")
                .load(function () {
                var backgroundTexture = PIXI.utils.TextureCache["background.png"];
                var btnTexture = PIXI.utils.TextureCache["btn_up.png"];
                _this.background = new PIXI.Sprite(backgroundTexture);
                _this.background.x = app.renderer.width / 2;
                _this.background.y = app.renderer.height / 2;
                app.renderer.view.style.display = "block";
                app.renderer.autoResize = true;
                app.renderer.resize(window.innerWidth, window.innerHeight);
                app.stage.addChild(_this.background);
                var display = new PIXI.Graphics();
                display.beginFill(0xFFFFFF);
                display.drawRect(0, 0, 321, 100);
                display.endFill();
                _this.background.addChild(display);
                _this.textview.height = 50;
                _this.textview.scale.x = _this.textview.scale.y;
                display.addChild(_this.textview);
                var btnary = [];
                _this.buttonMC = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonMC, _this.textMC, 'MC', 0, 105);
                btnary.push(_this.buttonMC);
                _this.buttonMR = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonMR, _this.textMR, 'MR', 80, 105);
                btnary.push(_this.buttonMR);
                _this.buttonMplus = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonMplus, _this.textMplus, 'M+', 160, 105);
                btnary.push(_this.buttonMplus);
                _this.buttonMm = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonMm, _this.textMm, 'M-', 240, 105);
                btnary.push(_this.buttonMm);
                _this.buttonMS = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonMS, _this.textMS, 'MS', 0, 165);
                btnary.push(_this.buttonMS);
                _this.buttonCE = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonCE, _this.textCE, 'CE', 80, 165);
                btnary.push(_this.buttonCE);
                _this.buttonC = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonC, _this.textC, 'C', 160, 165);
                btnary.push(_this.buttonC);
                _this.buttonBack = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonBack, _this.textBack, '<-', 240, 165);
                btnary.push(_this.buttonBack);
                _this.buttonPorM = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonPorM, _this.textPorM, '+-', 0, 225);
                btnary.push(_this.buttonPorM);
                _this.buttonSR = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonSR, _this.textSR, '√', 80, 225);
                btnary.push(_this.buttonSR);
                _this.buttonPercent = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonPercent, _this.textPercent, '%', 160, 225);
                btnary.push(_this.buttonPercent);
                _this.buttonDx = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonDx, _this.textDx, '1/x', 240, 225);
                btnary.push(_this.buttonDx);
                _this.button7 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button7, _this.text7, '7', 0, 285);
                btnary.push(_this.button7);
                _this.button8 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button8, _this.text8, '8', 80, 285);
                btnary.push(_this.button8);
                _this.button9 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button9, _this.text9, '9', 160, 285);
                btnary.push(_this.button9);
                _this.buttonP = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonP, _this.textP, '+', 240, 285);
                btnary.push(_this.buttonP);
                _this.button4 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button4, _this.text4, '4', 0, 345);
                btnary.push(_this.button4);
                _this.button5 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button5, _this.text5, '5', 80, 345);
                btnary.push(_this.button5);
                _this.button6 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button6, _this.text6, '6', 160, 345);
                btnary.push(_this.button6);
                _this.buttonM = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonM, _this.textM, '-', 240, 345);
                btnary.push(_this.buttonM);
                _this.button1 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button1, _this.text1, '1', 0, 405);
                btnary.push(_this.button1);
                _this.button2 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button2, _this.text2, '2', 80, 405);
                btnary.push(_this.button2);
                _this.button3 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button3, _this.text3, '3', 160, 405);
                btnary.push(_this.button3);
                _this.buttonTime = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonTime, _this.textTime, '*', 240, 405);
                btnary.push(_this.buttonTime);
                _this.button0 = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.button0, _this.text0, '0', 0, 465);
                btnary.push(_this.button0);
                _this.buttonDot = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonDot, _this.textDot, '.', 80, 465);
                btnary.push(_this.buttonDot);
                _this.buttonEqual = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonEqual, _this.textEqual, '=', 160, 465);
                btnary.push(_this.buttonEqual);
                _this.buttonDiv = new PIXI.Sprite(btnTexture);
                _this.createButton(_this.buttonDiv, _this.textDiv, '/', 240, 465);
                btnary.push(_this.buttonDiv);
                for (var i = 0; i < btnary.length; i++) {
                    _this.background.addChild(btnary[i]);
                }
                _this.buttonclick();
            });
            return _this;
        }
        View.prototype.getTextview = function () {
            return this.textview.text;
        };
        Object.defineProperty(View.prototype, "Textview", {
            get: function () {
                return this.textview;
            },
            enumerable: false,
            configurable: true
        });
        View.prototype.buttonclick = function () {
            var _this = this;
            this.button1.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button1.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button1.name;
                }
                else {
                    _this.textview.text += _this.button1.name;
                }
            });
            this.button2.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button2.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button2.name;
                }
                else {
                    _this.textview.text += _this.button2.name;
                }
            });
            this.button3.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button3.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button3.name;
                }
                else {
                    _this.textview.text += _this.button3.name;
                }
            });
            this.button4.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button4.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button4.name;
                }
                else {
                    _this.textview.text += _this.button4.name;
                }
            });
            this.button5.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button5.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button5.name;
                }
                else {
                    _this.textview.text += _this.button5.name;
                }
            });
            this.button6.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button6.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button6.name;
                }
                else {
                    _this.textview.text += _this.button6.name;
                }
            });
            this.button7.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button7.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button7.name;
                }
                else {
                    _this.textview.text += _this.button7.name;
                }
            });
            this.button8.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button8.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button8.name;
                }
                else {
                    _this.textview.text += _this.button8.name;
                }
            });
            this.button9.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button9.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button9.name;
                }
                else {
                    _this.textview.text += _this.button9.name;
                }
            });
            this.button0.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.button0.name;
                }
                else if (_this.result != undefined || _this.textview.text == ' 0') {
                    _this.textview.text = '';
                    _this.textview.text += _this.button0.name;
                }
                else {
                    _this.textview.text += _this.button0.name;
                }
            });
            this.buttonDot.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的結果' || _this.textview.text == '無法除以0') {
                    _this.textview.text = '';
                    _this.textview.text = _this.buttonDot.name;
                }
                else if (_this.textview.text.indexOf('.') == -1) {
                    _this.textview.text += _this.buttonDot.name;
                }
                else if (_this.textview.text == null) {
                    _this.textview.text = '0' + _this.buttonDot.name;
                }
                console.log(_this.textview.text.length);
            });
            this.buttonCE.on('pointerdown', function () {
                _this.textview.text = _this.textview.text.substring(0, 0);
                _this.textview.text = ' 0';
            });
            this.buttonP.on('pointerdown', function () {
                if (_this.firstNum == undefined) {
                    _this.firstNum = parseFloat(_this.textview.text);
                    _this.textview.text = '';
                    _this.math = '+';
                }
                else {
                    _this.textview.text = '';
                    _this.math = '+';
                }
            });
            this.buttonM.on('pointerdown', function () {
                if (_this.firstNum == undefined) {
                    _this.firstNum = parseFloat(_this.textview.text);
                    _this.textview.text = '';
                    _this.math = '-';
                }
                else {
                    _this.textview.text = '';
                    _this.math = '-';
                }
            });
            this.buttonTime.on('pointerdown', function () {
                if (_this.firstNum == undefined) {
                    _this.firstNum = parseFloat(_this.textview.text);
                    _this.textview.text = '';
                    _this.math = '*';
                }
                else {
                    _this.textview.text = '';
                    _this.math = '*';
                }
            });
            this.buttonDiv.on('pointerdown', function () {
                if (_this.firstNum == undefined) {
                    _this.firstNum = parseFloat(_this.textview.text);
                    _this.textview.text = '';
                    _this.math = '/';
                }
                else {
                    _this.textview.text = '';
                    _this.math = '/';
                }
            });
            this.buttonPorM.on('pointerdown', function () {
                if (_this.textview.text.length == 1) {
                    _this.currentNumber = _this.firstNum;
                    _this.emit('POSITVE_OR_NEGATIVE', _this.currentNumber);
                }
                else {
                    _this.currentNumber = parseFloat(_this.textview.text);
                    _this.emit('POSITVE_OR_NEGATIVE', _this.currentNumber);
                }
            });
            this.buttonPercent.on('pointerdown', function () {
                var _firstnumber = 0;
                _firstnumber = _this.firstNum;
                _this.currentNumber = parseFloat(_this.textview.text);
                console.log(_this.firstNum);
                console.log(_this.currentNumber);
                console.log(_firstnumber);
                _this.emit('PERCENT', { first: _firstnumber, percentage: _this.currentNumber });
            });
            this.buttonSR.on('pointerdown', function () {
                _this.currentNumber = parseFloat(_this.textview.text);
                if (_this.currentNumber < 0) {
                    _this.textview.text = '無效的輸入';
                }
                else {
                    _this.emit('SQUARE', _this.currentNumber);
                }
            });
            this.buttonDx.on('pointerdown', function () {
                _this.currentNumber = parseFloat(_this.textview.text);
                if (_this.currentNumber == 0) {
                    _this.textview.text = '無法除以0';
                }
                else {
                    _this.emit('1/x', _this.currentNumber);
                }
            });
            this.buttonBack.on('pointerdown', function () {
                if (_this.result != undefined && parseFloat(_this.textview.text) < 0) {
                    _this.textview.text = ' 0';
                }
                else {
                    _this.textview.text = _this.textview.text.substring(0, _this.textview.text.length - 1);
                }
            });
            this.buttonC.on('pointerdown', function () {
                _this.textview.text = " 0";
                _this.result = undefined;
                _this.firstNum = undefined;
                _this.secondNum = undefined;
                _this.math = '';
            });
            this.buttonMplus.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的輸入' || _this.textview.text == '無法除以0') {
                }
                else {
                    _this.memory = parseFloat(_this.textview.text);
                    _this.firstNum = _this.memory;
                    _this.emit('MPLUS', _this.memory);
                }
            });
            this.buttonMm.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的輸入' || _this.textview.text == '無法除以0') {
                }
                else {
                    _this.memory = parseFloat(_this.textview.text);
                    _this.emit('Mmines', _this.memory);
                }
            });
            this.buttonMC.on('pointerdown', function () {
                _this.memory = 0;
                _this.emit('Mclean');
            });
            this.buttonMR.on('pointerdown', function () {
                _this.emit('SHOW_MEMORY');
            });
            this.buttonMS.on('pointerdown', function () {
                if (_this.textview.text == 'NaN' || _this.textview.text == '無效的輸入' || _this.textview.text == '無法除以0') {
                }
                else {
                    _this.memory = parseFloat(_this.textview.text);
                    _this.emit('MS', _this.memory);
                }
            });
            this.buttonEqual.on('pointerdown', function () {
                switch (_this.math) {
                    case '+':
                        if (_this.textview.text.length == 1) {
                            _this.secondNum = _this.firstNum;
                            _this.emit('PLUS', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        else {
                            _this.secondNum = parseFloat(_this.textview.text);
                            _this.emit('PLUS', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        break;
                    case '-':
                        if (_this.textview.text.length == 1) {
                            _this.secondNum = _this.firstNum;
                            _this.emit('MINES', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        else {
                            _this.secondNum = parseFloat(_this.textview.text);
                            _this.emit('MINES', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        break;
                    case '*':
                        if (_this.textview.text.length == 1) {
                            _this.secondNum = _this.firstNum;
                            _this.emit('TIME', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        else {
                            _this.secondNum = parseFloat(_this.textview.text);
                            _this.emit('TIME', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        break;
                    case '/':
                        _this.secondNum = parseFloat(_this.textview.text);
                        if (_this.secondNum == 0) {
                            _this.textview.text = '無法除以0';
                        }
                        else if (_this.textview.text.length == 1) {
                            _this.secondNum = _this.firstNum;
                            _this.emit('DIV', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        else {
                            _this.secondNum = parseFloat(_this.textview.text);
                            _this.emit('DIV', { firstNum: _this.firstNum, secondNum: _this.secondNum });
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        View.prototype.createButton = function (button, text, name, x, y) {
            button.name = name;
            button.interactive = true;
            button.buttonMode = true;
            button.x = x;
            button.y = y;
            text.x = 25;
            text.y = 15;
            button.addChild(text);
        };
        return View;
    }(PIXI.utils.EventEmitter));
    View_1.View = View;
})(View || (View = {}));
var Operation;
(function (Operation_1) {
    var Operation = (function () {
        function Operation() {
            this.memoryNumber = 0;
        }
        Operation.prototype.plus = function (firstNum, secondNum) {
            return (firstNum + secondNum);
        };
        Operation.prototype.mines = function (firstNum, secondNum) {
            return firstNum - secondNum;
        };
        Operation.prototype.time = function (firstNum, secondNum) {
            return firstNum * secondNum;
        };
        Operation.prototype.div = function (firstNum, secondNum) {
            return firstNum / secondNum;
        };
        Operation.prototype.percent = function (firstNum, percentage) {
            console.log(firstNum, percentage / 100);
            return firstNum * percentage / 100;
        };
        Operation.prototype.sr = function (current) {
            return Math.sqrt(current);
        };
        Operation.prototype.dx = function (current) {
            return 1 / current;
        };
        Operation.prototype.PorM = function (current) {
            return current * -1;
        };
        Operation.prototype.MPlus = function (memoryNumber) {
            this.memoryNumber += memoryNumber;
        };
        Operation.prototype.Mmines = function (memoryNumber) {
            this.memoryNumber -= memoryNumber;
        };
        Operation.prototype.MC = function () {
            this.memoryNumber = 0;
        };
        Operation.prototype.getMemoryNumber = function () {
            return this.memoryNumber;
        };
        Operation.prototype.Ms = function (memoryNumber) {
            this.memoryNumber = memoryNumber;
            return this.memoryNumber;
        };
        return Operation;
    }());
    Operation_1.Operation = Operation;
})(Operation || (Operation = {}));
document.addEventListener("DOMContentLoaded", function () {
    new Main();
}, false);
var Main = (function () {
    function Main() {
        this.view = new View.View();
        this.op = new Operation.Operation();
        this.test();
    }
    Main.prototype.test = function () {
        var _this = this;
        this.view.on('PLUS', function (e) {
            _this.view.Textview.text = String(_this.op.plus(e.firstNum, e.secondNum));
            _this.view.result = _this.op.plus(e.firstNum, e.secondNum);
        });
        this.view.on('MINES', function (e) {
            _this.view.Textview.text = String(_this.op.mines(e.firstNum, e.secondNum));
        });
        this.view.on('TIME', function (e) {
            _this.view.Textview.text = String(_this.op.time(e.firstNum, e.secondNum));
        });
        this.view.on('DIV', function (e) {
            _this.view.Textview.text = String(_this.op.div(e.firstNum, e.secondNum));
        });
        this.view.on('POSITVE_OR_NEGATIVE', function (e) {
            _this.view.Textview.text = String(_this.op.PorM(e));
        });
        this.view.on('PERCENT', function (e) {
            _this.view.Textview.text = String(_this.op.percent(e.firstNum, e.percentage));
        });
        this.view.on('SQUARE', function (e) {
            _this.view.Textview.text = String(_this.op.sr(e));
        });
        this.view.on('1/x', function (e) {
            _this.view.Textview.text = String(_this.op.dx(e));
        });
        this.view.on('SHOW_MEMORY', function () {
            _this.view.Textview.text = String(_this.op.getMemoryNumber());
        });
        this.view.on('MPLUS', function (e) {
            _this.op.MPlus(e);
        });
        this.view.on('Mmines', function (e) {
            _this.op.Mmines(e);
        });
        this.view.on('Mclean', function () {
            _this.op.MC();
        });
        this.view.on('MS', function (e) {
            _this.view.memory = _this.op.Ms(e);
        });
        this.view.on('PLUS MINES TIME DIV POSITIVE_OR_NEGATIVE PERCENT SQUARE 1/x SHOW_MEMORY MPLUS Mmines Mclean MS', function (e) { });
    };
    return Main;
}());
//# sourceMappingURL=app.js.map