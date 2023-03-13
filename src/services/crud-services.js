class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log("error in the ${this.reposiotry.model}-service layer");
      throw error;
    }
  }

  async get(dataId) {
    try {
      const result = await this.repository.get(dataId);
      return result;
    } catch (error) {
      console.log("error in the ${this.reposiotry.model}-service layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      console.log("error in the ${this.reposiotry.model}-service layer");
      throw error;
    }
  }

  async update(dataId, data) {
    try {
      const result = await this.repository.update(dataId, data);
      return result;
    } catch (error) {
      console.log("error in the ${this.reposiotry.model}-service layer");
      throw error;
    }
  }

  async delete(dataId) {
    try {
      const response = await this.repository.delete(dataId);
      return response;
    } catch (error) {
      console.log("error in the ${this.reposiotry.model}-service layer");
      throw error;
    }
  }
}

module.exports = CrudService;
