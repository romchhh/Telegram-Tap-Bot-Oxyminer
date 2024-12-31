import request from 'supertest';
import { app } from '../server';

describe('User Routes', () => {
  test('GET /api/users/:id should return user data', async () => {
    const response = await request(app).get('/api/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
  });

  test('PATCH /api/users/:id should update user data', async () => {
    const response = await request(app)
      .patch('/api/users/1')
      .send({ points: 500 });
    expect(response.status).toBe(200);
    expect(response.body.points).toBe(500);
  });
});
