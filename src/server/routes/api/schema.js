const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// In memory data store
let TodoesStore = [
    'First todo item',
    'Second todo item',
    'Third todo item'
];

// Root level queries
const TodoesQuery = new GraphQLObjectType({
    name  : 'TodoesQuery',
    fields: () => ({
        items: {
            type       : new GraphQLList(GraphQLString),
            description: 'List of todo items',
            resolve() {
                return TodoesStore.concat();
            }
        }
    })
});

// Mutations
const TodoesMutations = new GraphQLObjectType({
    name  : 'TodoesMutations',
    fields: () => ({
        addItem: {
            type       : GraphQLString,
            description: 'Add a new todo item',
            args       : {
                item: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(parent, {item}) {
                TodoesStore = TodoesStore.concat(item);
                return item;
            }
        }
    })
});

// Schema
const TodoesSchema = new GraphQLSchema({
    name    : 'TodoesSchema',
    query   : TodoesQuery,
    mutation: TodoesMutations
});

module.exports = TodoesSchema;