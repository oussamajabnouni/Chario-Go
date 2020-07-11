import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './shop/services/user/user.resolver';
import ProductResolver from './shop/services/product/product.resolver';
import { PaymentResolver } from './shop/services/payment/payment.resolver';
import { OrderResolver } from './shop/services/order/order.resolver';
import { CouponResolver } from './shop/services/coupon/coupon.resolver';
import { CategoryResolver } from './shop/services/category/category.resolver';
import { VendorResolver } from './shop/services/vendors/vendors.resolver';
import session from 'express-session';
import connectRedis from 'connect-redis';
import {redis} from './redis'
import cors from 'cors'
// Sequelize models
const models = require('./models')

const app: express.Application = express();
const path = '/shop/graphql';
const PORT = process.env.PORT || 4000;
const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      PaymentResolver,
      OrderResolver,
      CouponResolver,
      CategoryResolver,
      VendorResolver,
    ],
    
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: ({ req }: any) => ({ req })
  });
  const RedisStore = connectRedis(session);
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    }
  ));
  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );
  apolloServer.applyMiddleware({ app, path });

  models.sequelize.authenticate();

  models.sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main();
