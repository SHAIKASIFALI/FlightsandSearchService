const { AirplaneService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const airplaneService = new AirplaneService();
// method GET url ->/airplane/:id
const httpGetAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.get(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: airplane,
      msg: `airplane fetched succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `somethig error occured`,
      success: false,
      err: error,
    });
  }
};

// method GET url -> /airplane
const httpGetAllAirpanes = async (req, res) => {
  try {
    const airplane = await airplaneService.getAll();
    return res.status(StatusCodes.OK).json({
      data: airplane,
      msg: `airplanes fetched succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `somethig error occured`,
      success: false,
      err: error,
    });
  }
};
//method POST url /airplane

const httpCreateAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: airplane,
      msg: `airplane created succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `somethig error occured`,
      success: false,
      err: error,
    });
  }
};

// method PATCH url -> /airplane/:id
const httpUpdateAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.update(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      data: airplane,
      msg: `airplane updated succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `somethig error occured`,
      success: false,
      err: error,
    });
  }
};

const httpDeleteAirplane = async (req, res) => {
  try {
    const response = await airplaneService.delete(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      msg: `airplane deleted succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `somethig error occured`,
      success: false,
      err: error,
    });
  }
};

module.exports = {
  httpGetAirplane,
  httpGetAllAirpanes,
  httpCreateAirplane,
  httpUpdateAirplane,
  httpDeleteAirplane,
};
