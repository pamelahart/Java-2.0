Vue.component('cookie-chart', {
    template: '<div>cookiechart</div>',
    data: function () {
        return {
            name: 'test this'
        }
    }
});

let vm = new Vue({
    el: "#myCookieApp",
    data: {
        newCookieObj: {
            image: '',
            name: '',
            time: '',
            yields: '',
            recipe: false
    },
        cookies: [
            {
                image: 'cookie6.jpg',
                name: 'Spice',
                time: '1.5 hours',
                yields: '30',
                recipe: 'https://www.bettycrocker.com/recipes/mexican-spice-cookies/f0d0b866-d094-4ce7-9d0a-e41e911e8db6',
            }, {
                image: 'cookie3.jpg',
                name: 'Peanut Butter',
                time: '1 hour',
                yields: '36',
                recipe: 'https://www.bettycrocker.com/recipes/classic-peanut-butter-blossom-cookies/a3563f6e-96b0-443f-ae0a-53cef4be6db6',
            }, {
                image: 'cookie4.jpg',
                name: 'Macroon',
                time: '1.5 hours',
                yields: '48',
                recipe: 'https://www.bettycrocker.com/recipes/french-macarons-with-bittersweet-chocolate-ganache/01eb4eb4-afda-41ff-b38e-34440efd6bf1',
            }, {
                image: 'cookie2.jpg',
                name: 'Ginger',
                time: '1.45 hours',
                yields: '20',
                recipe: 'https://www.bettycrocker.com/recipes/spicy-ginger-cookies/662e8cf4-9a77-45ae-a682-8c9fbd10ad7d',
            }, {
                image: 'cookie5.jpg',
                name: 'Double Chocolate',
                time: '1.5 hours',
                yields: '48',
                recipe: 'double chocolate https://www.bettycrocker.com/recipes/double-chocolate-pudding-cookies/1cbe9bf1-307b-4aae-96e7-b2c7be4087a1',
            }
        ]
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.cookies = vm.cookies.concat(vm.newCookieObj);
            vm.resetForm();
    },
    resetForm: () => {
        vm.newCookieObj = {
            image: '',
            name: '',
            time: '',
            yields: '',
            recipe: false
        };
    },
    deleteItem: item => {
        vm.cookies = vm.cookies.filter(cookies => {
            return cookies !== item;
        })
    }
        }
})
