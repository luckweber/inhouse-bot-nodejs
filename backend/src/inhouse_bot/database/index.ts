import db from './../models'

db.sequelize.sync()
  .then(() => console.log('Sequelize synced!'))
  .catch((err:any) => console.log('Error starting sequelize: ', err))