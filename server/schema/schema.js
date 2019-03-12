const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, 
        GraphQLString, 
        GraphQLID,
        GraphQLSchema } = graphql;
// mock data
var dinos = [
  {name: 'Tyrannosaurus rex', diet: 'Carnivore', temperament: 'Hostile', id:'1', infoID: '1'},
  {name: 'Velociraptor', diet: 'Carnivore', temperament: 'Hostile', id:'2', infoID: '2'},
  {name: 'Stegosaurus', diet: 'Herbivore', temperament: 'Docile', id:'3', infoID: '3'},
  {name: 'Pteradon', diet: 'Piscivore', temperament: 'Defensive', id:'4', infoID: '4'},
  {name: 'Ankylosaurus', diet: 'Herbivore', temperament: 'Defensive', id:'5', infoID: '5'},
  {name: 'Pachycephalosaurus', diet: 'Herbivore', temperament: 'Docile', id:'6', infoID: '6'},
  {name: 'Baryonyx', diet: 'Carnivore', temperament: 'Hostile', id:'7', infoID: '7'},
  {name: 'Parasaurolophus', diet: 'Herbivore', temperament: 'Docile', id:'8', infoID: '8'},
];

var info = [
  {temporalRange: 'Late Cretaceous', size:'Large', id: '1'},
  {temporalRange: 'Late Cretaceous', size:'Medium', id: '2'},
  {temporalRange: 'Late Jurassic', size:'Large', id: '3'},
  {temporalRange: 'Late Cretaceous', size:'Small', id: '4'},
  {temporalRange: 'Late Cretaceous', size:'Large', id: '5'},
  {temporalRange: 'Late Cretaceous', size:'Medium', id: '6'},
  {temporalRange: 'Early Cretaceous', size:'Large', id: '7'},
  {temporalRange: 'Late Cretaceous', size:'', id: '8'},
];

const DinoType = new GraphQLObjectType({
  name: 'Dinosaur',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    temperament: {type: GraphQLString},
    diet: {type: GraphQLString},
    info: {
      type: InfoType,
      resolve(parent, args){
        console.log(parent);
        return _.find(info, {id: parent.infoID});
      }
    }
  })
});

const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: () => ({
    id: {type: GraphQLID},
    temporalRange: {type: GraphQLString},
    size: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dino: {
      type: DinoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        // code to get data from db/source
        console.log(typeof args.id);
        return _.find(dinos, {id: args.id});
      }
    },
    info: {
      type: InfoType,
      args: { id: {type: GraphQLID } },
      resolve(parent, args){
        return _.find(info, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});