Vue.component('tea-list-title',{
    template:'<h1>紅茶一覧</h1>'
})

Vue.component('tea-list-description',{
    template:'<p>世界三大銘茶です。</p>'
})

Vue.component('tea-list-table',{
    template:`
      <div>
        <table border="1">
        　<tr>
        　　<th>産地</th>
        　　<th>国</th>
        　</tr>
        　<tr>
        　　<td>ダージリン</td>
        　　<td>インド</td>
        　</tr>
        　<tr>
        　　<td>ウバ</td>
        　　<td>スリランカ</td>
        　</tr>
        　<tr>
        　　<td>キームン</td>
        　　<td>中国</td>
        　</tr>
        </table>
      </div>
      `
})


var vm = new Vue({
    el: '#app'
})

window.vm = vm