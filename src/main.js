import { changeState, stateChanger } from './character.js';

const p1starthealth = changeState("p1health")(100);
const p2starthealth = changeState("p2health")(100);

const p2heal = changeState("p2health")(Math.floor(Math.random() * Math.floor(10)));
const p1heal = changeState("p1health")(Math.floor(Math.random() * Math.floor(10)));

// Button generates random number but only generates one random number till reload, need to figure out how to fix that

const p1attack = changeState("p2health")(Math.floor(Math.random() * Math.floor(-10)));
const p2attack = changeState("p1health")(Math.floor(Math.random() * Math.floor(-10)));


$(document).ready(function() {
  
  const p1StartHealthState = stateChanger(p1starthealth);
  $('#p1-health-value').text(p1StartHealthState.p1health);

  const p2StartHealthState = stateChanger(p2starthealth);
  $('#p2-health-value').text(p2StartHealthState.p2health);

  // ------ PLAYER 1 ATTACK & HEAL  ------
  
  $('#p1heal').click(function() {
    const newState = stateChanger(p1heal);
    $('#p1-health-value').text(newState.p1health);
  });

  $('#p1-attack').click(function() {
    const newState = stateChanger(p1attack);
    $('#p2-health-value').text(newState.p2health);
  });

  // ------ PLAYER 2 ATTACK & HEAL  ------

  $('#p2heal').click(function() {
    const newState = stateChanger(p2heal);
    $('#p2-health-value').text(newState.p2health);
  });

  $('#p2-attack').click(function() {
    const newState = stateChanger(p2attack);
    $('#p1-health-value').text(newState.p1health);
  });

  // Button generates random number but only generates one random number till reload, need to figure out how to fix that... HOW WE DO DIS?
  // Player turns? HOW WE DO DIS?
  // Game win parameter? HOW WE DO DIS?
  // Other shit we gotta do

});