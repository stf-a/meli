let self = {}

const getItemService = require('../services/getItemService')

self.index = function(req, res){	
    const query = req.query['q']

    const a = getItemService.getItemData(query).then(function(data)){
        console.log(data)
        res.json({data:data})
    }
}

module.exports = self