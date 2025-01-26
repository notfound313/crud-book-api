import { Sequelize } from  "sequelize"


const sequelize = new Sequelize(
  process.env.PGDATABASE,  
  process.env.PGUSER,  
  process.env.PGPASSWORD,  
  {
    host: process.env.PGHOST,  
    dialect: 'postgres',  
    port: process.env.PGPORT,  
    logging: false,  
  }
);

export default sequelize;