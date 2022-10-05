import { regex_Numbers, regex_Dates, regex_URLS } from "../constants/regex";

export const validationForm = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Name is required";
  } else if (input.name.length > 50) {
    errors.name = "Name must be less than 50 characters";
  }

  if (!input.description) {
    errors.description = "Description is required";
  } else if (input.description.length > 1500) {
    errors.description = "Description must be less than 1500 characters";
  } else if (input.description.length < 10) {
    errors.description = "Description must be more than 10 characters";
  }

  if (!input.rating) {
    errors.rating = "Rating is required";
  } else if (!regex_Numbers.test(input.rating)) {
    errors.rating = "Rating must be a number";
  } else if (input.rating > 5) {
    errors.rating = "Rating must be less than 5";
  } else if (input.rating < 0) {
    errors.rating = "Rating must be more than 0";
  }

  if (!input.released) {
    errors.released = "Date of release is required";
  } else if (!regex_Dates.test(input.released)) {
    errors.released = "Date of release must be a valid date";
  }

  if (!input.background_image) {
    errors.background_image = "Image is required";
  } else if (!regex_URLS.test(input.background_image)) {
    errors.background_image = "Image must be a valid URL";
  }

  if (!input.genres[0]) {
    errors.genres = "Minimun one Genre is required ";
  }

  if (!input.platforms[0]) {
    errors.platforms = "Minimun one Platform is required";
  }
  if (!input.stores[0]) {
    errors.stores = "Minimun one Store is required";
  }

  return errors;
};
