let self = {}

const restler = require('restler');

self.getItemData = function(query){
    const itemData = new Promise(function(resolve, reject){
        restler.get('https://api.mercadolibre.com/sites/MLA/search?q=​:'+ query + '&limit=4').on('complete', function(result){
            resolve(result)
            console.log(result)
        }).on('fail', function(err){
            console.log(err)
            reject(err)
        })
    })
    return itemData
}





module.exports = self;