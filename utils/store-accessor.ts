import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/module'

let myModuleStore: mymodule

function initialiseStores(store: Store<any>): void {
  myModuleStore = getModule(mymodule, store)
}

export { initialiseStores, myModuleStore }
