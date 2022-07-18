function removeArticleFromInventory(articleArray, inventoryArray) {
    articleArray.map(artObj => {
        inventoryArray.filter(obj => {
            if (obj?.art_id === artObj?.art_id) {
                if (parseInt(obj?.stock) > parseInt(artObj?.amount_of)) {
                    obj.stock = JSON.stringify((parseInt(obj?.stock) - parseInt(artObj?.amount_of)))
                } else {
                    return [];
                }             
            }
        })
    })
    return inventoryArray;
}

function addArticleToInventory(articleArray, inventoryArray) {
    articleArray.map(artObj => {
        inventoryArray.filter(obj => {
            if (obj?.art_id === artObj?.art_id) {
                obj.stock = JSON.stringify((parseInt(obj?.stock) + parseInt(artObj?.amount_of)))
            }
        })
    })
    return inventoryArray;
}

module.exports = {
    removeArticleFromInventory,
    addArticleToInventory,
}