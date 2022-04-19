import express from 'express'
import calculatorPlus from '@controllers/calculator/plus'
import calculatorMinus from '@controllers/calculator/minus'
const router = express.Router()

router.post('/plus', calculatorPlus.store)
router.post('/minus', calculatorMinus.store)

export default router
