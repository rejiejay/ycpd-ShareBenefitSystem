<!-- 养车频道福利共享 -->
<template>
<div class="aaaa">
    <ve-ring :data="chartData" :colors="colors" :settings="chartSettings" ></ve-ring>
</div>
</template>

<script>

// 组件类
import VeRing from 'v-charts/lib/ring.js';

export default {
    name: 'aaaa',

    components: { VeRing },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            chartSettings: {
                radius: [40, 80],
            },
            
            chartData: {
                columns: ['看板类型', '统计量'],
                rows: [
                    { 
                        '看板类型': '享分成中',
                        '统计量': 1 
                    }, { 
                        '看板类型': '他人分享中',
                        '统计量': 2 
                    }, { 
                        '看板类型': '未注册',
                        '统计量': 3 
                    }
                ]
            },

            colors: [
                '#409EFF',
                '#67C23A',
                '#F56C6C',
            ]
        } 
    },

	mounted: function mounted() {
    },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.aaaa {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

</style>
