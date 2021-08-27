///<reference path="Main.ts"/>



namespace View{
    export class  View extends PIXI.utils.EventEmitter{


        public firstNum : number |undefined;   // 先按的數字 例如 5+3的5 先存到後面放著
        public secondNum : number |undefined;
        public result : number |undefined;
        private math : string;        //判斷運算的方法
        public memory : number = 0;
        private currentNumber : number = 0

        //按鈕文字style
        private style = new PIXI.TextStyle({
            align : 'center',
            fill : 0x000000,
            fontSize : 20,   
        })
        private TextviewStyle = new PIXI.TextStyle({
            fontSize:36,
        })
        //顯示數字的text
        private textview = new PIXI.Text(" 0",this.TextviewStyle);
        //background 代替 container 去包住按鈕跟顯示欄
        private background = new PIXI.Sprite();
        
        public getTextview(){ //這樣寫也可以 但就比較醜
            return this.textview.text
        }

        get Textview(): PIXI.Text   //不希望外部可以直接拿到 private 的資料，外部要拿就只能用get拿
        {
            return this.textview;
        }
        

        
        //開始建立按鈕
        private button1 :PIXI.Sprite;
        private text1 = new PIXI.Text('1',this.style);
        private button2:PIXI.Sprite;
        private text2 = new PIXI.Text('2',this.style);
        private button3:PIXI.Sprite;
        private text3 = new PIXI.Text('3',this.style);
        private button4:PIXI.Sprite;
        private text4 = new PIXI.Text('4',this.style);
        private button5:PIXI.Sprite;
        private text5 = new PIXI.Text('5',this.style);
        private button6:PIXI.Sprite;
        private text6 = new PIXI.Text('6',this.style);
        private button7:PIXI.Sprite;
        private text7 = new PIXI.Text('7',this.style);
        private button8:PIXI.Sprite;
        private text8 = new PIXI.Text('8',this.style);
        private button9:PIXI.Sprite;
        private text9 = new PIXI.Text('9',this.style);
        private button0:PIXI.Sprite;
        private text0 = new PIXI.Text('0',this.style);
        private buttonMC:PIXI.Sprite;
        private textMC = new PIXI.Text('MC',this.style);
        private buttonMR:PIXI.Sprite;
        private textMR = new PIXI.Text('MR',this.style);
        private buttonMS:PIXI.Sprite;
        private textMS = new PIXI.Text('MS',this.style);
        private buttonMplus:PIXI.Sprite;
        private textMplus = new PIXI.Text('M+',this.style);
        private buttonMm:PIXI.Sprite;
        private textMm = new PIXI.Text('M-',this.style);
        private buttonCE:PIXI.Sprite;
        private textCE = new PIXI.Text('CE',this.style);
        private buttonBack:PIXI.Sprite;
        private textBack = new PIXI.Text('<-',this.style);
        private buttonC:PIXI.Sprite;
        private textC = new PIXI.Text('C',this.style);
        private buttonPorM:PIXI.Sprite;
        private textPorM= new PIXI.Text('+-',this.style);
        private buttonSR:PIXI.Sprite;
        private textSR = new PIXI.Text('√',this.style);
        private buttonDiv:PIXI.Sprite;
        private textDiv = new PIXI.Text('/',this.style);
        private buttonPercent:PIXI.Sprite;
        private textPercent = new PIXI.Text('%',this.style);
        private buttonTime:PIXI.Sprite;
        private textTime = new PIXI.Text('*',this.style);
        private buttonDx:PIXI.Sprite;
        private textDx = new PIXI.Text('1/x',this.style);
        private buttonM:PIXI.Sprite;
        private textM = new PIXI.Text('-',this.style);
        private buttonEqual:PIXI.Sprite;
        private textEqual = new PIXI.Text('=',this.style);
        private buttonDot:PIXI.Sprite;
        private textDot = new PIXI.Text('.',this.style);
        private buttonP:PIXI.Sprite;
        private textP = new PIXI.Text('+',this.style);



        constructor(){
            super();
            let app = new PIXI.Application( { backgroundColor : 0x1099bb });
            document.body.appendChild(app.view);

            PIXI.loader
            .add("workday3/pic/h5source.json")
            .load(() => {
                let backgroundTexture = PIXI.utils.TextureCache["background.png"];
                let btnTexture = PIXI.utils.TextureCache["btn_up.png"];

                this.background = new PIXI.Sprite(backgroundTexture);
                //container 放到畫面正中間
                this.background.x = app.renderer.width / 2;
                this.background.y = app.renderer.height / 2;
                //整個畫面填滿
                app.renderer.view.style.display = "block";
                app.renderer.autoResize = true;
                app.renderer.resize(window.innerWidth, window.innerHeight);
                app.stage.addChild(this.background);
            
                //用來裝顯示的外框
                let display = new PIXI.Graphics();
                display.beginFill(0xFFFFFF);
                display.drawRect(0,0,321,100);
                display.endFill();
                this.background.addChild(display);
                //用來顯示的textview
                this.textview.height =50;
                this.textview.scale.x = this.textview.scale.y;
                display.addChild(this.textview);

                //建一個放button的陣列，為的是將建完的按鈕用for迴圈add進container 裡面
                let btnary :PIXI.Sprite[] = [];                

                //建立按鈕
                //MC
                this.buttonMC = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonMC,this.textMC,'MC',0,105);
                btnary.push(this.buttonMC);
                //MR
                this.buttonMR = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonMR,this.textMR,'MR',80,105);
                btnary.push(this.buttonMR);
                //M+
                this.buttonMplus = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonMplus,this.textMplus,'M+',160,105);
                btnary.push(this.buttonMplus);
                //M-
                this.buttonMm = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonMm ,this.textMm,'M-',240,105);
                btnary.push(this.buttonMm);
                //MS
                this.buttonMS = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonMS ,this.textMS,'MS',0,165);
                btnary.push(this.buttonMS); 
                //CE
                this.buttonCE = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonCE ,this.textCE,'CE',80,165);
                btnary.push(this.buttonCE); 
                //C
                this.buttonC = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonC ,this.textC,'C',160,165);
                btnary.push(this.buttonC); 
                //back
                this.buttonBack = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonBack ,this.textBack,'<-',240,165);
                btnary.push(this.buttonBack); 
                //+-
                this.buttonPorM = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonPorM ,this.textPorM,'+-',0,225);
                btnary.push(this.buttonPorM);
                //開根號
                this.buttonSR = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonSR ,this.textSR,'√',80,225);
                btnary.push(this.buttonSR);
                //%
                this.buttonPercent = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonPercent ,this.textPercent,'%',160,225);
                btnary.push(this.buttonPercent);
                //1/x
                this.buttonDx = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonDx ,this.textDx,'1/x',240,225);
                btnary.push(this.buttonDx);
                //7
                this.button7 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button7 ,this.text7,'7',0,285);
                btnary.push(this.button7);
                //8
                this.button8 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button8 ,this.text8,'8',80,285);
                btnary.push(this.button8);
                //9 
                this.button9 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button9 ,this.text9,'9',160,285);
                btnary.push(this.button9);
                //+
                this.buttonP = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonP ,this.textP,'+',240,285);
                btnary.push(this.buttonP);
                //4
                this.button4 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button4 ,this.text4,'4',0,345);
                btnary.push(this.button4);
                //5
                this.button5 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button5 ,this.text5,'5',80,345);
                btnary.push(this.button5);
                //6
                this.button6 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button6 ,this.text6,'6',160,345);
                btnary.push(this.button6);
                //-
                this.buttonM = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonM ,this.textM,'-',240,345);
                btnary.push(this.buttonM);
                //1
                this.button1 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button1 ,this.text1,'1',0,405);
                btnary.push(this.button1);
                //2
                this.button2 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button2 ,this.text2,'2',80,405);
                btnary.push(this.button2);
                //3
                this.button3 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button3 ,this.text3,'3',160,405);
                btnary.push(this.button3);
                //x
                this.buttonTime = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonTime ,this.textTime,'*',240,405);
                btnary.push(this.buttonTime);
                //0
                this.button0 = new PIXI.Sprite(btnTexture);
                this.createButton(this.button0,this.text0,'0',0,465);
                btnary.push(this.button0);
                //.
                this.buttonDot = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonDot ,this.textDot,'.',80,465);
                btnary.push(this.buttonDot);
                //=
                this.buttonEqual = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonEqual ,this.textEqual,'=',160,465);
                btnary.push(this.buttonEqual);
                // /
                this.buttonDiv = new PIXI.Sprite(btnTexture);
                this.createButton(this.buttonDiv ,this.textDiv,'/',240,465);
                btnary.push(this.buttonDiv);

                for(let i=0 ;i<btnary.length;i++){this.background.addChild(btnary[i]);}

                this.buttonclick();
            });
            
        }

        private buttonclick (){

            this.button1.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button1.name;           // ||this.firstNum != undefined
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button1.name;
                }else{
                    this.textview.text += this.button1.name;
                }

            });
            this.button2.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button2.name;
                }else if(this.result != undefined || this.textview.text ==' 0' ){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button2.name;
                }else {
                    this.textview.text += this.button2.name;
                }
            });
            this.button3.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button3.name;
                }else if(this.result != undefined || this.textview.text ==' 0' ){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button3.name;
                }else {
                    this.textview.text += this.button3.name;
                }
            });
            this.button4.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button4.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button4.name;
                }else {
                    this.textview.text += this.button4.name;
                }
            });
            this.button5.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button5.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button5.name;
                }else {
                    this.textview.text += this.button5.name;
                }
            });
            this.button6.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button6.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button6.name;
                }else {
                    this.textview.text += this.button6.name;
                }
            });
            this.button7.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button7.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button7.name;
                }else {
                    this.textview.text += this.button7.name;
                }
            });
            this.button8.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button8.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button8.name;
                }else {
                    this.textview.text += this.button8.name;
                }
            });
            this.button9.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button9.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button9.name;
                }else {
                    this.textview.text += this.button9.name;
                }
            });
            this.button0.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){//清除非數字
                    this.textview.text = '';
                    this.textview.text = this.button0.name;
                }else if(this.result != undefined || this.textview.text ==' 0'){ //如果是在運算之後 點按鈕 就先清除再顯示
                    this.textview.text ='';
                    this.textview.text +=this.button0.name;
                }else {
                    this.textview.text += this.button0.name;
                }
            });
            this.buttonDot.on('pointerdown',() => {
                if(this.textview.text == 'NaN'|| this.textview.text == '無效的結果'||this.textview.text == '無法除以0'){ //出現NaN再點數字 會清掉 再顯示
                    this.textview.text = '';
                    this.textview.text = this.buttonDot.name;
                }else if(this.textview.text.indexOf('.') == -1){  //字串中沒有出現 . 會返回-1   
                    this.textview.text += this.buttonDot.name;
                }else if(this.textview.text ==null){
                    this.textview.text = '0' + this.buttonDot.name
                }
                console.log(this.textview.text.length)//
            });

            this.buttonCE.on('pointerdown',() => {
                this.textview.text = this.textview.text.substring(0,0);
                this.textview.text = ' 0';
            });

            //加法
            this.buttonP.on('pointerdown', () => {
                if(this.firstNum == undefined){
                    this.firstNum = parseFloat(this.textview.text);
                    this.textview.text='';
                    this.math = '+';
                }else{
                    this.textview.text='';
                    this.math = '+';
                }
            });

            //減法
            this.buttonM.on('pointerdown',() => {
                if(this.firstNum == undefined){
                    this.firstNum = parseFloat(this.textview.text);
                    this.textview.text='';
                    this.math = '-';
                }else{
                    this.textview.text='';
                    this.math = '-';
                }
            });
            //乘法
            this.buttonTime.on('pointerdown',() => {
                if(this.firstNum == undefined){
                    this.firstNum = parseFloat(this.textview.text);
                    this.textview.text='';
                    this.math = '*';
                }else{
                    this.textview.text='';
                    this.math = '*';
                }
            });
            //除法
            this.buttonDiv.on('pointerdown',() => {
                if(this.firstNum == undefined){
                    this.firstNum = parseFloat(this.textview.text);
                    this.textview.text='';
                    this.math = '/';
                }else{
                    this.textview.text='';
                    this.math = '/';
                }   
            });

            this.buttonPorM.on('pointerdown',() => {
                if(this.textview.text.length == 1){     //如果是沒按數字的話
                    this.currentNumber  = this.firstNum;
                    this.emit('POSITVE_OR_NEGATIVE',this.currentNumber);
                }else{
                    this.currentNumber = parseFloat( this.textview.text);
                    this.emit('POSITVE_OR_NEGATIVE',this.currentNumber);
                }
                
            });
            //here
            //here
            //here
            this.buttonPercent.on('pointerdown',() => {   //％不是百分比的意思  是類似
                let _firstnumber : number =0;
                _firstnumber = this.firstNum;
                this.currentNumber  = parseFloat(this.textview.text);
                console.log(this.firstNum); 
                console.log(this.currentNumber);//這邊抓不到第一個數字 ？？
                console.log(_firstnumber);
                this.emit('PERCENT',{first : _firstnumber , percentage : this.currentNumber});
                
            });
            //here                                                             
            //here
            //here
            this.buttonSR.on('pointerdown',() => {
                this.currentNumber  = parseFloat(this.textview.text);
                if(this.currentNumber<0){
                    this.textview.text = '無效的輸入';
                }else{
                    this.emit('SQUARE',this.currentNumber);
                }
               
            });
            this.buttonDx.on('pointerdown',() => {
                this.currentNumber  = parseFloat(this.textview.text);
                if(this.currentNumber == 0){
                    this.textview.text = '無法除以0'
                }else{
                    this.emit('1/x',this.currentNumber);
                }
            });
            this.buttonBack.on('pointerdown',() => {
                if(this.result != undefined &&parseFloat(this.textview.text)<0){
                    this.textview.text = ' 0';
                    
                }else{
                    this.textview.text = this.textview.text.substring(0,this.textview.text.length-1);
                }
            });
        
            
            this.buttonC.on('pointerdown',() => {
                this.textview.text =" 0";
                this.result = undefined;
                this.firstNum = undefined;
                this.secondNum = undefined;
                this.math = '';
            });

            this.buttonMplus.on('pointerdown',() => {
                if(this.textview.text == 'NaN'||this.textview.text == '無效的輸入'||this.textview.text == '無法除以0'){ 
                }else{
                    this.memory = parseFloat(this.textview.text);
                    this.firstNum = this.memory;
                    this.emit('MPLUS',this.memory);
                    //this.textview.text ='';
                }
            });
            this.buttonMm.on('pointerdown',() => {
                if(this.textview.text == 'NaN'||this.textview.text == '無效的輸入'||this.textview.text == '無法除以0'){
                }else{
                    this.memory = parseFloat(this.textview.text);
                    this.emit('Mmines',this.memory);
                    //this.textview.text ='';
                }            
            });
            this.buttonMC.on('pointerdown',() => {        
                this.memory = 0;
                this.emit('Mclean');
                //this.textview.text = '0';
            });
            this.buttonMR.on('pointerdown',() => {
                this.emit('SHOW_MEMORY');
            });
            this.buttonMS.on('pointerdown',() => {
                if(this.textview.text == 'NaN'||this.textview.text == '無效的輸入'||this.textview.text == '無法除以0'){
                    
                }else{
                    this.memory = parseFloat(this.textview.text);
                    this.emit('MS',this.memory);
                    //this.textview.text = '';
                }
            });

            this.buttonEqual.on('pointerdown',() => {
            switch (this.math) {
                case '+':
                    if(this.textview.text.length == 1 ){
                        this.secondNum = this.firstNum;
                        this.emit('PLUS',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }else{
                        this.secondNum = parseFloat(this.textview.text);
                        this.emit('PLUS',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }
                    
                    //Main.eventemitter.emit()  -> 如果我要跟main用同一個emit可以這樣用 必須在main裡面設定 public static
                    break;

                case '-':
                    if(this.textview.text.length == 1 ){
                        this.secondNum = this.firstNum;
                        this.emit('MINES',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }else{
                        this.secondNum = parseFloat(this.textview.text);
                        this.emit('MINES',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }
                    break;

                case '*':
                    if(this.textview.text.length == 1 ){
                        this.secondNum = this.firstNum;
                        this.emit('TIME',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }else{
                        this.secondNum = parseFloat(this.textview.text);
                        this.emit('TIME',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }          
                    break;

                case '/':
                    this.secondNum = parseFloat(this.textview.text);
                    if(this.secondNum == 0){
                        this.textview.text = '無法除以0';
                    }else if(this.textview.text.length == 1 ){
                        this.secondNum = this.firstNum;
                        this.emit('DIV',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }else{
                        this.secondNum = parseFloat(this.textview.text);
                        this.emit('DIV',{firstNum : this.firstNum, secondNum : this.secondNum});
                    }         
                    break;      

                default:
                    break;
            }
            });
            
        }


        private createButton(button: PIXI.Sprite, text:PIXI.Text,name:string,x:number,y:number){
            button.name = name;
            button.interactive = true;
            button.buttonMode = true;
            button.x = x;
            button.y = y;
            text.x = 25;
            text.y = 15;
            button.addChild(text);
        }



    }
}