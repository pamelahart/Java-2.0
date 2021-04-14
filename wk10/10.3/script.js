Vue.component('brewery-name', {
    template: `<div class="name">
                <h3>{{brewery.title}}</h3><br>
                <h3>{{brewery.state}}</h3><br>
                <small>{{brewery.city}}</small>
    </div>`,
    props: ['brewery', 'city', 'state']
})
var baseURL = "https://api.openbrewerydb.org/";
var vm = new Vue({
    el: "#app",
    data: {
        breweries: [],
        name: [],
        city: [],
        state: [],
        
    },
    methods: {
        getBreweries: function() {
            axios.get(baseURL + "breweries").then(function(response){
                console.log(response);
                vm.breweries = response.data;
            })
        }
    },
    created: function() {
        this.getBreweries();
    }
    
});
