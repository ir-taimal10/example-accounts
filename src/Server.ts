import {GlobalAcceptMimesMiddleware, Module, ServerLoader} from "@tsed/common";
import {AccountsConfigurationProvider} from "./accounts/AccountsConfigurationProvider";
@Module({})
export class Server extends ServerLoader {
    /**
     * This method lets you configure the middleware required for your application to work.
     *


     * @returns {Server}
     */
    public $beforeRoutesInit(): void | Promise<any> {
        const OIDCProvider = require('oidc-provider');
       /* const cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override');*/

        const configuration = AccountsConfigurationProvider.getConfiguration();
        const oidc = new OIDCProvider( `http://localhost:3000`, configuration);

        this
            .use(GlobalAcceptMimesMiddleware)
            .use(oidc.callback);


        return null;
    }
}
