const Mock = require('./../mock');

const award = {
    /**
     * 获取 - 我的奖励
     */
    findMyRewards: (rep, res) => {
        res.json(Mock.mock(
            {
                "code": 1000,
                "data|10": [
                    {
                        "costMoney|1-1000": 80.00,
                        "obtainMoney|1-1000": 0.80,
                        "projectName": "养车频道优惠加油双重返利活动",
                        "recordDate": Mock.mock('@datetime'),
                        "userName": Mock.mock('@cword(3)'),
                    }
                ],
                "msg": "success"
            }
        ));
    }, 

    /**
     * 获取 - 已入账、未入账
     */
    findRewardHeads: (rep, res) => {
        res.json(Mock.mock(
            {
                "code": 1000,
                "data": {
                    "income|1-1000": 100, // 收入
                    "total|1-1000": 100, //  总奖励
                    "uncome|1-1000": 100, // 待入账
                },
                "msg": "success"
            }
        ));
    }, 
};

module.exports = award;
