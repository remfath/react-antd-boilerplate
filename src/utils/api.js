import axios from 'axios';

export default {
    fetchName() {
        return process.env.USER_NAME;
    },

    fetch

    fetchDetailList() {
        // let apiUrl = "https://beta.datamart.yongche.com/detail_data/config/detail_list";
        //
        // return axios.get(apiUrl).then(response => {
        //     return response.data.results;
        // });

        return [
            {
                "id": 1,
                "key": "charge_return_history",
                "name": "账户流水表",
                "class": "\\App\\Service\\Details\\ChargeReturnHistory",
                "source": "hive",
                "cycle": "6_hours",
                "load_type": "incremental",
                "status": 0,
                "created_at": "2017-09-03 10:18:20",
                "updated_at": "2017-09-03 10:18:20"
            },
            {
                "id": 2,
                "key": "city_list",
                "name": "城市列表",
                "class": "\\App\\Service\\Details\\CityList",
                "source": "mysql",
                "cycle": "1_days",
                "load_type": "all",
                "status": 1,
                "created_at": "2017-09-03 10:18:20",
                "updated_at": "2017-09-03 10:18:20"
            }
        ];
    }
}