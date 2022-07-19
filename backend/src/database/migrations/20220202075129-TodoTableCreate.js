module.exports = {
  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize-typescript').DataType} Sequelize
   * @returns
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Todos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('PENDING', 'PROGRESS', 'DONE'),
      },
      createdAt: Sequelize.DATEONLY,
      updatedAt: Sequelize.DATEONLY,
    });
  },

  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @returns
   */
  async down(queryInterface) {
    await queryInterface.dropTable('Todos');
  },
};
