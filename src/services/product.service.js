/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */

const { PRODUCTS_FILE_PATH, INVENTORY_FILE_PATH } = require('../utils/constant');
const { fileReaderFunction, fileUpdateFunction } = require('../utils/fileAccess');
const { removeArticleFromInventory, addArticleToInventory } = require('../utils/common');

const getProductsFileContent = async () => {
  let data = fileReaderFunction(PRODUCTS_FILE_PATH);
  data = JSON.parse(data);
  return data;
};

const getInventoryFileContent = async() => {
  let data = fileReaderFunction(INVENTORY_FILE_PATH);
  data = JSON.parse(data);
  return data;
}

const updateProductsFileContent = async (obj) => {
    return fileUpdateFunction(PRODUCTS_FILE_PATH, obj)
}

const updateInventoryFileContent = async (obj) => {
    return fileUpdateFunction(INVENTORY_FILE_PATH, obj)
}

const deleteProduct = async (product) => {
  const productList = await getProductsFileContent();
  const inventoryList = await getInventoryFileContent();

  const articleObjArray = productList?.products?.filter(obj => obj?.name === product) || [];
  const articleListArray = articleObjArray && articleObjArray[0]?.contain_articles || [];
  const updatedArticleObjArray = productList?.products?.filter(obj => obj?.name !== product);
  const inventoryListArray = inventoryList?.inventory || [];
  let updatedInventoryList = [];

  if (articleListArray.length > 0) {
    const newInventoryList = await removeArticleFromInventory(articleListArray, inventoryListArray)

    updatedInventoryList = {
      inventory : [...newInventoryList]
    }
    updatedProductList = {
      products : [...updatedArticleObjArray]
    }

    await updateInventoryFileContent(JSON.stringify(updatedInventoryList))
    await updateProductsFileContent(JSON.stringify(updatedProductList))
  }

  return articleListArray;
};

const addProduct = async (payload) => {
  const productList = await getProductsFileContent();
  const inventoryList = await getInventoryFileContent();
  const inventoryListArray = inventoryList?.inventory || [];
  let updatedProductList = {}, updatedInventoryList = [];

  if (productList?.products !== undefined) {
    updatedProductList = {
        products: [
            ...productList?.products,
            payload
        ]
    }
  }

  if (inventoryListArray?.length > 0) {
    const newInventoryList = await addArticleToInventory(payload?.contain_articles, inventoryListArray)

    updatedInventoryList = {
      inventory : [...newInventoryList]
    }
  }

  await updateInventoryFileContent(JSON.stringify(updatedInventoryList))
  await updateProductsFileContent(JSON.stringify(updatedProductList))

  return updatedProductList;
}

module.exports = {
  getProductsFileContent,
  deleteProduct,
  addProduct,
};
