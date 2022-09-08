import express from 'express' // es6 modules se compilan como commonjs
// commonjs : const express= require "express"
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('diarios obtenidos')
})

router.post('/', (_req, res) => {
  res.send('diarios posteados')
})
export default router
