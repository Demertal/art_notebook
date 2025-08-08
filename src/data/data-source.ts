import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entity/User'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: process.env.npm_lifecycle_event == 'typeorm' ? ['**/migrations/*.ts'] : [],
  subscribers: []
})
