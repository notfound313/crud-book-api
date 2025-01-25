import express from "express"
import "dotenv/config"
import bodyParser  from "body-parser"
import bookRoutes  from "./routes/bookRoutes.js"
import sequelize  from"./config/db.js"
import errorMiddleware from "./middleware/ErrorMiddleware.js"

const app = express();
const port = process.env.PORT

app.use(bodyParser.json());
app.use(bookRoutes);
app.use(errorMiddleware);

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
});