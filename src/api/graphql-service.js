import gql from 'graphql-tag';
import graphqlClient from './graphql';

export default {

    async getBuildingsList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        buildings {
                            ${params}
                        }
                    }
                `
            });
            success(response);
        } catch (error){
            failure(error);    
        }
    },
}