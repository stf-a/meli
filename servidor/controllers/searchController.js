const searchService = require('../services/searchService')

let self = {}

self.index = function(req, res){	
    const query = req.params.id

    searchService.getItemData(query).then(function(result){
        return res.json({data: result})
    })
}   

module.exports = self