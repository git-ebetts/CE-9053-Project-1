
/*globals describe beforeEach it expect Thing MyWorldService Person */
function Thing(config){
  this.name = config.name;
}

function Person(config){
  this.name = config.name;
}

function MyWorldService(people, things){
  this.people=people;
  this.things=things;
}

this.getPeople=function(){
  return _.sortBy(this.people, "name");
};

this.getactivePeople = function() {
  return _.filter([getPeople()], 'active', true);
};

this.getThings = function(){
  return _.sortBy(this.things, "name");
};


MyWorldService.prototype = {

getPeople : function() {
  return _.sortBy(this.people, "name");
},


getactivePeople : function() {
  return _.filter([getPeople()], 'active', true);
},


getThings : function(){
  return _.sortBy(this.things, "name");
}
};




