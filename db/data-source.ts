import { DataSource, DataSourceOptions } from "typeorm";
import {config} from "../config/configuration"

require("dotenv").config()

console.log(config().mysql)

export const dataSourceOptions : DataSourceOptions = config().mysql as DataSourceOptions
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;