export class AccountsConfigurationProvider {
    public static getConfiguration() {
        const configuration = {
            clients: [{
                client_id: 'test_implicit_app',
                grant_types: ['implicit'],
                response_types: ['id_token'],
                redirect_uris: ['https://testapp/signin-oidc'],
                token_endpoint_auth_method: 'none'
            }],
            async findAccount(ctx, id) {
                console.log("\n\n\n  ***** findAccount ***** ");
                console.log(`ctx ${JSON.stringify(ctx)}`);
                console.log(`id ${id}`);
                console.log(" ***** findAccount ***** \n\n\n");
                return {
                    accountId: id,
                    async claims(use, scope) { return { sub: id }; },
                };
            }
        };
        return configuration;
    }
}
