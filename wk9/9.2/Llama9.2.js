Vue.component('big-boy', {
template: <div>Hi, Big Boy</div>
)};

const vm = new vue({
    el: "#myApp",
    data: {
        address1: "123 Easy Street",
        address2: "Happy Valley, MN 55124"
    },
    computed: {
        fullAddress1: function() {
            return this.address + "," + this.address2;
        }
    }
});

// instructions:
// covert existing Vue instance into a reusable component
// use props to pass the animal data into the component
// then use v-for to display a component for both of the objects in the camelids array


// Your component should go above this line.
/* var vm = new Vue({
    el: "#app",
    data: {
        camelids: [
            {
                commonName: "Lama",
                binomialName: "Lama glama",
                order: "Artiodactyla",
                family: "Camelidae",
                genus: "Lama",
                species: "L. glama",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
            },
            {
                commonName: "Alpaca",
                binomialName: "Vicugna pacos",
                order: "Artiodactyla",
                family: "Camelidae",
                genus: "Vicugna",
                species: "V. pacos",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"
            },
        ]
    }
}) */
