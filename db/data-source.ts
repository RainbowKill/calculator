import { DataSourceOptions, DataSource } from 'typeorm'

export const dataSourceOptions : DataSourceOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "RainbowKill",
  "password": "Maks123",
  "database": "calculator_database",
  "entities": ['dist/**/*.entity.js'],
  "migrations": ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;