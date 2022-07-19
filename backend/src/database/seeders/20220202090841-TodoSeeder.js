// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

module.exports = {
  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize-typescript').DataType} Sequelize
   * @returns
   */
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({ description: faker.word.adjective(100), status: 'PENDING' });
    }

    await queryInterface.bulkInsert('Todos', data, {});
  },

  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize-typescript').DataType} Sequelize
   * @returns
   */
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Todos', null, {});
  },
};
