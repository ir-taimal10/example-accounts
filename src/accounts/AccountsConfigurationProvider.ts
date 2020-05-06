import {Account} from "./Accounts";
import {configuration} from "./Configuration";

export class AccountsConfigurationProvider {
    public static getConfiguration() {
        configuration.findAccount = Account.findAccount;
        return configuration;
    }
}
