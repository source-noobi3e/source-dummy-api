import { Schema, model } from 'mongoose'

const campaignSchema = new Schema({
  campaignname: String,
  campaigntype: String,
  from: String,
  to: String,
  forwardto: String,
  email: String,
  description: String,
  socialmedia: String,
})

export const CampaignModal = model('campaign', campaignSchema)
