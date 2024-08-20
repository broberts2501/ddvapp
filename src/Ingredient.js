export class Ingredient    {
    constructor(name, category, buyPrice, seedPrice, sellPrice, energy, growTime, water, amount, location, sources) {
        this.name = name;
        this.category = category;
        this.buyPrice = buyPrice;
        this.seedPrice = seedPrice;
        this.sellPrice = sellPrice;
        this.energy = energy;
        this.growTime = growTime;
        this.water = water;
        this.amount = amount;
        this.location = location;
        this.sources = sources;
        
        //this.location = location.slice();
        //this.sources = sources.slice();
        this.location = location.map((x) => x);
        this.sources = sources.map((x) => x);
    }

    printIngredientsProfit() {
        let profit = null;
        profit = this.sellPrice - this.buyPrice;
        console.log(profit)

    } 

    printIngredientGrowProfit() {

        let profit = null;
        profit = this.sellPrice - this.seedPrice;
        console.log(profit)

    }
    
    IngredientsProfit() {
        let profit = null;
        profit = this.sellPrice - this.buyPrice;
        return profit;

    } 

    IngredientGrowProfit() {

        let profit = null;
        profit = this.sellPrice - this.seedPrice;
        return profit;

    }

    seedPriceValue () {

      let price = 0;

      if (this.seedPrice = undefined) {
          price = 0;
      }
      else price = this.seedPrice;

      return price;
    }

}