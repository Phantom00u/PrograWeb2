const express = require('express');
const faker = require('faker');
const router = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const UserService = require('../services/logos.service');
const service = new UserService();
const {
	createLogoEstacionamientoDto,
    updateLogoEstacionamientoDto,
    getLogoEstacionamientoId,
  } = require('../dtos/logos.dto');

  router.get('/', async (req, res) => {
    const { size } = req.query;
    const limit = size || 10;
    const logos = await service.find(limit);
    res.json(logos);
  });
  
  //STATUS CODE
  
  router.get(
    '/:id',
    validatorHandler(getLogoEstacionamientoId, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const logo = await service.findOne(id);
        res.json({
          success: true,
          message: 'Este es el logo encontrado',
          data: logo,
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.post(
    '/',
    validatorHandler(createLogoEstacionamientoDto, 'body'),
    async (req, res, next) => {
      const body = req.body;
      try {
        const newlogo = await service.create(body);
        res.json({
          success: true,
          message: 'logo creado correctamente',
          data: newlogo,
        });
      } catch (error) {
        next(error);
      }
    }
  );
  
  //MENSAJES DE ERROR
  router.patch(
    '/:id',
    validatorHandler(getLogoEstacionamientoId, 'params'),
    validatorHandler(updateLogoEstacionamientoDto, 'body'),
    async (req, res) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const logo = await service.update(id, body);
        res.json({
          message: 'update',
          data: logo,
          id,
        });
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    }
  );
  
  router.put(
    '/:id',
    validatorHandler(getLogoEstacionamientoId, 'params'),
    validatorHandler(updateLogoEstacionamientoDto, 'body'),
    async (req, res) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const logo = await service.updateComplete(id, body);
        res.json({
          message: 'update total',
          data: logo,
          id,
        });
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    }
  );
  
  router.delete(
    '/:id',
    validatorHandler(getLogoEstacionamientoId, 'params'),
    async (req, res) => {
      const { id } = req.params;
      res.json({
        message: 'delete',
        id,
      });
    }
  );
  module.exports = router;