const { CityRepository } = require("../repository/index.js");
const ServiceError = require("../utils/Errors/serviceError");
const ClientError = require("../utils/Errors/clientError");
const { StatusCodes } = require("http-status-codes");
class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      if (error.name === `InternalServer Error`) throw error;
      else
        throw new ServiceError(
          `something wrong occured in the city service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      if (city[0] === 0)
        throw new ClientError(
          `resource not found`,
          `city with given id not found`
        );
      return city;
    } catch (error) {
      if (
        error.name === `InternalServer Error` ||
        error.name === `Client Error`
      )
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in the city service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      if (!response)
        throw new ClientError(
          `resource not found`,
          `city with given id not found`
        );
      return response > 0 ? true : false;
    } catch (error) {
      if (
        error.name === `InternalServer Error` ||
        error.name === `Client Error`
      )
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in the city service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      if (!city)
        throw new ClientError(
          `resource not found`,
          `city with given id not found`
        );
      return city;
    } catch (error) {
      if (
        error.name === `InternalServer Error` ||
        error.name === `Client Error`
      )
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in the city service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.CityRepository.getAllCities(filter);
      if (cities.length < 1)
        throw new ClientError(
          `resource not found`,
          `city with given filters not found`
        );
      return cities;
    } catch (error) {
      if (
        error.name === `InternalServer Error` ||
        error.name === `Client Error`
      )
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in the city service layer`,
          `something wrong in the service logic`
        );
    }
  }
}

module.exports = CityService;
