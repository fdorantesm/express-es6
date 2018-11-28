import database from 'config/database'
import i18n from 'i18n-2'
import jwt from 'jsonwebtoken'
import middlewares from 'config/middlewares'
import mongoose from 'mongoose'
import translation from 'config/i18n'

export default (app) => {

		if (process.env.APP_VIEWS_ENGINE && process.env.APP_VIEWS) {
			app.set('view engine', process.env.APP_VIEWS_ENGINE)
			app.set('views', process.env.APP_VIEWS)
		}
		
		app.set('env', process.env)
		app.set('secret', process.env.APP_SECURE_KEY)
		app.set('salt', process.env.APP_SECURE_SALT)
		app.set("x-powered-by", process.env.APP_EXPOSE)
		app.set('jwt', jwt)
		app.set('token_expires', process.env.APP_SECURE_EXPIRATION)
		
		if (process.env.DB_BASE && process.env.DB_HOST) {
			const database = database()
			mongoose.connect(database.uri, database.config)
		}

		i18n.expressBind(app, translation)

		switch (process.env.ENV === 'local') {
			case 'local':
				
			break;
			
			case 'test':
				
			break;

			case 'production':
				
			break;

		}

		middlewares(app)

	return app
}
