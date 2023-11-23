import { Schema, model } from 'mongoose'
import { IReview } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: [true, 'Please provide a review'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour', // Assuming you have a Tour model
    required: [true, 'Please provide a tour ID'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: [true, 'Please provide a user ID'],
  },
})

const Review = model<IReview>('Review', reviewSchema)

export default Review
