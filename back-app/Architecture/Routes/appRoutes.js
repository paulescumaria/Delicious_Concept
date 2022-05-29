const express = require('express')
const {createRecipeController, getAllRecipeController, updateRecipeController} = require('../Controller/RecipesController')
const { getRecipeById } = require('../Services/recipeService')

const router = express.Router()

router.post('/newrecipe', async (req,res) => createRecipeController(req, res))

router.get('/viewrecipes', async (req,res) => getAllRecipeController(req, res))

router.put('/modifyrecipe', async (req,res) => updateRecipeController(req, res))

module.exports = router