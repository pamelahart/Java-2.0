const vm = new Vue({
  el: "#myapp",
  data: {
    address1: "2501 Stevens Ave",
    address2: "Minneapolis MN 55404"
  },
  computed: {
    fullAddress: function () {
        return this.address1 + "," + this.address2;
    }
  }
});