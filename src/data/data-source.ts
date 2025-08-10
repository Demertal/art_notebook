import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: '.../resources/data/database.sqlite',
  synchronize: true,
  logging: false,
  entities: [],
  migrations:
    process.env.npm_lifecycle_event === 'typeorm' ? ['**/migrations/*.ts'] : [],
  subscribers: []
});

export default AppDataSource;
