import { Schema, model } from 'mongoose'

const SuggestionSchema = new Schema({
  title: {
    type: String,
  },
  to: {
    type: String,
  },
  description: {
    type: String,
  },
})

export const SuggestionModal = model('suggestion', SuggestionSchema)
