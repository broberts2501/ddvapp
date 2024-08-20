class Receipe {
    constructor(name, category, sellsFor, energy, ingredients, stars)   {
        this.name = name;
        this.category = category;
        this.sellsFor = sellsFor;
        this.energy = energy;
        this.ingredients = ingredients.map((x) => x);
        this.stars = stars;
    }

    receipeCost() {
        
        let cost = null;
        console.log(this.ingredients)
        
        for(let i=0; i<(this.ingredients.length); i++) {

            console.log(this.ingredients[i]);
            let x = allIngredients.find(e => (e.name === this.ingredients[i]))
            console.log(x)
            //console.log(allIngredients[]);

            cost = cost + x.seedPrice;
        }
        return cost; 
        
       
      

    }

    receipeProfit(recIngredients, globalIng) {
        return (this.sellsFor - this.RecipeCost(recIngredients, globalIng))
    }


    RecipeCost(recIngredients, globalIng) {
        
      let cost = 0;
      let BP = 0;
      //console.log(recIngredients)
     // console.log(`All Ing from Recipe Cost: ${allIngredients}`);
     //console.log(globalIng);
      
      for(let i=0; i<(recIngredients.length); i++) {

          let ing = [];
          //console.log(allIngredients.length)

         //console.log(recIngredients[i].trim());
         //console.log(typeof(recIngredients[i])) ;
         //console.log(globalIng.[i].Name);
          //console.log(recIngredients[i].ingredients)
          let recIngName = recIngredients[i].trim();
          //
          console.log(recIngName);
          let x = globalIng.find((globalIng) => (globalIng.Name === recIngName))
         console.log(x);
          console.log(typeof(x));


          console.log(x.Name);
          if (x.BuyPrice == 'n/a') {
            BP = 0;
          }
          else { BP = Number(x.BuyPrice);}
          console.log(BP);
          console.log(`\n`)
          if (x.BuyPrice != null) {

          cost = cost + BP;
          
          }
          
      }  
      return cost; 
      
     
    

  }
}

class Ingredient    {
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


function importIng(ing) {

   let listOfIng = [];
   let counter = 0

   for (let i = 0; i < ing.length; i++) {

       
       //console.log(ing.length);
       //console.log(ing[i].Name);
       //console.log(typeof(mealsList[i].Ingred.Ingredients));
       //console.log(mealsList[i].Ingred);
       //console.log(mealsIng);

       if (ing[i].Name != null) {
           
           const nameTrim = ing[i].Name;
           console (typeof(nameTrim));
           //console.log(ing[i].Name);
           //listOfIng[counter] = new Ingredient(nameTrim, ing[i].Category, ing[i].BuyPrice, null, ing[i].SellPrice, ing[i].Energy, ing[i].GrowTime, ing[i].Water, ing[i].Yield, [], []) ;
           counter++;
       }
       
       


       
       //console.log(listOfMeals[i].ingredients);
       //console.log(mealsIng);
       //let profit = listOfMeals[i].RecipeCost();
       //console.log(profit);

       //console.log(listOfIng);
       return listOfIng;
   }

   //console.log(listOfIng);


}


let ingredientJSON = `[
    {
      "Image": null,
      "Name": null,
      "Category": "Category",
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Asparagus",
      "Category": " Vegetables",
      "BuyPrice": " 200",
      "SellPrice": 133,
      "Energy": 42,
      "GrowTime": " 2 h 15 m",
      "Water": "2",
      "Yield": "3",
      "Location": " Frosted Heights",
      "Sources": " Asparagus Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Bell Pepper",
      "Category": " Vegetables",
      "BuyPrice": " 50",
      "SellPrice": 33,
      "Energy": 79,
      "GrowTime": " 15 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Forest of Valor",
      "Sources": " Bell Pepper Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Carrot",
      "Category": " Vegetables",
      "BuyPrice": " 66",
      "SellPrice": 44,
      "Energy": 57,
      "GrowTime": " 15 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Peaceful Meadow",
      "Sources": " Carrot Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Chili Pepper",
      "Category": " Vegetables",
      "BuyPrice": " 117",
      "SellPrice": 78,
      "Energy": 140,
      "GrowTime": " 45 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Sunlit Plateau",
      "Sources": " Chili Pepper Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Corn",
      "Category": " Vegetables",
      "BuyPrice": " 24",
      "SellPrice": 16,
      "Energy": 30,
      "GrowTime": " 12 m",
      "Water": "1",
      "Yield": "2",
      "Location": " Dazzle Beach",
      "Sources": " Corn Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Cucumber",
      "Category": " Vegetables",
      "BuyPrice": " 239",
      "SellPrice": 159,
      "Energy": 145,
      "GrowTime": " 1 h 15 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Frosted Heights",
      "Sources": " Cucumber Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Eggplant",
      "Category": " Vegetables",
      "BuyPrice": " 462",
      "SellPrice": 308,
      "Energy": 451,
      "GrowTime": " 3 h",
      "Water": "2",
      "Yield": "1",
      "Location": " Frosted Heights",
      "Sources": " Eggplant Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Leek",
      "Category": " Vegetables",
      "BuyPrice": " 464",
      "SellPrice": 309,
      "Energy": 228,
      "GrowTime": " 2 h",
      "Water": "2",
      "Yield": "1",
      "Location": " Forgotten Lands",
      "Sources": " Leek Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Lettuce",
      "Category": " Vegetables",
      "BuyPrice": " 12",
      "SellPrice": 8,
      "Energy": 56,
      "GrowTime": " 3 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Peaceful Meadow",
      "Sources": " Lettuce Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Mushroom",
      "Category": " Vegetables",
      "BuyPrice": "n/a",
      "SellPrice": 30,
      "Energy": 105,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Glade of Trust",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Okra",
      "Category": " Vegetables",
      "BuyPrice": " 171",
      "SellPrice": 114,
      "Energy": 31,
      "GrowTime": " 2 h",
      "Water": "1",
      "Yield": "3",
      "Location": " Glade of Trust",
      "Sources": " Okra Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Onion",
      "Category": " Vegetables",
      "BuyPrice": " 255",
      "SellPrice": 170,
      "Energy": 146,
      "GrowTime": " 1 h 15 m",
      "Water": "2",
      "Yield": "1",
      "Location": " Forest of Valor",
      "Sources": " Onion Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Potato",
      "Category": " Vegetables",
      "BuyPrice": " 189",
      "SellPrice": 126,
      "Energy": 113,
      "GrowTime": " 35 m",
      "Water": "3",
      "Yield": "1",
      "Location": " Forgotten Lands",
      "Sources": " Potato Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Pumpkin",
      "Category": " Vegetables",
      "BuyPrice": " 996",
      "SellPrice": 664,
      "Energy": 187,
      "GrowTime": " 4 h",
      "Water": "2",
      "Yield": "1",
      "Location": " Forgotten Lands",
      "Sources": " Pumpkin Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Spinach",
      "Category": " Vegetables",
      "BuyPrice": " 62",
      "SellPrice": 41,
      "Energy": 60,
      "GrowTime": " 1 h",
      "Water": "2",
      "Yield": "3",
      "Location": " Glade of Trust",
      "Sources": " Spinach Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Tomato",
      "Category": " Vegetables",
      "BuyPrice": " 33",
      "SellPrice": 22,
      "Energy": 21,
      "GrowTime": " 25 m",
      "Water": "2",
      "Yield": "3",
      "Location": " Dazzle Beach",
      "Sources": " Tomato Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Zucchini",
      "Category": " Vegetables",
      "BuyPrice": " 78",
      "SellPrice": 52,
      "Energy": 48,
      "GrowTime": " 40 m",
      "Water": "2",
      "Yield": "2",
      "Location": " Sunlit Plateau",
      "Sources": " Zucchini Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Apple",
      "Category": " Fruit",
      "BuyPrice": " 50",
      "SellPrice": 25,
      "Energy": 300,
      "GrowTime": " 20 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Apple Tree:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Forgotten Lands",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Plaza",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Banana",
      "Category": " Fruit",
      "BuyPrice": " 58",
      "SellPrice": 29,
      "Energy": 350,
      "GrowTime": " 23 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Banana Tree:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Peaceful Meadow",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Dazzle Beach",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Moana Realm",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Blueberry",
      "Category": " Fruit",
      "BuyPrice": " 58",
      "SellPrice": 29,
      "Energy": 350,
      "GrowTime": " 23 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Blueberry Bush:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Forest of Valor",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Dazzle Beach",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Cherry",
      "Category": " Fruit",
      "BuyPrice": " 83",
      "SellPrice": 42,
      "Energy": 500,
      "GrowTime": " 33 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Cherry Tree:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Frosted Heights",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Sunlit Plateau",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Coconut",
      "Category": " Fruit",
      "BuyPrice": "n/a",
      "SellPrice": 42,
      "Energy": 500,
      "GrowTime": " 23 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Coconut Tree:",
      "Sources": "After  Burying the Eel "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Dazzle Beach",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Moana Realm",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Coffee Bean",
      "Category": " Fruit",
      "BuyPrice": "n/a",
      "SellPrice": 36,
      "Energy": 425,
      "GrowTime": " 40 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Coffee Bush:",
      "Sources": "After  Very Sleepy Stitch "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Glade of Trust",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Dreamlight Fruit",
      "Category": " Fruit",
      "BuyPrice": "n/a",
      "SellPrice": 40,
      "Energy": 500,
      "GrowTime": " 1 d",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Dreamlight Tree:",
      "Sources": "After  Seed of Memories "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Sunlit Plateau",
      "Sources": null
    },
    {
      "Image": " Dreamlight Tree:",
      "Name": "After  The Dreamlight Grove ",
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "   ",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": " Glade of Trust",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "   ",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": " Frosted Heights",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "   ",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": " Forgotten Lands",
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Gooseberry",
      "Category": " Fruit",
      "BuyPrice": " 100",
      "SellPrice": 50,
      "Energy": 600,
      "GrowTime": " 40 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Gooseberry Bush:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Frosted Heights",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Forgotten Lands",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Lemon",
      "Category": " Fruit",
      "BuyPrice": " 67",
      "SellPrice": 33,
      "Energy": 400,
      "GrowTime": " 27 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Lemon Tree:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Forest of Valor",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Glade of Trust",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Raspberry",
      "Category": " Fruit",
      "BuyPrice": "n/a",
      "SellPrice": 21,
      "Energy": 275,
      "GrowTime": " 17 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Raspberry Bush:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Plaza",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Peaceful Meadow",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Rice",
      "Category": " Grains",
      "BuyPrice": " 92",
      "SellPrice": 61,
      "Energy": 59,
      "GrowTime": " 50 m",
      "Water": "2",
      "Yield": "2",
      "Location": " Glade of Trust",
      "Sources": " Rice Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Wheat",
      "Category": " Grains",
      "BuyPrice": " 3",
      "SellPrice": 2,
      "Energy": 19,
      "GrowTime": " 1 m",
      "Water": "1",
      "Yield": "2",
      "Location": " Peaceful Meadow",
      "Sources": " Wheat Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Butter",
      "Category": " Dairy and Oil",
      "BuyPrice": " 190",
      "SellPrice": 190,
      "Energy": 285,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  A Restaurant Makeover "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Canola",
      "Category": " Dairy and Oil",
      "BuyPrice": " 164",
      "SellPrice": 109,
      "Energy": 59,
      "GrowTime": " 35 m",
      "Water": "3",
      "Yield": "1",
      "Location": " Forest of Valor",
      "Sources": " Canola Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Cheese",
      "Category": " Dairy and Oil",
      "BuyPrice": " 180",
      "SellPrice": 180,
      "Energy": 270,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  A Restaurant Makeover "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Egg",
      "Category": " Dairy and Oil",
      "BuyPrice": " 220",
      "SellPrice": 220,
      "Energy": 330,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  A Restaurant Makeover "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Milk",
      "Category": " Dairy and Oil",
      "BuyPrice": " 230",
      "SellPrice": 230,
      "Energy": 345,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  A Restaurant Makeover "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Peanut",
      "Category": " Dairy and Oil",
      "BuyPrice": " 200",
      "SellPrice": 200,
      "Energy": 300,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  Remy's Recipe Book "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Soya",
      "Category": " Dairy and Oil",
      "BuyPrice": " 104",
      "SellPrice": 69,
      "Energy": 58,
      "GrowTime": " 1 h 30 m",
      "Water": "2",
      "Yield": "3",
      "Location": " Sunlit Plateau",
      "Sources": " Soya Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Basil",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 100,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Peaceful Meadow",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Garlic",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 135,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Forest of Valor",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Ginger",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 175,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Forgotten Lands",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Mint",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 155,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Frosted Heights",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Oregano",
      "Category": " Spices",
      "BuyPrice": 0,
      "SellPrice": 50,
      "Energy": 95,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Plaza",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Cocoa Bean",
      "Category": " Sweets",
      "BuyPrice": " 75",
      "SellPrice": 38,
      "Energy": 450,
      "GrowTime": " 30 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Cacao Tree:",
      "Sources": " Goofy's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Sunlit Plateau",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": "   ",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Glade of Trust",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Sugarcane",
      "Category": " Sweets",
      "BuyPrice": " 29",
      "SellPrice": 19,
      "Energy": 46,
      "GrowTime": " 7 m",
      "Water": "1",
      "Yield": "1",
      "Location": " Dazzle Beach",
      "Sources": " Sugarcane Seed"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": " Goofy's Stall"
    },
    {
      "Image": "Picture",
      "Name": "Vanilla",
      "Category": " Sweets",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 135,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "10 (max spawn)",
      "Location": " Sunlit Plateau",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Slush Ice",
      "Category": " Ice",
      "BuyPrice": " 150",
      "SellPrice": 150,
      "Energy": 225,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Chez Remy",
      "Sources": "After  The Unknown Flavor "
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Clam",
      "Category": " Seafood",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 120,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "5 (max spawn)",
      "Location": " Dazzle Beach",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Oyster",
      "Category": " Seafood",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 250,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "4 (max spawn)",
      "Location": " Dazzle Beach",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Scallop",
      "Category": " Seafood",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 125,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "4 (max spawn)",
      "Location": " Dazzle Beach",
      "Sources": " Foraging"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Bamboo",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 80,
      "Energy": 155,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Beans",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 49,
      "Energy": 41,
      "GrowTime": " 1 h",
      "Water": null,
      "Yield": "3",
      "Location": " Glittering Dunes",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Broccoli",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 152,
      "Energy": 73,
      "GrowTime": " 40 m",
      "Water": null,
      "Yield": "1",
      "Location": " Glittering Dunes",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Cabbage",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 256,
      "Energy": 142,
      "GrowTime": " 1 h",
      "Water": null,
      "Yield": "1",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Celery",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 65,
      "Energy": 60,
      "GrowTime": " 10 m",
      "Water": null,
      "Yield": "1",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Flute Root",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 112,
      "Energy": 46,
      "GrowTime": " 10 m",
      "Water": null,
      "Yield": "2",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Ruby Lentils",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 156,
      "Energy": 37,
      "GrowTime": " 2 h",
      "Water": null,
      "Yield": "3",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Turnip",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 187,
      "Energy": 263,
      "GrowTime": " 4 h",
      "Water": null,
      "Yield": "2",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Yam",
      "Category": " Vegetables",
      "BuyPrice": null,
      "SellPrice": 36,
      "Energy": 83,
      "GrowTime": " 4 h",
      "Water": null,
      "Yield": "1",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Almonds",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 42,
      "Energy": 500,
      "GrowTime": " 50 m",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Cactoberries",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 34,
      "Energy": 400,
      "GrowTime": " 45 m",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Glittering Dunes",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Cosmic Figs",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 22,
      "Energy": 52,
      "GrowTime": " 25 m",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Dates",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 29,
      "Energy": 350,
      "GrowTime": " 55 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Glittering Dunes",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Dreamango",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 50,
      "Energy": 600,
      "GrowTime": " 1 h",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Grapes",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 9,
      "Energy": 21,
      "GrowTime": " 20 m",
      "Water": "n/a",
      "Yield": "3",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Melon",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 93,
      "Energy": 88,
      "GrowTime": " 30 m",
      "Water": "n/a",
      "Yield": "1",
      "Location": " Glittering Dunes",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Nestling Pear",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 25,
      "Energy": 300,
      "GrowTime": " 35 m",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Pineapple",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 532,
      "Energy": 168,
      "GrowTime": " 3 h",
      "Water": "n/a",
      "Yield": "1",
      "Location": " Wild Tangle",
      "Sources": null
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Strawberry",
      "Category": " Fruit",
      "BuyPrice": null,
      "SellPrice": 23,
      "Energy": 275,
      "GrowTime": " 30 m",
      "Water": "n/a",
      "Yield": "2",
      "Location": " Ancient's Landing",
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Pork",
      "Category": " Protein",
      "BuyPrice": " 250",
      "SellPrice": 250,
      "Energy": 250,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Glittering Dunes",
      "Sources": "Gaston's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Poultry",
      "Category": " Protein",
      "BuyPrice": " 500",
      "SellPrice": 500,
      "Energy": 250,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Glittering Dunes",
      "Sources": "Gaston's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Venison",
      "Category": " Protein",
      "BuyPrice": " 1,000",
      "SellPrice": 500,
      "Energy": 250,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": "n/a",
      "Location": " Glittering Dunes",
      "Sources": "Gaston's Stall"
    },
    {
      "Image": null,
      "Name": null,
      "Category": null,
      "BuyPrice": null,
      "SellPrice": null,
      "Energy": null,
      "GrowTime": null,
      "Water": null,
      "Yield": null,
      "Location": null,
      "Sources": null
    },
    {
      "Image": "Picture",
      "Name": "Agave",
      "Category": " Sweets",
      "BuyPrice": "n/a",
      "SellPrice": 25,
      "Energy": 100,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": null,
      "Location": " Glittering Dunes",
      "Sources": " Foraging"
    },
    {
      "Image": "Picture",
      "Name": "Cinnamon",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 30,
      "Energy": 155,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": null,
      "Location": " Wild Tangle",
      "Sources": " Foraging"
    },
    {
      "Image": "Picture",
      "Name": "Cumin",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 15,
      "Energy": 90,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": null,
      "Location": " Ancient's Landing",
      "Sources": " Foraging"
    },
    {
      "Image": "Picture",
      "Name": "Majestea",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 30,
      "Energy": 105,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": null,
      "Location": " Ancient's Landing",
      "Sources": " Foraging"
    },
    {
      "Image": "Picture",
      "Name": "Paprika",
      "Category": " Spices",
      "BuyPrice": "n/a",
      "SellPrice": 50,
      "Energy": 125,
      "GrowTime": "n/a",
      "Water": "n/a",
      "Yield": null,
      "Location": " Glittering Dunes",
      "Sources": " Foraging"
    }
   ]`  ;

let ingredientList = JSON.parse(ingredientJSON);   

let mealsJSON = `[
    {
      "Name": "Arendellian Pickled Herring",
      "Type": " Appetizers",
      "Stars": "★★★★★",
      "Energy": "2,092",
      "SellPrice": "532",
      "Ingred": {
         "Ingredients": " Herring | Lemon | Onion | Garlic | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Bell Pepper Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,272",
      "SellPrice": "606",
      "Ingred": {
         "Ingredients": " Bell Pepper | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Buñuelos",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,881",
      "SellPrice": "948",
      "Ingred": {
         "Ingredients": " Wheat | Cheese | Milk | Egg"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Cheese Platter",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "482",
      "SellPrice": "216",
      "Ingred": {
         "Ingredients": " Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chili Pepper Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,382",
      "SellPrice": "669",
      "Ingred": {
         "Ingredients": " Chili Pepper | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chrysanthemum Tea",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "644",
      "SellPrice": "69",
      "Ingred": {
         "Ingredients": " Chrysanthemum Tea Leaves | Blueberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Coffee",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "730",
      "SellPrice": "43",
      "Ingred": {
         "Ingredients": " Coffee Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Crackers",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "80",
      "SellPrice": "2",
      "Ingred": {
         "Ingredients": " Any Grain"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Creamy Soup",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,129",
      "SellPrice": "568",
      "Ingred": {
         "Ingredients": " Any Spice | Milk | Potato | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Crudités",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "83",
      "SellPrice": "26",
      "Ingred": {
         "Ingredients": " Any Vegetable | Bell Pepper | Carrot | Cucumber | Mushroom | Zucchini"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Dream Fizz",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,550",
      "SellPrice": "316",
      "Ingred": {
         "Ingredients": " Dreamlight Fruit | Sugarcane | Wheat | Slush Ice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Eggplant Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,941",
      "SellPrice": "991",
      "Ingred": {
         "Ingredients": " Eggplant | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "French Fries",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "342",
      "SellPrice": "304",
      "Ingred": {
         "Ingredients": " Canola | Potato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Gazpacho",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "821",
      "SellPrice": "556",
      "Ingred": {
         "Ingredients": " Cucumber | Tomato | Onion | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Green Salad",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "180",
      "SellPrice": "20",
      "Ingred": {
         "Ingredients": " Any Vegetable | Lettuce"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Grilled Vegetables",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "83",
      "SellPrice": "9",
      "Ingred": {
         "Ingredients": " Any Vegetable | Asparagus | Bamboo | Broccoli | Cabbage' | Celery | Chili Pepper | Corn | Eggplant | Flute Root | Onion | Pumpkin | Seaweed | Spinach | Turnip | Yam"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Grilled Veggie Platter",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "161",
      "SellPrice": "33",
      "Ingred": {
         "Ingredients": " Any Vegetable | Any Vegetable | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Hard-Boiled Eggs",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "578",
      "SellPrice": "264",
      "Ingred": {
         "Ingredients": " Egg"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Jasmine Tea",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "127",
      "SellPrice": "56",
      "Ingred": {
         "Ingredients": " Jasmine Tea Leaves | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Large Seafood Platter",
      "Type": " Appetizers",
      "Stars": "★★★★★",
      "Energy": "1,810",
      "SellPrice": "2",
      "Ingred": {
         "Ingredients": " Any Seafood | Any Seafood | Any Seafood | Any Seafood | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Latte",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "1,358",
      "SellPrice": "345",
      "Ingred": {
         "Ingredients": " Coffee Bean | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mocha",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "2,246",
      "SellPrice": "425",
      "Ingred": {
         "Ingredients": " Coffee Bean | Milk | Cocoa Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Okra Soup",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "99",
      "SellPrice": "136",
      "Ingred": {
         "Ingredients": " Okra"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Onion Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,392",
      "SellPrice": "798",
      "Ingred": {
         "Ingredients": " Onion | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Oolong Tea",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "516",
      "SellPrice": "59",
      "Ingred": {
         "Ingredients": " Oolong Tea Leaves | Raspberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Oyster Platter",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "1,155",
      "SellPrice": "107",
      "Ingred": {
         "Ingredients": " Oyster | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Peppermint Tea",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "993",
      "SellPrice": "107",
      "Ingred": {
         "Ingredients": " Lemon | Mint"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pickled Herring",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,733",
      "SellPrice": "423",
      "Ingred": {
         "Ingredients": " Herring | Lemon | Onion | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Potato Leek Soup",
      "Type": " Appetizers",
      "Stars": "★★★★★",
      "Energy": "1,984",
      "SellPrice": "1,415",
      "Ingred": {
         "Ingredients": " Leek | Potato | Milk | Onion | Garlic"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Potato Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,333",
      "SellPrice": "736",
      "Ingred": {
         "Ingredients": " Potato | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pottage",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "452",
      "SellPrice": "208",
      "Ingred": {
         "Ingredients": " Potato | Any Spice | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pumpkin Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,466",
      "SellPrice": "1,489",
      "Ingred": {
         "Ingredients": " Pumpkin | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pumpkin Soup",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,431",
      "SellPrice": "1,428",
      "Ingred": {
         "Ingredients": " Any Vegetable | Milk | Ginger | Pumpkin"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Purée",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "230",
      "SellPrice": "151",
      "Ingred": {
         "Ingredients": " Potato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Roasted Asparagus",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "221",
      "SellPrice": "313",
      "Ingred": {
         "Ingredients": " Asparagus | Canola"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Salad",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "139",
      "SellPrice": "9",
      "Ingred": {
         "Ingredients": " Lettuce"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sautéed Mushrooms",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "712",
      "SellPrice": "286",
      "Ingred": {
         "Ingredients": " Mushroom | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Appetizer",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "242",
      "SellPrice": "1",
      "Ingred": {
         "Ingredients": " Any Seafood"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Platter",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "458",
      "SellPrice": "116",
      "Ingred": {
         "Ingredients": " Any Seafood | Any Seafood"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sesame Balls",
      "Type": " Appetizers",
      "Stars": "★★★★★",
      "Energy": "722",
      "SellPrice": "322",
      "Ingred": {
         "Ingredients": " Wheat | Ginger | Rice | Soya | Seaweed"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Soufflé",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "2,386",
      "SellPrice": "1,230",
      "Ingred": {
         "Ingredients": " Cheese | Egg | Milk | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sweet Herring",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "723",
      "SellPrice": "305",
      "Ingred": {
         "Ingredients": " Herring | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tomato Soup",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "83",
      "SellPrice": "26",
      "Ingred": {
         "Ingredients": " Tomato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Vegetable Soup",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "120",
      "SellPrice": "20",
      "Ingred": {
         "Ingredients": " Any Vegetable | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Zucchini Puffs",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "1,216",
      "SellPrice": "632",
      "Ingred": {
         "Ingredients": " Zucchini | Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Apple-Cider-Glazed Salmon",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,572",
      "SellPrice": "271",
      "Ingred": {
         "Ingredients": " Salmon | Sugarcane | Apple"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Baked Carp",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "1,894",
      "SellPrice": "767",
      "Ingred": {
         "Ingredients": " Carp | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Basil Omelet",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "2,035",
      "SellPrice": "1,020",
      "Ingred": {
         "Ingredients": " Basil | Egg | Cheese | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Bouillabaisse",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,114",
      "SellPrice": "529",
      "Ingred": {
         "Ingredients": " Any Seafood | Any Seafood | Shrimp | Tomato | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Carp Salad",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "2,310",
      "SellPrice": "617",
      "Ingred": {
         "Ingredients": " Carp | Lemon | Lettuce"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Cheesy Crispy Baked Cod",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "840",
      "SellPrice": "303",
      "Ingred": {
         "Ingredients": " Cod | Wheat | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chowder",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,186",
      "SellPrice": "547",
      "Ingred": {
         "Ingredients": " Any Seafood | Milk | Potato | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Creamy Garlic Scallops",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,844",
      "SellPrice": "484",
      "Ingred": {
         "Ingredients": " Scallop | Lemon | Butter | Garlic"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Crispy Baked Cod",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "337",
      "SellPrice": "47",
      "Ingred": {
         "Ingredients": " Cod | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Creole",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "822",
      "SellPrice": "225",
      "Ingred": {
         "Ingredients": " Any Fish | Any Vegetable | Garlic | Rice | Tomato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish 'n' Chips",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "697",
      "SellPrice": "356",
      "Ingred": {
         "Ingredients": " Any Fish | Wheat | Canola | Potato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Pasta",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,282",
      "SellPrice": "424",
      "Ingred": {
         "Ingredients": " Any Fish | Garlic | Wheat | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Pie",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "867",
      "SellPrice": "269",
      "Ingred": {
         "Ingredients": " Any Fish | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Risotto",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "939",
      "SellPrice": "352",
      "Ingred": {
         "Ingredients": " Any Fish | Rice | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Salad",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,140",
      "SellPrice": "58",
      "Ingred": {
         "Ingredients": " Any Fish | Lemon | Lettuce"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Sandwich",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "337",
      "SellPrice": "3",
      "Ingred": {
         "Ingredients": " Any Fish | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Soup",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "978",
      "SellPrice": "334",
      "Ingred": {
         "Ingredients": " Any Fish | Any Vegetable | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Steak",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "537",
      "SellPrice": "101",
      "Ingred": {
         "Ingredients": " Any Fish | Tomato | Basil"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fish Tacos",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,171",
      "SellPrice": "412",
      "Ingred": {
         "Ingredients": " Any Fish | Corn | Chili Pepper | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fugu Sushi",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "3,261",
      "SellPrice": "1,373",
      "Ingred": {
         "Ingredients": " Fugu | Rice | Seaweed"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Ghostly Fish Steak",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "3,282",
      "SellPrice": "3,548",
      "Ingred": {
         "Ingredients": " Here and There Fish | Lemon | Asparagus | Bell Pepper | Oregano"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Greek Pizza",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,142",
      "SellPrice": "622",
      "Ingred": {
         "Ingredients": " Any Spice | Tomato | Onion | Cheese | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Grilled Fish",
      "Type": " Entrées",
      "Stars": "★☆☆☆☆",
      "Energy": "290",
      "SellPrice": "1",
      "Ingred": {
         "Ingredients": " Any Fish"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Grilled Fish Entree",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "340",
      "SellPrice": "11",
      "Ingred": {
         "Ingredients": " Any Fish | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Gumbo",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,226",
      "SellPrice": "1,093",
      "Ingred": {
         "Ingredients": " Okra | Shrimp | Chili Pepper | Tomato | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Hearty Salad",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "224",
      "SellPrice": "33",
      "Ingred": {
         "Ingredients": " Any Vegetable | Lettuce | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Hors d'Oeuvres",
      "Type": " Entrées",
      "Stars": "★☆☆☆☆",
      "Energy": "194",
      "SellPrice": "18",
      "Ingred": {
         "Ingredients": " Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Kappa Maki",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "462",
      "SellPrice": "335",
      "Ingred": {
         "Ingredients": " Seaweed | Cucumber | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Kronk's Spinach Puffs",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "750",
      "SellPrice": "461",
      "Ingred": {
         "Ingredients": " Spinach | Cheese | Canola"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Lancetfish Paella",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "4,550",
      "SellPrice": "1,653",
      "Ingred": {
         "Ingredients": " Lancetfish | Shrimp | Any Seafood | Tomato | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Leek Soup",
      "Type": " Entrées",
      "Stars": "★☆☆☆☆",
      "Energy": "414",
      "SellPrice": "370",
      "Ingred": {
         "Ingredients": " Leek"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Lemon Garlic Swordfish",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "3,713",
      "SellPrice": "1,096",
      "Ingred": {
         "Ingredients": " Swordfish | Garlic | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Lioness Feast",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "2,368",
      "SellPrice": "3,108",
      "Ingred": {
         "Ingredients": " Mushroom | Tomato | Oregano | Here and There Fish"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Lobster Roll",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "4,928",
      "SellPrice": "1,959",
      "Ingred": {
         "Ingredients": " Lobster | Wheat | Lemon | Butter | Garlic"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Maguro Sushi",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,206",
      "SellPrice": "338",
      "Ingred": {
         "Ingredients": " Tuna | Seaweed | Rice | Ginger"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Maki",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "471",
      "SellPrice": "114",
      "Ingred": {
         "Ingredients": " Any Fish | Seaweed | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Margherita Pizza",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "809",
      "SellPrice": "328",
      "Ingred": {
         "Ingredients": " Any Spice | Tomato | Cheese | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Marvelous Jam",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "932",
      "SellPrice": "54",
      "Ingred": {
         "Ingredients": " Dreamlight Fruit | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mediterranean Salad",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "966",
      "SellPrice": "597",
      "Ingred": {
         "Ingredients": " Cucumber | Tomato | Onion | Lettuce | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mushroom Pizza",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "837",
      "SellPrice": "351",
      "Ingred": {
         "Ingredients": " Mushroom | Wheat | Tomato | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mushu's Congee",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,658",
      "SellPrice": "657",
      "Ingred": {
         "Ingredients": " Rice | Egg | Mushroom | Garlic | Ginger"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Omelet",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,751",
      "SellPrice": "882",
      "Ingred": {
         "Ingredients": " Egg | Cheese | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pan-Fried Angler Fish",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "4,194",
      "SellPrice": "2,550",
      "Ingred": {
         "Ingredients": " Anglerfish | Tomato | Zucchini | Potato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pan-Seared Bass & Vegetables",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "394",
      "SellPrice": "57",
      "Ingred": {
         "Ingredients": " Bass | Any Vegetable | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pan-Seared Tilapia & Vegetables",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "2,194",
      "SellPrice": "862",
      "Ingred": {
         "Ingredients": " Tilapia | Any Vegetable | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pasta",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "117",
      "SellPrice": "30",
      "Ingred": {
         "Ingredients": " Wheat | Tomato"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Peanut Butter Sandwich",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "592",
      "SellPrice": "262",
      "Ingred": {
         "Ingredients": " Peanut | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pizza",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "607",
      "SellPrice": "284",
      "Ingred": {
         "Ingredients": " Tomato | Cheese | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Poached Basil-Butter Sturgeon",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "4,961",
      "SellPrice": "2,284",
      "Ingred": {
         "Ingredients": " White Sturgeon | Basil | Lemon | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Porridge",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "668",
      "SellPrice": "301",
      "Ingred": {
         "Ingredients": " Milk | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Porridge with Fruits",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "742",
      "SellPrice": "336",
      "Ingred": {
         "Ingredients": " Milk | Wheat | Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Ranch Salad",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "714",
      "SellPrice": "396",
      "Ingred": {
         "Ingredients": " Lettuce | Bell Pepper | Corn | Tomato | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Ratatouille",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,562",
      "SellPrice": "906",
      "Ingred": {
         "Ingredients": " Tomato | Eggplant | Onion | Zucchini | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sake Maki",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,101",
      "SellPrice": "323",
      "Ingred": {
         "Ingredients": " Rice | Seaweed | Salmon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sake Sushi",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "1,000",
      "SellPrice": "274",
      "Ingred": {
         "Ingredients": " Salmon | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Savory Fish",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "985",
      "SellPrice": "43",
      "Ingred": {
         "Ingredients": " Any Fish | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Scrambled Egg",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "1,070",
      "SellPrice": "520",
      "Ingred": {
         "Ingredients": " Egg | Cheese"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Pasta",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "921",
      "SellPrice": "325",
      "Ingred": {
         "Ingredients": " Any Seafood | Wheat | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Pie",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "813",
      "SellPrice": "269",
      "Ingred": {
         "Ingredients": " Any Seafood | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Salad",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "349",
      "SellPrice": "11",
      "Ingred": {
         "Ingredients": " Any Seafood | Lettuce"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seafood Soup",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "340",
      "SellPrice": "23",
      "Ingred": {
         "Ingredients": " Any Seafood | Any Vegetable | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Seared Rainbow Trout",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "889",
      "SellPrice": "338",
      "Ingred": {
         "Ingredients": " Rainbow Trout | Tomato | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Simple Fried Perch",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,317",
      "SellPrice": "380",
      "Ingred": {
         "Ingredients": " Perch | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Smoked Peanuts and Anglerfish",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "3,960",
      "SellPrice": "2,210",
      "Ingred": {
         "Ingredients": " Anglerfish | Peanut"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sole Meunière",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "2,337",
      "SellPrice": "637",
      "Ingred": {
         "Ingredients": " Sole | Wheat | Butter | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spaghetti Arrabbiata",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "373",
      "SellPrice": "141",
      "Ingred": {
         "Ingredients": " Tomato | Wheat | Chili Pepper"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spicy Baked Bream",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "2,075",
      "SellPrice": "767",
      "Ingred": {
         "Ingredients": " Bream | Chili Pepper | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Steamed Fugu",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "3,668",
      "SellPrice": "1,400",
      "Ingred": {
         "Ingredients": " Fugu | Ginger | Garlic"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sushi",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "405",
      "SellPrice": "80",
      "Ingred": {
         "Ingredients": " Any Fish | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sweet & Sour Kingfish Steak",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "2,292",
      "SellPrice": "702",
      "Ingred": {
         "Ingredients": " Kingfish | Sugarcane | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sweet Udon",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,427",
      "SellPrice": "180",
      "Ingred": {
         "Ingredients": " Dreamlight Fruit | Rice | Any Seafood | Any Sweet"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tamagoyaki",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "689",
      "SellPrice": "310",
      "Ingred": {
         "Ingredients": " Egg | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tasty Salad",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "641",
      "SellPrice": "284",
      "Ingred": {
         "Ingredients": " Lettuce | Cucumber | Any Vegetable | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tasty Veggies",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "238",
      "SellPrice": "29",
      "Ingred": {
         "Ingredients": " Any Vegetable | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tekka Maki",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "984",
      "SellPrice": "366",
      "Ingred": {
         "Ingredients": " Tuna | Soya | Seaweed | Rice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Teriyaki Salmon",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,726",
      "SellPrice": "557",
      "Ingred": {
         "Ingredients": " Soya | Salmon | Sugarcane | Rice | Ginger"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tuna Burger",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,922",
      "SellPrice": "491",
      "Ingred": {
         "Ingredients": " Tuna | Onion | Lemon | Wheat | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Vegetarian Pizza",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "754",
      "SellPrice": "350",
      "Ingred": {
         "Ingredients": " Any Vegetable | Any Vegetable | Tomato | Cheese | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Vegetarian Stew",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "617",
      "SellPrice": "475",
      "Ingred": {
         "Ingredients": " Potato | Carrot | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Vegetarian Taco",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "925",
      "SellPrice": "423",
      "Ingred": {
         "Ingredients": " Corn | Chili Pepper | Cheese | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Veggie Casserole",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "812",
      "SellPrice": "316",
      "Ingred": {
         "Ingredients": " Any Vegetable | Any Vegetable | Cheese | Any Spice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Veggie Pasta",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "158",
      "SellPrice": "43",
      "Ingred": {
         "Ingredients": " Tomato | Wheat | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Veggie Pie",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "634",
      "SellPrice": "279",
      "Ingred": {
         "Ingredients": " Any Vegetable | Butter | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Veggie Skewers",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "767",
      "SellPrice": "427",
      "Ingred": {
         "Ingredients": " Mushroom | Zucchini | Onion | Bell Pepper"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Walleye en Papillote",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "3,689",
      "SellPrice": "1,812",
      "Ingred": {
         "Ingredients": " Walleye | Basil | Oregano | Any Vegetable"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Wonton Soup",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "2,415",
      "SellPrice": "1,038",
      "Ingred": {
         "Ingredients": " Egg | Shrimp | Wheat | Onion"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "My Hero Cookie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "679",
      "SellPrice": "294",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Any Sweet"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Apple Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,137",
      "SellPrice": "303",
      "Ingred": {
         "Ingredients": " Apple | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Apple Sorbet",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,077",
      "SellPrice": "271",
      "Ingred": {
         "Ingredients": " Slush Ice | Apple | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Aurora's Cake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,572",
      "SellPrice": "767",
      "Ingred": {
         "Ingredients": " Wheat | Sugarcane | Egg | Any Fruit | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Banana Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,884",
      "SellPrice": "641",
      "Ingred": {
         "Ingredients": " Slush Ice | Banana | Milk | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Banana Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,227",
      "SellPrice": "308",
      "Ingred": {
         "Ingredients": " Banana | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Banana Split",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,074",
      "SellPrice": "714",
      "Ingred": {
         "Ingredients": " Slush Ice | Banana | Milk | Sugarcane | Any Sweet"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Beignets",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "912",
      "SellPrice": "524",
      "Ingred": {
         "Ingredients": " Canola | Wheat | Egg | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Berry Salad",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "2,255",
      "SellPrice": "139",
      "Ingred": {
         "Ingredients": " Raspberry | Blueberry | Gooseberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Birthday Cake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,310",
      "SellPrice": "749",
      "Ingred": {
         "Ingredients": " Cocoa Bean | Wheat | Sugarcane | Egg | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Biscuits",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "679",
      "SellPrice": "294",
      "Ingred": {
         "Ingredients": " Wheat | Sugarcane | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Blueberry Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,227",
      "SellPrice": "308",
      "Ingred": {
         "Ingredients": " Blueberry | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Boba Tea",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "714",
      "SellPrice": "323",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Candy",
      "Type": " Desserts",
      "Stars": "★☆☆☆☆",
      "Energy": "123",
      "SellPrice": "22",
      "Ingred": {
         "Ingredients": " Any Sweet"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Caramel Apples",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "638",
      "SellPrice": "56",
      "Ingred": {
         "Ingredients": " Sugarcane | Apple"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Carrot Cake",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "908",
      "SellPrice": "427",
      "Ingred": {
         "Ingredients": " Carrot | Wheat | Egg | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Cheesecake",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "725",
      "SellPrice": "314",
      "Ingred": {
         "Ingredients": " Cheese | Wheat | Sugarcane | Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Cherry Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,497",
      "SellPrice": "326",
      "Ingred": {
         "Ingredients": " Cherry | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chocolate Chip Cookies",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,569",
      "SellPrice": "373",
      "Ingred": {
         "Ingredients": " Cocoa Bean | Wheat | Sugarcane | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chocolate Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,074",
      "SellPrice": "655",
      "Ingred": {
         "Ingredients": " Cocoa Bean | Sugarcane | Milk | Slush Ice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Chocolate Waffles",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,223",
      "SellPrice": "735",
      "Ingred": {
         "Ingredients": " Cocoa Bean | Wheat | Egg | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Coconut Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,653",
      "SellPrice": "406",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk | Coconut"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Coconut Cake",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,750",
      "SellPrice": "424",
      "Ingred": {
         "Ingredients": " Coconut | Wheat | Egg | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Coconut Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,169",
      "SellPrice": "661",
      "Ingred": {
         "Ingredients": " Slush Ice | Milk | Sugarcane | Coconut"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Crepe",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,624",
      "SellPrice": "753",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Milk | Vanilla"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Dream Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,976",
      "SellPrice": "588",
      "Ingred": {
         "Ingredients": " Dreamlight Fruit | Milk | Slush Ice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fruit Salad",
      "Type": " Desserts",
      "Stars": "★☆☆☆☆",
      "Energy": "83",
      "SellPrice": "10",
      "Ingred": {
         "Ingredients": " Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fruit Sorbet",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "467",
      "SellPrice": "206",
      "Ingred": {
         "Ingredients": " Slush Ice | Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Fruitcake",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "203",
      "SellPrice": "42",
      "Ingred": {
         "Ingredients": " Wheat | Any Fruit | Any Fruit | Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Gingerbread House",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,460",
      "SellPrice": "545",
      "Ingred": {
         "Ingredients": " Wheat | Ginger | Sugarcane | Vanilla | Egg"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Gooseberry Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,833",
      "SellPrice": "418",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk | Gooseberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Gray Stuff",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,008",
      "SellPrice": "114",
      "Ingred": {
         "Ingredients": " Any Dairy or Oil | Sugarcane | Cocoa Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Hot Cocoa",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,563",
      "SellPrice": "401",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk | Cocoa Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,158",
      "SellPrice": "558",
      "Ingred": {
         "Ingredients": " Slush Ice | Milk | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Jam Waffles",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,407",
      "SellPrice": "691",
      "Ingred": {
         "Ingredients": " Any Fruit | Wheat | Egg | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Lemon Sorbet",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "1,112",
      "SellPrice": "237",
      "Ingred": {
         "Ingredients": " Slush Ice | Lemon"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Meringue Pie",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,014",
      "SellPrice": "667",
      "Ingred": {
         "Ingredients": " Lemon | Wheat | Egg | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mermaid Cupcake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,690",
      "SellPrice": "751",
      "Ingred": {
         "Ingredients": " Butter | Milk | Wheat | Sugarcane | Scallop"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Minnie Cupcake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,040",
      "SellPrice": "745",
      "Ingred": {
         "Ingredients": " Butter | Milk | Wheat | Sugarcane | Apple"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Minnie's Gingerbread Cookies",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "379",
      "SellPrice": "67",
      "Ingred": {
         "Ingredients": " Wheat | Ginger"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mint Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,032",
      "SellPrice": "418",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk | Mint"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mint Candy",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "391",
      "SellPrice": "89",
      "Ingred": {
         "Ingredients": " Mint | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mint Chocolate",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,827",
      "SellPrice": "445",
      "Ingred": {
         "Ingredients": " Mint | Sugarcane | Butter | Cocoa Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Mint Sorbet",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "695",
      "SellPrice": "260",
      "Ingred": {
         "Ingredients": " Slush Ice | Mint"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pastry Cream and Fruits",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "958",
      "SellPrice": "440",
      "Ingred": {
         "Ingredients": " Any Fruit | Any Fruit | Any Fruit | Milk | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Pawpsicle",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "574",
      "SellPrice": "248",
      "Ingred": {
         "Ingredients": " Slush Ice | Sugarcane | Any Fruit"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Peanut Butter Waffles",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,938",
      "SellPrice": "978",
      "Ingred": {
         "Ingredients": " Peanut | Wheat | Egg | Milk"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Plain Snow Cones",
      "Type": " Desserts",
      "Stars": "★☆☆☆☆",
      "Energy": "410",
      "SellPrice": "180",
      "Ingred": {
         "Ingredients": " Any Ice"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Princess Aurora Raspberry Cupcake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,990",
      "SellPrice": "738",
      "Ingred": {
         "Ingredients": " Butter | Milk | Wheat | Sugarcane | Raspberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Raspberry Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,248",
      "SellPrice": "377",
      "Ingred": {
         "Ingredients": " Sugarcane | Milk | Raspberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Red Fruit Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "634",
      "SellPrice": "280",
      "Ingred": {
         "Ingredients": " Any Fruit | Coconut | Coffee Bean | Lemon | Raspberry | Grapes | Wheat Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Red Fruit Sorbet",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,226",
      "SellPrice": "359",
      "Ingred": {
         "Ingredients": " Slush Ice | Raspberry | Gooseberry | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Root Beer",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "690",
      "SellPrice": "166",
      "Ingred": {
         "Ingredients": " Ginger | Sugarcane | Vanilla"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Shake",
      "Type": " Desserts",
      "Stars": "★☆☆☆☆",
      "Energy": "109",
      "SellPrice": "30",
      "Ingred": {
         "Ingredients": " Any Dairy or Oil"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Snow White's Gooseberry Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,677",
      "SellPrice": "338",
      "Ingred": {
         "Ingredients": " Gooseberry | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sour Snow Cones",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,257",
      "SellPrice": "282",
      "Ingred": {
         "Ingredients": " Slush Ice | Lemon | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spaceship Earth Cupcake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,440",
      "SellPrice": "772",
      "Ingred": {
         "Ingredients": " Butter | Milk | Wheat | Sugarcane | Coconut"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spring Chocolate",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,392",
      "SellPrice": "254",
      "Ingred": {
         "Ingredients": " Spring V-EGG-etable | Sugarcane | Cocoa Bean"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spring Egg Bowl",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,942",
      "SellPrice": "370",
      "Ingred": {
         "Ingredients": " Egg-cellent Fruit | Spring V-EGG-etable | Wild Spring Egg | Cocoa Bean | Sugarcane"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Spring Mimosa Eggs",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,095",
      "SellPrice": "336",
      "Ingred": {
         "Ingredients": " Spring V-EGG-etable | Wild Spring Egg | Egg-cellent Fruit | Basil"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Stitch Cupcake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,140",
      "SellPrice": "751",
      "Ingred": {
         "Ingredients": " Butter | Milk | Wheat | Sugarcane | Blueberry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Sweet Slush",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "510",
      "SellPrice": "219",
      "Ingred": {
         "Ingredients": " Slush Ice | Any Sweet"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Tropical Pop",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,553",
      "SellPrice": "329",
      "Ingred": {
         "Ingredients": " Slush Ice | Any Fruit | Sugarcane | Coconut"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Vanilla Ice Cream",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,475",
      "SellPrice": "673",
      "Ingred": {
         "Ingredients": " Slush Ice | Milk | Sugarcane | Vanilla"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Waffles",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,455",
      "SellPrice": "706",
      "Ingred": {
         "Ingredients": " Wheat Milk Egg Any Sweet ( Sugarcane only)"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Wedding Cake",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "1,680",
      "SellPrice": "769",
      "Ingred": {
         "Ingredients": " Butter | Sugarcane | Vanilla | Egg | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Whimsical Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,497",
      "SellPrice": "324",
      "Ingred": {
         "Ingredients": " Dreamlight Fruit | Wheat | Butter"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Wonderland Cookies",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "970",
      "SellPrice": "391",
      "Ingred": {
         "Ingredients": " Butter | Sugarcane | Vanilla | Wheat"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Yule Log",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "2,147",
      "SellPrice": "198",
      "Ingred": {
         "Ingredients": " Wheat | Cocoa Bean | Vanilla | Cherry"
      },
      "Collection": "Dreamlight Valley"
   },
    {
      "Name": "Arepas Con Queso",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "770",
      "SellPrice": "309",
      "Ingred": {
         "Ingredients": " Corn | Cheese | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Baozi",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "842",
      "SellPrice": "503",
      "Ingred": {
         "Ingredients": " Pork | Wheat | Soya | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Barbecued Brilliant Blue Starfish",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "3,118",
      "SellPrice": "1,202",
      "Ingred": {
         "Ingredients": " Brilliant Blue Starfish | Mint"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Barbecued Pretty Pink Starfish",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "2,812",
      "SellPrice": "1,202",
      "Ingred": {
         "Ingredients": " Pretty Pink Starfish | Paprika"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Bulgur Salad",
      "Type": " Appetizers",
      "Stars": "★★★★★",
      "Energy": "910",
      "SellPrice": "396",
      "Ingred": {
         "Ingredients": " Wheat | Cucumber | Tomato | Mint | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Clam Juice",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "289",
      "SellPrice": "93",
      "Ingred": {
         "Ingredients": " Clam | Tomato"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Coleslaw",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "387",
      "SellPrice": "389",
      "Ingred": {
         "Ingredients": " Cabbage | Carrot"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Conch Ceviche",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "2,646",
      "SellPrice": "712",
      "Ingred": {
         "Ingredients": " Sea Snail | Onion | Tomato | Lemon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Crab Melts",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "2,549",
      "SellPrice": "1,014",
      "Ingred": {
         "Ingredients": " Crab | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Dumplings",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "710",
      "SellPrice": "493",
      "Ingred": {
         "Ingredients": " Any Meat | Wheat | Any Vegetable | Soya"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Falafel",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "528",
      "SellPrice": "159",
      "Ingred": {
         "Ingredients": " Beans | Cumin | Garlic"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Nuts & Bolts",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "3,195",
      "SellPrice": "866",
      "Ingred": {
         "Ingredients": " Robot Fish | Almonds"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Roasted Almonds",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "1,070",
      "SellPrice": "86",
      "Ingred": {
         "Ingredients": " Almonds | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Royal Ice Tea",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "610",
      "SellPrice": "234",
      "Ingred": {
         "Ingredients": " Slush Ice | Majestea"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Royal Latte",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "814",
      "SellPrice": "338",
      "Ingred": {
         "Ingredients": " Milk | Majestea"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Royal Tea",
      "Type": " Appetizers",
      "Stars": "★☆☆☆☆",
      "Energy": "218",
      "SellPrice": "36",
      "Ingred": {
         "Ingredients": " Majestea"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sand Worm Carpaccio Plate",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "3,004",
      "SellPrice": "1,160",
      "Ingred": {
         "Ingredients": " Sand Worm | Melon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Shad Ceviche",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "1,696",
      "SellPrice": "427",
      "Ingred": {
         "Ingredients": " Shad | Onion | Tomato | Lemon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Spicy Scorpion Skewer",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "1,792",
      "SellPrice": "617",
      "Ingred": {
         "Ingredients": " Scorpion | Paprika"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Takoyaki Stick",
      "Type": " Appetizers",
      "Stars": "★★★★☆",
      "Energy": "2,164",
      "SellPrice": "898",
      "Ingred": {
         "Ingredients": " Octopus | Seaweed | Egg | Soya"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Thousand Needles",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "5,000",
      "SellPrice": "2,497",
      "Ingred": {
         "Ingredients": " Brilliant Blue Starfish | Pretty Pink Starfish | Cactoberries"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Tomato Basil Soup",
      "Type": " Appetizers",
      "Stars": "★★☆☆☆",
      "Energy": "255",
      "SellPrice": "93",
      "Ingred": {
         "Ingredients": " Tomato | Basil"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Vegetarian Dumplings",
      "Type": " Appetizers",
      "Stars": "★★★☆☆",
      "Energy": "225",
      "SellPrice": "109",
      "Ingred": {
         "Ingredients": " Wheat | Any Vegetables | Soya"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Ajiaco",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "757",
      "SellPrice": "898",
      "Ingred": {
         "Ingredients": " Corn | Potato | Poultry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Baked Beans",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "544",
      "SellPrice": "388",
      "Ingred": {
         "Ingredients": " Beans | Pork"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Best Fish Forever",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "4,420",
      "SellPrice": "1,400",
      "Ingred": {
         "Ingredients": " Sea Snail | Robot Fish | Celery | Cumin"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Biryani",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,468",
      "SellPrice": "1,049",
      "Ingred": {
         "Ingredients": " Poultry | Rice | Cinnamon | Cumin | Mint"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Blend of the Bayou",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "4,238",
      "SellPrice": "2,409",
      "Ingred": {
         "Ingredients": " Prisma Shrimp | Rice | Celery | Butter | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Bony Osso Buco",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,192",
      "SellPrice": "272",
      "Ingred": {
         "Ingredients": " Skeleton Fish | Celery | Any Vegetable | Grapes"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Braised Abalone",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "2,500",
      "SellPrice": "570",
      "Ingred": {
         "Ingredients": " Oyster | Sea Snail | Mushroom | Garlic"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Braised Bamboo Shoots",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "898",
      "SellPrice": "461",
      "Ingred": {
         "Ingredients": " Bamboo | Canola | Soya | Ginger"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Brandade de Morue",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,336",
      "SellPrice": "757",
      "Ingred": {
         "Ingredients": " Cod | Potato | Milk | Lemon | Garlic"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Burrito",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "809",
      "SellPrice": "473",
      "Ingred": {
         "Ingredients": " Any Meat | Wheat | Beans | Cumin"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Butter Chicken",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,142",
      "SellPrice": "1,200",
      "Ingred": {
         "Ingredients": " Poultry | Tomato | Butter | Lemon | Cumin"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cheeseburger",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,113",
      "SellPrice": "1,785",
      "Ingred": {
         "Ingredients": " Venison | Wheat | Any Vegetable | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Chicken Souvlaki",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,816",
      "SellPrice": "949",
      "Ingred": {
         "Ingredients": " Poultry | Lemon | Mint | Paprika"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Classic Mac & Cheese",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "541",
      "SellPrice": "236",
      "Ingred": {
         "Ingredients": " Wheat | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Club Sandwich",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,075",
      "SellPrice": "1,161",
      "Ingred": {
         "Ingredients": " Pork | Poultry | Wheat | Tomato"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Coq en Barbouille",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "880",
      "SellPrice": "1,030",
      "Ingred": {
         "Ingredients": " Poultry | Onion | Any Vegetable | Grapes"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cream Cheese Bagel",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "652",
      "SellPrice": "280",
      "Ingred": {
         "Ingredients": " Wheat | Cheese | Any Sweet"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Crimson Burger",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "187",
      "SellPrice": "231",
      "Ingred": {
         "Ingredients": " Wheat | Any Vegetable | Ruby Lentils"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Dragon Roll Maki",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "3,193",
      "SellPrice": "1,670",
      "Ingred": {
         "Ingredients": " Electric Eel | Rice | Seaweed | Any Vegetable"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Fabulous Fajitas",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "852",
      "SellPrice": "851",
      "Ingred": {
         "Ingredients": " Poultry | Wheat | Any Vegetable | Any Vegetable | Cumin"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Good Ol' Fashioned Burger",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "634",
      "SellPrice": "1,413",
      "Ingred": {
         "Ingredients": " Venison | Wheat | Lettuce"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Hamburger Steak",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "855",
      "SellPrice": "1,774",
      "Ingred": {
         "Ingredients": " Venison | Potato | Any Vegetable | Beans"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Hawaiian Pizza",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,506",
      "SellPrice": "1,577",
      "Ingred": {
         "Ingredients": " Pork | Wheat | Tomato | Cheese | Pineapple"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Jerk Chicken",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,229",
      "SellPrice": "1,102",
      "Ingred": {
         "Ingredients": " Poultry | Onion | Garlic | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Latkes",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,280",
      "SellPrice": "937",
      "Ingred": {
         "Ingredients": " Onion | Potato | Canola | Egg"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Lo-Fries",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "387",
      "SellPrice": "358",
      "Ingred": {
         "Ingredients": " Flute Root | Yam | Canola"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Meat Pie",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,047",
      "SellPrice": "618",
      "Ingred": {
         "Ingredients": " Any Meat | Wheat | Butter"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Meaty Taco",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,112",
      "SellPrice": "1,785",
      "Ingred": {
         "Ingredients": " Venison | Chili Pepper | Corn | Any Vegetable | Cumin"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Milky Way Stew",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,872",
      "SellPrice": "733",
      "Ingred": {
         "Ingredients": " Rainbow Trout | Milk | Turnip | Cosmic Figs"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Moqueca de Pirarucu",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "3,453",
      "SellPrice": "1,024",
      "Ingred": {
         "Ingredients": " Pirarucu | Any Vegetable | Any Vegetable | Coconut"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Nachos",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "842",
      "SellPrice": "383",
      "Ingred": {
         "Ingredients": " Chili Pepper | Corn | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pasta with Herbs",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "759",
      "SellPrice": "289",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pesto with Linguine",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,063",
      "SellPrice": "438",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Garlic | Oregano"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Piquant Piranha Soup",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "4,001",
      "SellPrice": "2,041",
      "Ingred": {
         "Ingredients": " Chili Pepper | Bamboo | Piranha"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Poutine",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "845",
      "SellPrice": "580",
      "Ingred": {
         "Ingredients": " Potato | Canola | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pulled Pork",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,021",
      "SellPrice": "738",
      "Ingred": {
         "Ingredients": " Pork | Onion | Tomato | Oregano"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pupusas Revueltas",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "627",
      "SellPrice": "790",
      "Ingred": {
         "Ingredients": " Poultry | Corn | Beans"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Rainbouillabaisse",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "4,174",
      "SellPrice": "2,087",
      "Ingred": {
         "Ingredients": " Prisma Shrimp | Any Seafood | Rainbow Trout | Tomato | Any Vegetable"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Ramen",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,128",
      "SellPrice": "660",
      "Ingred": {
         "Ingredients": " Pork | Wheat | Egg"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Rhapsody Roll",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "335",
      "SellPrice": "301",
      "Ingred": {
         "Ingredients": " Rice | Flute Root | Seaweed | Any Vegetable"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Roast",
      "Type": " Entrées",
      "Stars": "★☆☆☆☆",
      "Energy": "450",
      "SellPrice": "300",
      "Ingred": {
         "Ingredients": " Any Meat"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Royal Burger",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,670",
      "SellPrice": "2,303",
      "Ingred": {
         "Ingredients": " Pork | Venison | Wheat | Any Vegetable | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Ruby Masoor Dal",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "405",
      "SellPrice": "357",
      "Ingred": {
         "Ingredients": " Chili Pepper | Tomato | Ruby Lentils"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sand Stew",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "5,000",
      "SellPrice": "2,244",
      "Ingred": {
         "Ingredients": " Dunebopper | Sand Fish | Any Vegetable | Sand Worm | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sausage and Sauerkraut Platter",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "958",
      "SellPrice": "884",
      "Ingred": {
         "Ingredients": " Pork | Cabbage | Potato"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Schnitzel",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "640",
      "SellPrice": "854",
      "Ingred": {
         "Ingredients": " Poultry | Wheat | Canola"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sesame Seed Bagel",
      "Type": " Entrées",
      "Stars": "★★☆☆☆",
      "Energy": "160",
      "SellPrice": "26",
      "Ingred": {
         "Ingredients": " Wheat | Any Sweet"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Shawarma",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,048",
      "SellPrice": "1,877",
      "Ingred": {
         "Ingredients": " Venison | Rice | Lemon | Cinnamon | Garlic"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Shish Taouk",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "1,928",
      "SellPrice": "1,109",
      "Ingred": {
         "Ingredients": " Poultry | Rice | Lemon | Garlic | Oregano"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sweet and Sour Stir-Fry",
      "Type": " Entrées",
      "Stars": "★★★★★",
      "Energy": "2,350",
      "SellPrice": "2,148",
      "Ingred": {
         "Ingredients": " Poultry | Broccoli | Canola | Dreamango | Pineapple"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Tandoori Chicken",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,199",
      "SellPrice": "964",
      "Ingred": {
         "Ingredients": " Chili Pepper | Poultry | Cumin | Paprika"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Tofu",
      "Type": " Entrées",
      "Stars": "★☆☆☆☆",
      "Energy": "142",
      "SellPrice": "82",
      "Ingred": {
         "Ingredients": " Soya"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Tourtière",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "814",
      "SellPrice": "1,704",
      "Ingred": {
         "Ingredients": " Venison | Wheat | Potato | Any Vegetable"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Turkey Leg",
      "Type": " Entrées",
      "Stars": "★★★★☆",
      "Energy": "1,123",
      "SellPrice": "884",
      "Ingred": {
         "Ingredients": " Poultry | Cumin | Paprika | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Turnip Tartiflette",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "1,459",
      "SellPrice": "863",
      "Ingred": {
         "Ingredients": " Pork | Turnip | Cheese"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Vegetarian Turnip Tartiflette",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "816",
      "SellPrice": "399",
      "Ingred": {
         "Ingredients": " Mushroom | Turnip | Soya"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Yakisoba",
      "Type": " Entrées",
      "Stars": "★★★☆☆",
      "Energy": "789",
      "SellPrice": "710",
      "Ingred": {
         "Ingredients": " Pork | Wheat | Cabbage"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Apple Sauce",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "823",
      "SellPrice": "71",
      "Ingred": {
         "Ingredients": " Apple | Cinnamon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Basil Berry Salad",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,355",
      "SellPrice": "142",
      "Ingred": {
         "Ingredients": " Blueberry | Basil | Strawberry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cannoli",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,482",
      "SellPrice": "678",
      "Ingred": {
         "Ingredients": " Wheat | Cheese | Egg | Vanilla"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Caramel Macarons",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,724",
      "SellPrice": "401",
      "Ingred": {
         "Ingredients": " Almonds | Egg | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Charlotte Cake",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "759",
      "SellPrice": "69",
      "Ingred": {
         "Ingredients": " Wheat | Strawberry | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Chocolate Macarons",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "2,354",
      "SellPrice": "419",
      "Ingred": {
         "Ingredients": " Almonds | Egg | Cocoa Bean"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cinnamon Donut",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,094",
      "SellPrice": "406",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Cinnamon | Any Sweet"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cotton Candy",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "298",
      "SellPrice": "56",
      "Ingred": {
         "Ingredients": " Agave | Sugarcane"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Croissant",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "566",
      "SellPrice": "249",
      "Ingred": {
         "Ingredients": " Wheat | Butter"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Cupcakes",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,853",
      "SellPrice": "433",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Cherry | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Danish",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "705",
      "SellPrice": "314",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Any Fruit | Any Fruit"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Dreamango Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,833",
      "SellPrice": "418",
      "Ingred": {
         "Ingredients": " Milk | Dreamango | Sugarcane"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "French Macarons",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "1,461",
      "SellPrice": "340",
      "Ingred": {
         "Ingredients": " Almonds | Egg"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Fruit Milkshake",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,113",
      "SellPrice": "544",
      "Ingred": {
         "Ingredients": " Slush Ice | Milk | Any Fruit"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Glazed Donut",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "760",
      "SellPrice": "336",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Any Sweet"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Gourmet Grubs",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "5,000",
      "SellPrice": "2,065",
      "Ingred": {
         "Ingredients": " Sea Snail | Sand Worm | Scorpion"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Jam Macarons",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,581",
      "SellPrice": "378",
      "Ingred": {
         "Ingredients": " Almonds | Egg | Any Fruit"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Kanelbulle",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,548",
      "SellPrice": "663",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Egg | Cinnamon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Kouign-Amann",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,358",
      "SellPrice": "610",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Butter | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Maamouls",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,614",
      "SellPrice": "100",
      "Ingred": {
         "Ingredients": " Wheat | Almonds | Dates"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Makrout",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,157",
      "SellPrice": "254",
      "Ingred": {
         "Ingredients": " Wheat | Canola | Dates | Cinnamon"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Melon Boba Tea",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "911",
      "SellPrice": "478",
      "Ingred": {
         "Ingredients": " Milk | Melon | Sugarcane"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Mooncake",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "465",
      "SellPrice": "276",
      "Ingred": {
         "Ingredients": " Wheat | Canola | Beans | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Nestling Crepe",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,938",
      "SellPrice": "715",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Milk | Nestling Pear"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pastéis de Nata",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "1,645",
      "SellPrice": "774",
      "Ingred": {
         "Ingredients": " Corn | Egg | Milk | Vanilla"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pear Upside-Down Cake",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,218",
      "SellPrice": "345",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Nestling Pear"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Pineapple Soft Serve",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "717",
      "SellPrice": "886",
      "Ingred": {
         "Ingredients": " Slush Ice | Pineapple"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Popcorn",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "201",
      "SellPrice": "161",
      "Ingred": {
         "Ingredients": " Corn | Canola"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Raspberry Jam Sandwich",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "549",
      "SellPrice": "29",
      "Ingred": {
         "Ingredients": " Wheat | Raspberry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Red Velvet",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,458",
      "SellPrice": "783",
      "Ingred": {
         "Ingredients": " Wheat | Cheese | Egg | Cocoa Bean | Vanilla"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Spicy Macarons",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,796",
      "SellPrice": "475",
      "Ingred": {
         "Ingredients": " Chili Pepper | Almonds | Egg"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Spiky Berry Pie",
      "Type": " Desserts",
      "Stars": "★★★★★",
      "Energy": "2,188",
      "SellPrice": "421",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Cactoberries | Strawberry | Any Spice"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Stellar Milkshake",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,169",
      "SellPrice": "562",
      "Ingred": {
         "Ingredients": " Slush Ice | Milk | Cosmic Figs"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Strawberry Pie",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,092",
      "SellPrice": "300",
      "Ingred": {
         "Ingredients": " Wheat | Butter | Strawberry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Strawberry Shortcake",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,173",
      "SellPrice": "342",
      "Ingred": {
         "Ingredients": " Wheat | Egg | Strawberry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Stuffed Dates",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "1,495",
      "SellPrice": "91",
      "Ingred": {
         "Ingredients": " Almonds | Dates"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sugar-Free Banana Muffin",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "677",
      "SellPrice": "39",
      "Ingred": {
         "Ingredients": " Wheat | Banana"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sugar-Free Blueberry Muffin",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "677",
      "SellPrice": "39",
      "Ingred": {
         "Ingredients": " Wheat | Blueberry"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sugar-Free Fruit Explosion Muffin",
      "Type": " Desserts",
      "Stars": "★★★★☆",
      "Energy": "354",
      "SellPrice": "66",
      "Ingred": {
         "Ingredients": " Wheat | Any Fruit | Any Fruit | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sugar-Free Fruit Muffin",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "117",
      "SellPrice": "13",
      "Ingred": {
         "Ingredients": " Wheat | Any Fruit"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sweet Popcorn",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "390",
      "SellPrice": "209",
      "Ingred": {
         "Ingredients": " Corn | Canola | Agave"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Sweet Tofu",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "183",
      "SellPrice": "100",
      "Ingred": {
         "Ingredients": " Soya | Any Fruit"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Taiyaki",
      "Type": " Desserts",
      "Stars": "★★☆☆☆",
      "Energy": "374",
      "SellPrice": "102",
      "Ingred": {
         "Ingredients": " Sand Fish | Beans"
      },
      "Collection": "Eternity Isle"
   },
    {
      "Name": "Vanilla Macarons",
      "Type": " Desserts",
      "Stars": "★★★☆☆",
      "Energy": "1,787",
      "SellPrice": "436",
      "Ingred": {
         "Ingredients": " Almonds | Egg | Vanilla"
      },
      "Collection": "Eternity Isle"
   }
   ]`  ;


let mealsList = JSON.parse(mealsJSON);



/*let ing1 = new Ingredient("Asparagus", "Vegetables", 200, 150, 133, 42, 135, 2, 3, ["Forsted Heights"], ["Asparagus Seed", "Goofy's Stall"]);
let ing2 = new Ingredient("Canola", "Dairy and Oil", 164, 25, 109,59,35,3,1,["Forest of Valor"], ["Canola Seed", "Goofy's Stall"]  )
let allIngredients = [ing1, ing2];
let rec1 = new Receipe("Roasted Asparagus", "Appetizer", 313, 221, ["Asparagus", "Canola"], 2 );
*/

const listOfMeals = []; //
let listOfIng = [];

for (let i = 0; i < mealsList.length; i++) {


  //console.log(mealsList[i].Name);
  //console.log(typeof(mealsList[i].Ingred.Ingredients));
  //console.log(mealsList[i].Ingred);
  const mealsIng = mealsList[i].Ingred.Ingredients.split("|");
  const nameTrim = mealsList[i].Name.trim();
  //console.log(mealsIng);


  listOfMeals[i] = new Receipe(nameTrim, mealsList[i].Type, mealsList[i].SellPrice, mealsList[i].Energy, mealsIng, mealsList[i].Stars);
  //console.log(listOfMeals[i].ingredients);
  //console.log(mealsIng);
  //let profit = listOfMeals[i].RecipeCost();
  //console.log(profit);


}







  let i = 160; 
  let completeIng = importIng(ingredientList);
  //console.log(completeIng);
 // console.log(ingredientList);
  console.log(`\n Name: ${listOfMeals[i].name} , ${listOfMeals[i].ingredients}       Cost: ${listOfMeals[i].RecipeCost(listOfMeals[i].ingredients, ingredientList)}  Sell Price: ${listOfMeals[i].sellsFor}  Profit: ${listOfMeals[i].receipeProfit(listOfMeals[i].ingredients, ingredientList)}`);
 // listOfMeals[i].RecipeCost();
  //console.log(typeof(listOfMeals[i].ingredients));
  //console.log(listOfMeals);
  //listOfMeals[i].RecipeCost(listOfMeals[i].ingredients)
  

  

  // console.log(listOfMeals);