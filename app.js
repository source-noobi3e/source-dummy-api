console.clear()
import express from 'express'
import cors from 'cors'
import BodyParser from 'body-parser'
import mongoose from 'mongoose'
import { SuggestionModal } from './DummyModal.js'
import { ContributionModel } from './ContributionModal.js'
import { StaffModal } from './StaffModal.js'

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
        addInfo: {
          rMessage: 'data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await SuggestionModal.find().select('-__v')

      return res.status(200).json({
        rStatus: 0,
        addInfo: {
          length: data.length,
          rMessage: 'Data selected successfully',
          rData: data,
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
        addInfo: {
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
        addInfo: {
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
