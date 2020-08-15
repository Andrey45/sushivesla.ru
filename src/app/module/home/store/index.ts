import {observable} from "mobx";

class HomeStore {
    @observable city = ''
}

const homeStore = new HomeStore()
export default homeStore