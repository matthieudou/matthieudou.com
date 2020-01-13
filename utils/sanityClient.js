import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
require('dotenv').config()

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: '',
  useCdn: process.env.NODE_ENV === 'production'
})

export const imageUrl = source => imageUrlBuilder(client).image(source).auto('format')
