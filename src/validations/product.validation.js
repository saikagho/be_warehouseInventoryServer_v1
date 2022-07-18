/* eslint-disable prettier/prettier */
const Joi = require('joi');

const removeProducts = {
    body: Joi.object().keys({
        productName: Joi.string().required(),
    }),
};

const containArticles = Joi.object().keys({
    art_id: Joi.string().required(),
    amount_of: Joi.string().required(),
})

const addProducts = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        contain_articles: Joi.array().items(containArticles),
    }),
};

module.exports = {
    removeProducts,
    addProducts,
}