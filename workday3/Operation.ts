///<reference path="Main.ts"/>




namespace Operation{
    export class Operation{

        private memoryNumber :number = 0;
        

        public plus(firstNum:number, secondNum:number) :number {
            return (firstNum + secondNum);
        }
        public mines(firstNum:number, secondNum:number) :number{
            return firstNum - secondNum;
        }
        public time(firstNum : number, secondNum : number) :number{
            return firstNum * secondNum;
        }
        public div(firstNum : number, secondNum : number) :number{
            return firstNum / secondNum;
        }

        

        public percent(firstNum:number ,percentage : number):number{ // 100+20% 會得到120這樣
            console.log(firstNum , percentage /100);
            return firstNum * percentage /100;
            
        }
        public sr(current : number):number{ // 負數不能
            return Math.sqrt(current);
        }

        public dx(current : number):number{  
            return 1/current;
        }

        public PorM(current : number):number{
            return current*-1;
        }

        public MPlus(memoryNumber:number):void{
            this.memoryNumber += memoryNumber;
        }
        public Mmines(memoryNumber:number):void{
            this.memoryNumber -= memoryNumber;
        }

        public MC():void{
            this.memoryNumber=0;
        }

        public getMemoryNumber():number{
            return this.memoryNumber;
        }
        public Ms(memoryNumber:number):number{
            this.memoryNumber = memoryNumber;
            return this.memoryNumber;
        }
    }
}   