/* eslint-disable prettier/prettier */
const PRODUCTS_FILE_PATH = "../docs/products.json";
const INVENTORY_FILE_PATH = "../docs/inventory.json";

const ERROR_TEXT_MESSAGES = {
    UNABLE_TO_DELETE : "Unable to delete as product not found",
    INSUFFICIENT_INVENTORY : "Unable to add due to insufficient inventory",
    PRODUCTS_NOT_FOUND : "Product not found",
    INVENTORY_NOT_FOUND : "Inventory details not found",
    NOT_FOUND : "Not found",
}

const URL = {
    BASE_URI : "/warehouse",
    REMOVE_PRODUCT_URI : "/:id",
    ADD_PRODUCT_URI : "/",
    GET_PRODUCT_URI : "/",
    GET_INVENTORY_URI : "/",
} 

module.exports = {
    URL,
    PRODUCTS_FILE_PATH,
    INVENTORY_FILE_PATH,
    ERROR_TEXT_MESSAGES,
}