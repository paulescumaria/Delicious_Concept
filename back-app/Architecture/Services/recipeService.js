const Recipe = require('../Model/recipeData')

const createRecipeServices = async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        time: req.body.time,
        ingredients: req.body.ingredients,
        prepareSteps: req.body.prepareSteps,
        image: req.body.image
    })

    try {
        const saveRespons = await recipe.save()
        res.status(201).json(saveRespons)
    } catch(err) {
        res.status(400).json(saveRespons)
    }

}

const getAllRecipeServices = async (req,res) => {
    try {
        const listRecipe = await Recipe.find()
        res.status(200).json(listRecipe)
    } catch(err) {
        res.status(400).json(listRecipe)
    }

}

module.exports = {
    createRecipeServices,
    getAllRecipeServices
}