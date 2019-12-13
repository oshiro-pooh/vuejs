Vue.component('item-desc',{
    props: {
        itemName: {
            type: String
        }
    },
    template: `<p>{{ itemName }} は便利です。</p>`
})
var vm = new Vue({
    el: '#app',
    data: {myItem: ``}
})

window.vm = vm