import express from 'express'
import calculatorPlus from '@controllers/calculator/plus'
import calculatorMinus from '@controllers/calculator/minus'
import validation from '@controllers/calculator/validation'
const router = express.Router()

router.get('/validation/:id', validation.getAll)
router.post('/plus', calculatorPlus.store)
router.post('/minus', calculatorMinus.store)

export default router
