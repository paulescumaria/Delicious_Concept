const {createRecipeServices} = require('../Services/recipeService')

const createRecipeController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {  
        await createRecipeServices(req,res)
    } catch(err) {
        res.status(500)
    }
}

module.exports = {createRecipeController}