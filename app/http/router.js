import Router from 'router'
import log from 'library/log'
import home from 'route/home'

const router = Router()

router.use('/', home)

export default router
