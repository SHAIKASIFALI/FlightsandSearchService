const { CityService } = require("../services/index");
const cityService = new CityService();
const { StatusCodes } = require("http-status-codes");
// method -> GET url-> city/:id
const httpGetCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(StatusCodes.ACCEPTED).json({
      data: city,
      msg: `city fetched successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      data: {},
      msg: `something error occured`,
      success: false,
      err: error,
    });
  }
};

//method -> POST url -> city/
const httpCreateCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: city,
      msg: `city created successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `something error occured`,
      success: false,
      err: error,
    });
  }
};

// method -> PATCH url -> city/:id
const httpUpdateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(StatusCodes.ACCEPTED).json({
      data: city,
      msg: "city updated successfully in database",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      data: {},
      msg: `something error occured`,
      success: false,
      err: error,
    });
  }
};

// method -> DELETE url city/:id
const httpDeleteCity = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(StatusCodes.ACCEPTED).json({
      data: response,
      msg: `city deleted succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `something error occured`,
      success: false,
      err: error,
    });
  }
};

// method GET url city/?name="<character that starts with>"

const httpGetAllCities = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    res.status(StatusCodes.ACCEPTED).json({
      data: cities,
      msg: `successfully fetched all the cities`,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      data: {},
      msg: `something error occured`,
      success: false,
      err: error,
    });
  }
};
module.exports = {
  httpGetCity,
  httpCreateCity,
  httpUpdateCity,
  httpDeleteCity,
  httpGetAllCities,
};
