import React, { Component } from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

// DB
import { getHotel, saveHotel } from "./../db/fakeSupplierService";
import { getHotelFeatures } from "../db/hotelFeatures";
import { getRoomFeatures } from "../db/roomFeatures";

class HotelForm extends Form {
  state = {
    data: {
      name: "",
      hotelFeaturesId: "",
      address: {
        streetAddress: "",
        city: "",
        province: "",
        postcode: ""
      },
      telephone: "",
      website: "",
      featuredPicture: "",
      hotelProperties: {
        bedrooms: [],
        amenities: [],
        roomFeatures: [],
        checkInAvailablity: "",
        checkOutAvailablity: "",
        pricesPerNight: {
          singleRoom: "",
          doubleRoom: ""
        }
      }
    }
  };

  schema = {
    name: Joi.string()
      .min(3)
      .max(30)
      .trim()
      .required(),
    telephone: Joi.number
      .min(8)
      .max(15)
      .trim()
      .required()
  };
  render() {
    return null;
  }
}

export default HotelForm;
