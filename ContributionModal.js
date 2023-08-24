import { Schema, model } from 'mongoose'

const ContributionSchema = new Schema({
  leader: String,
  contributionType: String,
  contributorName: String,
  contributorMobileNo: String,
  money: Object,
  ration: Object,
  clothes: Object,
  others: Object,
})

export const ContributionModel = model('contributions', ContributionSchema)
