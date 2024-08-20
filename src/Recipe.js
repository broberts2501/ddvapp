export class Recipe {
    constructor(name, category, sellsFor, energy, ingredients, stars)   {
        this.name = name;
        this.category = category;
        this.sellsFor = sellsFor;
        this.energy = energy;
        this.ingredients = ingredients;
        this.stars = stars;
    }

    RecipeCost(recIngredients, globalIng) {
        
        let cost = 0;
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


            console.log(recIngredients[i].BuyPrice);
            console.log(x.Name);
            let BP = Number(x.BuyPrice);
            console.log(BP);
            if (x.BuyPrice != null) {

            cost = cost + BP;
            
            }
            
        }  
        return cost; 
        
       
      

    }

    RecipeProfit(recIngredients, globalIng) {
        return (this.sellsFor - this.RecipeCost())
    }

}