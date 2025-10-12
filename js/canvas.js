// 渐变背景初始化,如果要使用渐变背景把下面的那一行注释去掉即可
// 下面的几行都是渐变的一套,自定义头部内还有一个关联的自定义CSS
// <canvas id="canvas-basic"></canvas>
<script src="https://npm.elemecdn.com/granim@2.0.0/dist/granim.min.js"></script>
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#a18cd1', '#fbc2eb'],
                ['#fff1eb', '#ace0f9'],
                ['#d4fc79', '#96e6a1'],
                ['#a1c4fd', '#c2e9fb'],
                ['#a8edea', '#fed6e3'],
                ['#9890e3', '#b1f4cf'],
                ['#a1c4fd', '#c2e9fb'],
                ['#fff1eb', '#ace0f9']

            ]
        }
    }
});