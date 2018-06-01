//This file will load all the entries into the database in case I need to drop it.
const { Listing, Photo } = require('./schema.js');
const mongoose = require('mongoose');

const loadDatabase = () => {
  photoData.forEach((listing) => {
    Listing.findOneAndUpdate({
      listing_id: listing.listing_id
    }, {
      listing_id: listing.listing_id,
      photos: listing.photos
    }, {
      upsert: true,
      new: true
    }, (err, data) => {
      console.log('Listing Created:', data);
    })
  })
}

const photoData = [
  {
    listing_id: 1,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 2,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 3,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 4,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 5,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 6,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 7,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 8,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 9,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
  {
    listing_id: 10,
    photos: [
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-1.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-2.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-3.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-4.jpg"
      },
      {
        description: "This is a description",
        url: "https://s3.amazonaws.com/airbnb-clone-hrla22/1-5.jpg"
      },
    ]
  },
]

loadDatabase();