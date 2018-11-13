<!-- 车牌输入 -->
<template>
<div class="carNo-input flex-start-center">
    <div class="carNo-input-des">车&nbsp;牌&nbsp;号:</div>

    <div class="carNo-input-main flex-rest"><!-- rest 将选择 挤到最右边 -->
        <div class="carNo-input-container carNo-small-car flex-center">
            <div class="carNo-container-border flex-start-center"><!-- 框框圆圈部分 -->

                <!-- 车牌省份 -->
                <div class="carNo-main-province flex-start-center">
                    <span>{{carNoProvince}}</span>
                    <svg width="18" height="18" t="1542074144888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1837" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#fff" d="M746.133905 372.497672a20.406035 20.406035 0 0 0-14.34361 5.864815L528.761003 577.653575c-9.104388 8.936471-23.895436 8.913946-32.971155-0.050171L294.101845 378.405491c-8.047739-7.948422-21.013199-7.866511-28.959573 0.180203-7.947398 8.045691-7.866511 21.011151 0.17918 28.958549l201.688003 199.197914c12.115635 11.966148 28.164014 18.569184 45.19225 18.595805h0.102389c16.990353 0 33.019278-6.551842 45.147199-18.456557l203.028269-199.293135c8.071288-7.921801 8.192106-20.887261 0.269282-28.957525a20.418321 20.418321 0 0 0-14.614939-6.133073z" p-id="1838"></path>
                    </svg>
                </div>

                <!-- 车牌号 -->
                <div class="carNo-main-plate flex-rest" :class="{'carNo-plate-isNull': plateNo === ''}">{{plateNo === '' ? "点击输入" : plateNo}}</div>
            </div>
        </div>
    </div>

    <!-- 小车 大车 新能源 教练 警察 香港 澳门 选择 -->
    <div class="carNo-input-main">
    </div>
</div>
</template>

<script>

export default {
    name: 'ycpd-sbsys-tabbar',

    props: [
        'selectTabbar', 
    ],

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            carNoProvince: '粤', // 车牌省份
            plateNo: 'B12345', // 车牌号码

            /**
             * 车型
             */
            carType: 'smallCar',
            carTypeList: [
                // 小型车 小轿车 普通的车
                {
                    key: 'smallCar',
                    value: '小车',
                }, 
                // 小型车 小轿车 普通的车
                {
                    key: 'smallCar',
                    value: '小车',
                }, 
            ],
        } 
    },

	mounted: function mounted() { },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 车牌输入
.carNo-input {
    font-size: 14px;
    height: 60px;
    padding: 0px 15px;
    color: @black2;

    // 描述部分（车牌号:） 
    .carNo-input-des {
        width: 80px;;
    }

    // 主要部分 车牌号
    .carNo-input-main {
        color: #fff;

        .carNo-input-container {
            height: 40px;
            width: 160px;
            border-radius: 4px;

            .carNo-container-border {
                height: 34px;
                width: 154px;
                border-radius: 4px;
                border: 1px solid #fff;
            }
        }

        // 小轿车 （小型车）
        .carNo-small-car {
            background-color: #5594FF;
        }

        // 车牌省份
        .carNo-main-province {
            height: 34px;
            padding-right: 7.5px;

            span {
                display: block;
                padding-left: 7.5px;
                line-height: 34px;
            }

            svg {
                position: relative;
                top: 1.5px;
            }
        }

        // 车牌主要内容部分
        .carNo-main-plate {
            padding-right: 5px;
            color: #fff;
            font-size: 16px;
            letter-spacing: 5px;
        }

        // 为空的时候 显示的颜色不一样 车牌主要内容部分
        .carNo-plate-isNull {
            font-size: 14px;
            letter-spacing: 0;
            color: rgba(255, 255, 255, 0.46);
        }
    }
}


</style>
