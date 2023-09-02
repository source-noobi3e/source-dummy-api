import { Schema, model } from 'mongoose'

const DevelopementSchema = new Schema({
  title: String,
  category: String,
  from: String,
  to: String,
  expenditure: String,
  image: String,
  developmentplace: String,
  description: String,
})

export const DevelopmentModal = model('developments', DevelopementSchema)
