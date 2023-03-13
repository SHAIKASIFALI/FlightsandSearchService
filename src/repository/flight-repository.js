const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    let priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });
    console.log(priceFilter, filter);
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log(`something error occured in the flight repository layer`);
      throw error;
    }
  }

  async getFlight(data) {
    try {
      const flight = await Flights.findByPk(data);
      return flight;
    } catch (error) {
      console.log(`something error occured in the flight repository layer`);
      throw error;
    }
  }
  async getAllFlights(data) {
    try {
      const filter = this.#createFilter(data);
      console.log(filter);
      const flights = await Flights.findAll({ where: filter });
      return flights;
    } catch (error) {
      console.log(`something error occured in the flight repository layer`);
      throw error;
    }
  }

  async update(flightId, data) {
    try {
      console.log(data);
      await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log(`something error occured in the flight repository layer`);
      throw error;
    }
  }
}

module.exports = FlightRepository;
