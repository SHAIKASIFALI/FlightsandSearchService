const { RepositoryError } = require("../utils/Errors/RepositoryError");
const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  #getFilter(filter) {
    let cityFilter = {};
    if (filter.name) {
      cityFilter[`name`] = {
        [Op.startsWith]: filter.name,
      };
    }
    return cityFilter;
  }
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the city repository layer`,
        `something wrong occured while creating a city in db `
      );
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: { id: cityId },
      });
      return city;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the city repository layer`,
        `something wrong occured while deleting a city in db `
      );
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(
        { name: data.name },
        {
          where: {
            id: cityId,
          },
        }
      );
      if (city[0] != 0) {
        const city = await this.getCity(cityId);
        return city;
      }
      // city.name = data.name;
      // await city.save();
      return city;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the city repository layer`,
        `something wrong occured while updating a city in db `
      );
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the city repository layer`,
        `something wrong occured while fetching a city from db `
      );
    }
  }

  async getAllCities(filter) {
    try {
      const cityFilter = this.#getFilter(filter);
      const cities = await City.findAll({
        where: cityFilter,
      });
      return cities;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the city repository layer`,
        `something wrong occured while fetching all the cities from db `
      );
    }
  }
}
module.exports = CityRepository;
