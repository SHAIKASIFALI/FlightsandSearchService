const FlightRepository = require("../repository/flight-repository");
const AirplaneRepository = require("../repository/airplane-repository");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      const airplaneRepository = new AirplaneRepository();
      const airplane = await airplaneRepository.getAirplane(data.airplaneId);
      console.log(airplane);
      data.totalSeats = airplane.capacity;
      console.log(data);
      const flight = await this.flightRepository.createFlight(data);
      return flight;
    } catch (error) {
      console.log(`something error occured in the flight service layer`);
      throw error;
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log(`something error occured in the flight service layer`);
      throw error;
    }
  }

  async getOneFlight(data) {
    try {
      const flight = await this.flightRepository.getFlight(data);
      return flight;
    } catch (error) {
      console.log(`something error occured in the flight service layer`);
      throw error;
    }
  }
  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.update(flightId, data);
      return response;
    } catch (error) {
      console.log(`something error occured in the flight service layer`);
      throw error;
    }
  }
}

module.exports = FlightService;
