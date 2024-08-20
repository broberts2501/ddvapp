import { Ingredient } from './Ingredient.js';

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

export { importIng };