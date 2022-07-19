import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import dbConfig from './database/config.json';
import { Dialect } from 'sequelize/dist';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: dbConfig.dialect as Dialect,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      autoLoadModels: true,
      synchronize: false,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
