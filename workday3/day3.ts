import { createAbstractBuilder } from "typescript";

let info= {
    name:'wen',
    age:20,
    hasPet:false
};

let someone = {
    knows: undefined,
    identify: null,
};


enum direction {
    Up = "Up",
    Down = "Down",
    Left = "left",
    Right = "Right",
}
/*function maximumWealth(accounts: number[][]): number {
    let maxwealth: number=0;
    for(let customerAccount of accounts){
        let wealth:number = 0;
        for(let account of customerAccount){
            wealth+=account;
        }
        maxwealth = Math.max(wealth,maxwealth);
    }
    return maxwealth;
};*/

function maximumWealth(accounts : number[][]) :number {
    let m :number = accounts.length;
    let n :number = accounts[0].length;
    let sum : number ;
    let maxSum : number = 0;

    for(let i = 0 ;i<m;i++){
        sum=0;
        for(let j = 0;j<n;j++){
            sum+=accounts[i][j];
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatestnum : number =0;
    let isGreatest  =[];

    for(let i = 0 ; i<candies.length ; i++){
        greatestnum = Math.max(...candies)
        if(candies[i]+extraCandies >= greatestnum){
            isGreatest.push(true);
        }else{

        }
    }    
    return isGreatest;
};



function getTotalAmount(price : number, quantity : number){
    return price * quantity;
}
let getAmount = function(price : number, quantity : number){
    return price * quantity;
}

let getMoney = (price : number, quantity : number) => {
    return price * quantity;
}

let getUpper = (str :string) =>{
    return str.toUpperCase();
}
let getName = ():string =>{
    return "wen";
} 

let getLastName = () :string =>{
    return "yi";
}

let getFirstName = function(){
    return "shih";
}



 

var MakePoint = function() {return 1;};
console.log(MakePoint());








