const { CityRepository } = require("../repository/index.js");
class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("error in the city-service layer");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log(`something error occured in the city service layer`);
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(`something error occured in the city service layer`);
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log(`something error occured in the city service layer`);
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.CityRepository.getAllCities(filter);
      return cities;
    } catch (error) {
      console.log(`something error occured in the city service layer`);
      throw error;
    }
  }
}

module.exports = CityService;
