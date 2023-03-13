const FlightService = require("../services/flights-services");
const flightService = new FlightService();
const httpCreateFlight = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      msg: `flight created successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while creating a flight in database`,
      success: false,
      err: error,
    });
  }
};

const httpGetFlight = async (req, res) => {
  try {
    console.log(req.query);
    const flight = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flight,
      msg: `flight fetched  successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching a flight in database`,
      success: false,
      err: error,
    });
  }
};

const httpGetOneFlight = async (req, res, next) => {
  try {
    const flight = await flightService.getOneFlight(req.params.id);
    return res.status(200).json({
      data: flight,
      msg: `succesfully fetched a flight`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching a flight in database`,
      success: false,
      err: error,
    });
  }
};

const httpFlightUpdate = async (req, res, next) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    console.log(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      msg: `succesfully updated a flight`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching a flight in database`,
      success: false,
      err: error,
    });
  }
};
module.exports = {
  httpGetOneFlight,
  httpCreateFlight,
  httpGetFlight,
  httpFlightUpdate,
};
