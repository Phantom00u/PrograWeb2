const express = require('express');
const faker = require('faker');
const router = express.Router();
const ResService = require('../services/reservacion.service');
const service = new ResService();

router.put('/', async (req, res) => {
    let idUser = req.query.idUser;
	let idEst = req.query.idEst;
	let parkinglot = req.query.parkinglot;
	let cost = req.query.cost;
	let arrivingTime = req.query.arrivingTime;
    if(isActive && idUser && idEst && parkinglot && cost){
		let resObj = {"idUser": idUser, "idEst": idEst, "parkinglot":parkinglot, "cost":v, "arrivingTime": arrivingTime }
        res.send(service.create(resObj));
    }else{
        res.send("Ingrese todos sus datos por favor.");
    }
  });

  module.exports = router;