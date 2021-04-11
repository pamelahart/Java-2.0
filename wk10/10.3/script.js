var baseURL = "https://api.openbrewerydb.org/";
var vm = new Vue({
    el: "#app",
    data: {
        breweries: []
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