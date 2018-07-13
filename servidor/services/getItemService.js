let self = {}

const restler = require('restler');

self.getItemData = function(query){
    return itemData = new Promise(function(resolve, reject){
        restler.get('https://api.mercadolibre.com/sites/MLA/search?q=​:'+ query + '&limit=4').on('complete', function(result){
            resolve(result)
        }).on('fail', function(err){
            reject(err)
        })
    })
    return itemData
}


module.exports = self;