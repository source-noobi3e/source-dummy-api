import { Schema, model } from 'mongoose'

const StaffSchema = new Schema({
  fullname: String,
  email: String,
  date: String,
  phonenumber: String,
  username: String,
  password: String,
  officeaddress: String,
})

export const StaffModal = model('staff_members', StaffSchema)
