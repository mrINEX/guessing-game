class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.minn = min;
        this.maxx = max;
        //this.mid = Math.floor((min + max)/2);
        //console.log(this.minn+" "+this.maxx);
        //this.guess(this.minn, this.maxx)
        //this.middle = Math.floor((min + max) /2);
        //console.log(this.minn+' '+this.mid+' '+this.maxx);   //'+this.middle+'
    }
    
    guess() {
        //this.gmi = gmin;
        //this.gma = gmax;
        this.middle = Math.round((this.minn + this.maxx) /2);
        return this.middle;
    }

    lower() {
        //let middle = Math.floor((this.minn + this.maxx) /2);
        this.setRange(this.minn, this.middle);
        //if((this.minn+this.max)%2 === 0)
        //this.setRange(this.minn, middle-1);
        //else
        //this.setRange(this.minn, this.middle);
        //this.minn = this.minn; this.maxx = middle-1;
        //this.setRange(this.minn, this.maxx);
        //this.maxx = this.middle+1;
    }

    greater() {
        //let middle = Math.floor((this.minn + this.maxx) /2);
        //console.log('mid: '+this.middle+'middle: '+this.middle+1);
        //this.setRange(this.middle+1, this.maxx);
        this.setRange(this.middle, this.maxx);
        //this.minn = middle+1; this.maxx = this.maxx;
        //this.setRange(this.minn, this.maxx);
        //this.minn = this.middle;
    }
}

module.exports = GuessingGame;
