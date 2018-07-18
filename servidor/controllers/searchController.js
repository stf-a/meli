let self = {}

const searchService = require('../services/searchService')

self.index = function(req, res){	
    const query = req.query.search;

    const search = searchService.getItemData(query).then(function(resultado){
        
        let author = {
            name:'asd',
            lastname: 'asd'
        }

        let categories = []

        let items = []

        for(var i =0; i<results.results.length; i++){
          const obj = {
              categories:categories,
              id:resultado.results[i].id,
              title:resultado.results[i].id,
              price:{
                  currency:resultado.results[i].currency_id,
                  amount:resultado.results[i].installments.amount
                    },
              picture:resultado.results[i].thumbnail,
              condition:resultado.result[i].condition,
              free_shiping:resultado.results[i].shipping.free_shipping
                }
            
                items.push(obj)      
            }

        const busquedaCuatro = {
            author: author,
            categories:categories,
            items:items
            }

       return res.json(busquedaCuatro)
        
    }).catch(function(err){
       console.log(err) 
    })
}   

module.exports = self