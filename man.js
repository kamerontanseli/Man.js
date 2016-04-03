// Jquery Data Management Library

var Man = (function(){

    function Man(data, findBy) {
        this.data = data || []; // data array to hold objects
        this.findBy = findBy || "id"; // attribute to filter by
    }

    Man.prototype.findIndex = function findIndex(attr) {
        var self = this;
        return this.data.map(function(e){ return e[self.findBy] }).indexOf(attr);
    };

    Man.prototype.get = function get(attr) {
      return this.data[this.findIndex(attr)];
    };

    Man.prototype.update = function update(attr, newValues) {
        var obj = this.data[this.findIndex(attr)];
        return this.data[this.findIndex(attr)] = $.extend({}, obj, newValues);
    };

    Man.prototype.remove = function remove(attr) {
        return this.data.splice(this.findIndex(attr), 1);
    };

    Man.prototype.add = function add(values) {
        return this.data.push(values);
    };

    Man.prototype.getAll = function getAll() { return this.data; };

    return Man;

})();
