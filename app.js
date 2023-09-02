console.clear()
import express from 'express'
import cors from 'cors'
import BodyParser from 'body-parser'
import mongoose from 'mongoose'
import { SuggestionModal } from './models/DummyModal.js'
import { ContributionModel } from './models/ContributionModal.js'
import { StaffModal } from './StaffModal.js'
import { CampaignModal } from './models/campaignModal.js'
import { ComplaintModal } from './models/complaintModal.js'
import { manageDevelopment } from './controllers/developmentController.js'

const PORT = '2020'
const app = express()

app.use(cors())

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

// app.get('/', (_, res) => {
//   res.send('hello')
// })

app.post('/api/v1/suggestion', async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newSuggestion = body.addInfo
      console.log(newSuggestion)

      await SuggestionModal.create(newSuggestion)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await SuggestionModal.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        rData: {
          length: data.length,
          rMessage: 'Data selected successfully',
          data: data,
        },
      })
    }

    // UPDATE
    if (body.eventID === '0003') {
      const updatedSuggestoinData = body.addInfo

      const data = await SuggestionModal.findById(updatedSuggestoinData.id)

      data.description = updatedSuggestoinData.description
        ? updatedSuggestoinData.description
        : data.description
      data.to = updatedSuggestoinData.to ? updatedSuggestoinData.to : data.to
      data.title = updatedSuggestoinData.title
        ? updatedSuggestoinData.title
        : data.title

      await data.save()

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data updated successfully',
        },
      })
    }

    // DELETE
    if (body.eventID === '0004') {
      const suggestionID = body.addInfo.id

      await SuggestionModal.findByIdAndDelete(suggestionID)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data deleted successfully',
        },
      })
    } else {
      res.send('data saved')
    }
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/v1/contribution', async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newContribution = body.addInfo
      console.log(newContribution)

      await ContributionModel.create(newContribution)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await ContributionModel.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        rData: {
          length: data.length,
          rMessage: 'Data selected successfully',
          data: data,
        },
      })
    }

    // UPDATE
    if (body.eventID === '0003') {
      const updatedContribution = body.addInfo

      const data = await SuggestionModal.findById(updatedContribution.id)

      data.leader = updatedContribution.leader
        ? updatedContribution.leader
        : data.leader

      data.contributionType = updatedContribution.contributionType
        ? updatedContribution.contributionType
        : data.contributionType

      data.contributorName = updatedContribution.contributorName
        ? updatedContribution.contributorName
        : data.contributorName

      data.contributorMobileNo = updatedContribution.contributorMobileNo
        ? updatedContribution.contributorMobileNo
        : data.contributorMobileNo

      data.money = updatedContribution.money
        ? updatedContribution.money
        : data.money

      data.ration = updatedContribution.ration
        ? updatedContribution.ration
        : data.ration

      data.clothes = updatedContribution.clothes
        ? updatedContribution.clothes
        : data.clothes

      data.others = updatedContribution.others
        ? updatedContribution.others
        : data.others

      await data.save()

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data updated successfully',
        },
      })
    }

    // DELETE
    if (body.eventID === '0004') {
      const contributionId = body.addInfo.id

      await SuggestionModal.findByIdAndDelete(contributionId)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data deleted successfully',
        },
      })
    } else {
      res.send('data saved')
    }
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/v1/staff', async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newStaffMember = body.addInfo
      console.log(newStaffMember)

      await StaffModal.create(newStaffMember)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await StaffModal.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        rData: {
          length: data.length,
          rMessage: 'Data selected successfully',
          data: data,
        },
      })
    }

    // UPDATE
    if (body.eventID === '0003') {
      const updatedStaff = body.addInfo

      const data = await StaffModal.findById(updatedStaff.id)

      data.fullname = updatedStaff.fullname
        ? updatedStaff.fullname
        : data.fullname

      data.email = updatedStaff.email ? updatedStaff.email : data.email

      data.date = updatedStaff.date ? updatedStaff.date : data.date

      data.phonenumber = updatedStaff.phonenumber
        ? updatedStaff.phonenumber
        : data.phonenumber

      data.username = updatedStaff.username
        ? updatedStaff.username
        : data.username

      data.password = updatedStaff.password
        ? updatedStaff.password
        : data.password

      data.officeaddress = updatedStaff.officeaddress
        ? updatedStaff.officeaddress
        : data.officeaddress

      await data.save()

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data updated successfully',
        },
      })
    }

    // DELETE
    if (body.eventID === '0004') {
      const staffId = body.addInfo.id

      await StaffModal.findByIdAndDelete(staffId)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data deleted successfully',
        },
      })
    } else {
      res.send('data saved')
    }
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/v1/campaign', async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newCampaign = body.addInfo
      console.log(newCampaign)

      await CampaignModal.create(newCampaign)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await CampaignModal.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        rData: {
          length: data.length,
          rMessage: 'Data selected successfully',
          data: data,
        },
      })
    }

    // UPDATE
    if (body.eventID === '0003') {
      const updatedCampaign = body.addInfo

      const data = await CampaignModal.findById(updatedCampaign.id)

      data.campaignname = updatedCampaign.campaignname
        ? updatedCampaign.campaignname
        : data.campaignname

      data.campaigntype = updatedCampaign.campaigntype
        ? updatedCampaign.campaigntype
        : data.campaigntype

      data.from = updatedCampaign.from ? updatedCampaign.from : data.from
      data.to = updatedCampaign.to ? updatedCampaign.to : data.to

      data.forwardto = updatedCampaign.forwardto
        ? updatedCampaign.forwardto
        : data.forwardto

      data.email = updatedCampaign.email ? updatedCampaign.email : data.email

      data.description = updatedCampaign.description
        ? updatedCampaign.description
        : data.description

      data.socialmedia = updatedCampaign.socialmedia
        ? updatedCampaign.socialmedia
        : data.socialmedia

      await data.save()

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data updated successfully',
        },
      })
    }

    // DELETE
    if (body.eventID === '0004') {
      const campaignId = body.addInfo.id

      await CampaignModal.findByIdAndDelete(campaignId)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data deleted successfully',
        },
      })
    } else {
      res.send('data saved')
    }
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/v1/complaint', async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newComplaint = body.addInfo
      console.log(newComplaint)

      await ComplaintModal.create(newComplaint)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await ComplaintModal.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        rData: {
          length: data.length,
          rMessage: 'Data selected successfully',
          data: data,
        },
      })
    }

    // UPDATE
    if (body.eventID === '0003') {
      const updatedComplaint = body.addInfo

      const data = await ComplaintModal.findById(updatedComplaint.id)

      data.complaintname = updatedComplaint.complaintname
        ? updatedComplaint.complaintname
        : data.complaintname

      data.district = updatedComplaint.district
        ? updatedComplaint.district
        : data.district

      data.description = updatedComplaint.description
        ? updatedComplaint.description
        : data.description

      data.pincode = updatedComplaint.pincode
        ? updatedComplaint.pincode
        : data.pincode

      data.state = updatedComplaint.state ? updatedComplaint.state : data.state

      data.image = updatedComplaint.image ? updatedComplaint.image : data.image

      data.complaintno = updatedComplaint.complaintno
        ? updatedComplaint.complaintno
        : data.complaintno

      data.category = updatedComplaint.category
        ? updatedComplaint.category
        : data.category

      await data.save()

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data updated successfully',
        },
      })
    }

    // DELETE
    if (body.eventID === '0004') {
      const complaintId = body.addInfo.id

      await ComplaintModal.findByIdAndDelete(complaintId)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'data deleted successfully',
        },
      })
    } else {
      res.send('data saved')
    }
  } catch (err) {
    console.error(err)
  }
})

app.post('/api/v1/developement', manageDevelopment)

mongoose
  .connect(
    'mongodb+srv://gauravtiwari:F1toKUhYf0cAOnB9@cluster0.n29jbqb.mongodb.net/POI_ADMIN_DB?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB connected successfully...')
    app.listen(PORT, () =>
      console.log(`API is running on http://localhost:${PORT}`)
    )
  })
  .catch((err) => {
    console.error(err)
  })
