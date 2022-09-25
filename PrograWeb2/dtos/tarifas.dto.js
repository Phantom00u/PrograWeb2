const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().alphanum();
const tarifa =Joi.number();

const createTarifaDto = Joi.object({
    idUser: id.required(),
    tarifa: tarifa.required(),
});

const updateTarifaDto = Joi.object({
    id: id,
    tarifa: tarifa,
});

const getTarifaId = Joi.object({
  id: id.required(),
});

module.exports = {
    createTarifaDto,
    updateTarifaDto,
    getTarifaId,
};