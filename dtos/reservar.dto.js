const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const code =Joi.string();
const idUser = Joi.string();
const idEstablecimiento = Joi.string();
const parkinglot = Joi.string().min(1).max(200);
const cost = Joi.string().min(2).max(40);
const arrivingTime = Joi.string().min(1).max(24);

const createReservationDto = Joi.object({
    idUser: idUser.required(),
    idEstablecimiento: idEstablecimiento.required(),
    parkinglot: parkinglot.required(),
    cost: cost.required(),
    arrivingTime: arrivingTime.required(),
});

const updateReservationDto = Joi.object({
    parkinglot: parkinglot,
    cost: cost,
    arrivingTime: arrivingTime,
});

const getReservationId = Joi.object({
  id: id.required(),
});

module.exports = {
    createReservationDto,
  updateReservationDto,
  getReservationId,
};