// 今日诗词
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
{/* <div id="poem_sentence">日暮苍山远，天寒白屋贫。</div>
<div id="poem_info">【唐代】刘长卿《逢雪宿芙蓉山主人》</div> */}
{/* <script type="text/javascript"> */ }
jinrishici.load(function (result) {
    var sentence = document.querySelector("#poem_sentence")
    var info = document.querySelector("#poem_info")
    sentence.innerHTML = result.data.content
    info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
});
// </script>