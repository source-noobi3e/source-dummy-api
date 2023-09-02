import { Schema, model } from 'mongoose'

const complaintSchema = new Schema({
  complaintname: String,
  district: String,
  description: String,
  pincode: String,
  state: String,
  image: String,
  complaintno: String,
  category: String,
})

export const ComplaintModal = model('complaint', complaintSchema)
