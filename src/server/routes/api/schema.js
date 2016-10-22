const GraphQL = require('graphql'),
    GraphQLSchema = GraphQL.GraphQLSchema,
    GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLList = GraphQL.GraphQLList,
    GraphQLNonNull = GraphQL.GraphQLNonNull;

// Memory data store.
let TodoesStore = [
    'First todo item',
    'Second todo item',
    'Third todo item'
];

// Root level queries.
const TodoesQuery = new GraphQLObjectType({
    name: 'TodoesQuery',
    fields: () => ({
        items: {
            type: new GraphQLList(GraphQLString),
            description: 'List of todo items',
            resolve() {
                return TodoesStore.concat();
            }
        }
    })
});

// Mutations.
const TodoMutations = new GraphQLObjectType({
    name: 'TodoesMutations',
    fields: () => ({
        addItem: {
            type: GraphQLString,
            description: 'New todo item adding',
            args: {
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

// Schema.
const TodoesSchema = new GraphQLSchema({
    name: 'TodoesSchema',
    query: TodoesQuery,
    mutation: TodoMutations
});

module.exports = TodoesSchema;