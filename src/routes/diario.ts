import express from 'express' // es6 modules se compilan como commonjs
// commonjs : const express= require "express"
import * as diaryServices from '../services/_diarios'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
router.get('/:id', (req, res) => {
  // + = UnaryOperator, hay que cambiar el dato a string por que asi vienen en los params
  const diaryId = diaryServices.findById(+req.params.id)
  return (diaryId != null)
    ? res.send(diaryId)
    : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('diarios posteados')
})
export default router
