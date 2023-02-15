const { CityService } = require("../services/index");
const cityService = new CityService();

// method -> GET url-> city/:id
const httpGetCity = async (req, res) => {
  console.log(req.params.id);
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      msg: `city fetched successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching city from data base`,
      success: false,
      err: error,
    });
  }
};

//method -> POST url -> city/
const httpCreateCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      msg: `city created successfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while creating city in data base`,
      success: false,
      err: error,
    });
  }
};

// method -> PATCH url -> city/:id
const httpUpdateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      msg: "city updated successfully in database",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while updating city from data base`,
      success: false,
      err: error,
    });
  }
};

// method -> DELETE url city/:id
const httpDeleteCity = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: {},
      msg: `city deleted succesfully`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while deleting city from data base`,
      success: false,
      err: error,
    });
  }
};

// method GET url city/?name="<character that starts with>"

const httpGetAllCities = async (req, res) => {
  try {
    const cities = CityService.getAllCities(req.query);
    res.status(200).json({
      data: cities,
      msg: `successfully fetched all the cities`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      msg: `error occured while fetching cities from data base`,
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
