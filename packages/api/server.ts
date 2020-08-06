import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/services/user/user.resolver";
import ProductResolver from "./src/services/product/product.resolver";
import { OrderResolver } from "./src/services/order/order.resolver";
import { CouponResolver } from "./src/services/coupon/coupon.resolver";
import { CategoryResolver } from "./src/services/category/category.resolver";
import { VendorResolver } from "./src/services/vendors/vendors.resolver";
import session from "express-session";
import cors from "cors";
// Sequelize models
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const models = require("./src/models");

const app: express.Application = express();
const path = "/shop/graphql";
const PORT = process.env.PORT || 4000;
const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      OrderResolver,
      CouponResolver,
      CategoryResolver,
      VendorResolver,
    ],
    validate: false
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: ({ req }: any) => ({ req }),
  });
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
  const sequelizeStore = new SequelizeStore({
    db: models.sequelize,
  });
  app.use(
    session({
      store: sequelizeStore,
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );
  apolloServer.applyMiddleware({ app, path });

  models.sequelize.authenticate();
  // session models creation
  sequelizeStore.sync({ alter: true });
  // all models creation
  // models.sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main();
