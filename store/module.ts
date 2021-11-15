
import Vuex from 'vuex'
import { Module, VuexModule, Mutation} from 'vuex-module-decorators'
interface StoreType {
  mm: MyModule
}

const store = new Vuex.Store<StoreType>({})


@Module({ stateFactory: true, namespaced: true, name: 'module'  })
class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}

export default MyModule
