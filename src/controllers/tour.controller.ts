/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { TourServices } from '../services/tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const { TourData } = req.body
    const result = await TourServices.createTour(TourData)
    res.status(201).json({
      success: true,
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}
const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await TourServices.getAllTours()
    res.status(201).json({
      success: true,
      message: 'Tour faced successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await TourServices.getSingleTour(id)

    res.status(200).json({
      success: true,
      message: 'tour faced successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const TourData = req.body
    const result = await TourServices.updateTour(id, TourData)
    res.status(200).json({
      success: true,
      message: 'Tour updated successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await TourServices.deleteTour(id)
    res.status(200).json({
      success: true,
      message: 'TourData deleted successfully',
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

export const tourController = {
  createTour,
  getSingleTour,
  getAllTours,
  updateTour,
  deleteTour,
}
