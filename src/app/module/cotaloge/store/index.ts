import {observable} from "mobx";

class CotalogeStore {
    @observable city = ''
}

const cotalogeStore = new CotalogeStore()
export default cotalogeStore