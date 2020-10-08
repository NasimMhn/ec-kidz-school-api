const expressRouter = require('express');
const crud = require('../controllers/crudController');

function routes() {
    const router = expressRouter.Router();
    const controller = crud();

    const query = (sp: string) => {
        return async function (req: any, res: any) {
            req.sql = { sp }
            await controller.crud(req, res);
        }
    }
    router.route('/classes')
        .get(query('GetClasses'))
    router.route('/teachers')
        .get(query('GetTeachers'))
    router.route('/cart/:CustomerId')
        .get(query('GetCart'))

    return router;
};

module.exports = routes;