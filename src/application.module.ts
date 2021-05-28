import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthenticationModule } from './modules/authentication/authentication.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'refreshToken',
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule { }
