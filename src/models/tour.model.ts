import { Schema, model } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'
import slugify from 'slugify'
const tourSchema = new Schema<ITour>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    durationHours: {
      type: Number,
      required: [true, 'Please provide the duration in hours'],
    },
    ratingAverage: {
      type: Number,
      default: 0,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Please provide the price'],
    },
    imageCover: {
      type: String,
      required: [true, 'Please provide the cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    startDates: [Date],
    startLocation: {
      type: String,
      required: [true, 'Please provide the start location'],
    },
    location: [String],
    slug: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24
})

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Tour = model<ITour>('Tour', tourSchema)

export default Tour
