///<reference path="pixi.js.d.ts"/>
///<reference path="View.ts"/>
///<reference path="Operation.ts"/>



document.addEventListener("DOMContentLoaded", function () {
    new Main();
}, false);

class Main { 

    private view = new View.View();
    private op = new Operation.Operation();

    constructor()
    {
        this.test();
    }


    private test():void{

        //()裡放變數去接 view 所傳來的資料 這邊設 e。
        //事件'PLUS'



        this.view.on('PLUS',(e)=>{
            this.view.Textview.text = String(this.op.plus( e.firstNum,e.secondNum));
            this.view.result = this.op.plus( e.firstNum,e.secondNum);
            //this.view.getTextview("");
            //this.view.textview.text = String(this.op.plus(e.key,e.id));
        });
        //事件'MINES'

        this.view.on('MINES',(e) =>{
            this.view.Textview.text = String(this.op.mines( e.firstNum,e.secondNum))
        });


        //事件'TIME'
        this.view.on('TIME',(e)=>{
            this.view.Textview.text = String(this.op.time(e.firstNum,e.secondNum));
        })
        //事件'DIV'
        this.view.on('DIV',(e)=>{
            this.view.Textview.text = String(this.op.div(e.firstNum,e.secondNum));
        })
        //正負數事件
        this.view.on('POSITVE_OR_NEGATIVE',(e)=>{
            this.view.Textview.text = String(this.op.PorM(e));
        })
        //百分比
        this.view.on('PERCENT',(e)=>{
            this.view.Textview.text = String(this.op.percent(e.firstNum, e.percentage))
        })
        //開根號
        this.view.on('SQUARE',(e)=>{
            this.view.Textview.text = String(this.op.sr(e));
        })
        //1/x
        this.view.on('1/x',(e)=>{
            this.view.Textview.text = String(this.op.dx(e));
        })
        this.view.on('SHOW_MEMORY',()=>{
            this.view.Textview.text = String(this.op.getMemoryNumber())
        })
        this.view.on('MPLUS',(e)=>{
            this.op.MPlus(e);
        })
        this.view.on('Mmines',(e)=>{
            this.op.Mmines(e);
        })
        this.view.on('Mclean',()=>{
            this.op.MC();
        })
        this.view.on('MS',(e)=>{
            this.view.memory = this.op.Ms(e);
        })

        //想法是 把on.事件跟 callback function去當變數
        //這邊就用個判斷是去接收 看是送什麼樣的判斷過來 再傳去 on裡面
        //目前是還不知道該怎麼下手 等我處理完bug再回來
        
        
        //  試了下面那個方法 還是覺得用變數代替比較好。但是函式我就不知道該從哪下手了
        //this.view.on('PLUS MINES TIME DIV POSITIVE_OR_NEGATIVE PERCENT SQUARE 1/x SHOW_MEMORY MPLUS Mmines Mclean MS',(e)=>{})
        this.view.on('PLUS MINES TIME DIV POSITIVE_OR_NEGATIVE PERCENT SQUARE 1/x SHOW_MEMORY MPLUS Mmines Mclean MS',(e)=>{})
        


    }

}