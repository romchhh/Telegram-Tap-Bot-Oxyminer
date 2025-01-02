import { Sequelize } from 'sequelize';
import { UserService } from '../src/UserService';

let sequelize: Sequelize;
let userService: UserService;

beforeAll(() => {
  sequelize = new Sequelize('sqlite::memory:');
  userService = new UserService(sequelize);
});

test('Should create a user and update points', async () => {
  const user = await userService.getUserById(1);
  expect(user).toBeNull();

  await userService.updateUserPoints(1, 100);
  const updatedUser = await userService.getUserById(1);
  expect(updatedUser?.points).toBe(100);
});
