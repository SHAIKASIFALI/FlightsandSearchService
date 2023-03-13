const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();
// method GET url ->/airplane/:id
const httpGetAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.get(req.params.id);
    return res.status(200).json({
      data: airplane,
      msg: `airplane fetched succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching airplane from data base`,
      success: false,
      err: error,
    });
  }
};

// method GET url -> /airplane
const httpGetAllAirpanes = async (req, res) => {
  try {
    const airplane = await airplaneService.getAll();
    return res.status(200).json({
      data: airplane,
      msg: `airplanes fetched succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching airplane from data base`,
      success: false,
      err: error,
    });
  }
};
//method POST url /airplane

const httpCreateAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(201).json({
      data: airplane,
      msg: `airplane created succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching airplane from data base`,
      success: false,
      err: error,
    });
  }
};

// method PATCH url -> /airplane/:id
const httpUpdateAirplane = async (req, res) => {
  try {
    const airplane = await airplaneService.update(req.params.id, req.body);
    return res.status(200).json({
      data: airplane,
      msg: `airplane updated succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching airplane from data base`,
      success: false,
      err: error,
    });
  }
};

const httpDeleteAirplane = async (req, res) => {
  try {
    const response = await airplaneService.delete(req.params.id);
    return res.status(200).json({
      data: {},
      msg: `airplane deleted succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching airplane from data base`,
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
