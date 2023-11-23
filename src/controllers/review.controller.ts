/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { ReviewServices } from '../services/review.service'

const createReview = async (req: Request, res: Response) => {
  try {
    const { reviewData } = req.body
    const result = await ReviewServices.createReview(reviewData)
    res.status(201).json({
      success: true,
      message: 'Review created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}
const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviews()
    res.status(201).json({
      success: true,
      message: 'Review faced successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}
const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await ReviewServices.getSingleReview(id)

    res.status(200).json({
      success: true,
      message: 'Review faced successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

const updateReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { TourData } = req.body
    const result = await ReviewServices.updateReview(id, TourData)
    res.status(200).json({
      success: true,
      message: 'Review updated successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await ReviewServices.deleteReview(id)
    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    })
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
