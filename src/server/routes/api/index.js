const schema = require ('./schema'),
    { graphql } =  require('graphql'),
    express = require('express');

const router = express.Router();

router.post('/graphql', (req, res) => {
    const {query, vars} = req.body;

    graphql(schema, query, null, vars)
        .then(result => {
            res.send(result);
        });
});

module.exports = router;
