class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log(
        `something error occured in the ${this.model} repository layer`
      );
      throw error;
    }
  }

  async get(dataId) {
    try {
      const result = await this.model.findByPk(dataId);
      return result;
    } catch (error) {
      console.log(
        `something error occured in the ${this.model} repository layer`
      );
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log(
        `something error occured in the ${this.model} repository layer`
      );
      throw error;
    }
  }

  async update(dataId, data) {
    try {
      await this.model.update(
        { ...data },
        {
          where: {
            id: dataId,
          },
        }
      );
      let result = await this.model.findByPk(dataId);
      return result;
    } catch (error) {
      console.log(
        `something error occured in the ${this.model} repository layer`
      );
      throw error;
    }
  }

  async delete(dataId) {
    try {
      await this.model.destroy({
        where: {
          id: dataId,
        },
      });
      return true;
    } catch (error) {
      console.log(
        `something error occured in the ${this.model} repository layer`
      );
      throw error;
    }
  }
}

module.exports = CrudRepository;
