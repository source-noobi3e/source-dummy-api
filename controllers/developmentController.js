import { DevelopmentModal } from '../models/developmentModal.js'

export const manageDevelopment = async (req, res) => {
  try {
    const { body } = req
    console.log(body)

    // ADD
    if (body.eventID === '0001') {
      const newDevelopment = body.addInfo
      console.log(newDevelopment)

      await DevelopmentModal.create(newDevelopment)

      return res.status(200).json({
        rStatus: 0,
        rData: {
          rMessage: 'Data inserted successfully',
        },
      })
    }

    // SELECT
    if (body.eventID === '0002') {
      const data = await DevelopmentModal.find().select('-__v')

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
      const updatedDevelopement = body.addInfo

      const data = await DevelopmentModal.findById(updatedDevelopement.id)

      data.title = updatedDevelopement.title
        ? updatedDevelopement.title
        : data.title

      data.category = updatedDevelopement.category
        ? updatedDevelopement.category
        : data.category

      data.from = updatedDevelopement.from
        ? updatedDevelopement.from
        : data.from

      data.to = updatedDevelopement.to ? updatedDevelopement.to : data.to

      data.expenditure = updatedDevelopement.expenditure
        ? updatedDevelopement.expenditure
        : data.expenditure

      data.image = updatedDevelopement.image
        ? updatedDevelopement.image
        : data.image

      data.developmentplace = updatedDevelopement.developmentplace
        ? updatedDevelopement.developmentplace
        : data.developmentplace

      data.description = updatedDevelopement.description
        ? updatedDevelopement.description
        : data.description

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
      const developmentId = body.addInfo.id

      await DevelopmentModal.findByIdAndDelete(developmentId)

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
}
