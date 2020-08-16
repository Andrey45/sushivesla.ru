import {observable} from "mobx";
import {ColumnCard} from "./types";

import Card1 from '../../../assets/img/sets_desktop.png'

class HomeStore {
    @observable ArrCard: ColumnCard[] = [
        {
            background: '#8ed8f7',
            card: [
                {
                    cardImg: Card1,
                    title: 'Сеты',
                    animation: 'card-set'
                }
            ]
        }
    ]
}

const homeStore = new HomeStore()
export default homeStore