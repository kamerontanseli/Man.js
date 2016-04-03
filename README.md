# Man.js

Data Management Library for easy list manipulation.

## init 

```html 
<script src="man.js"></script>
```

```javascript
var people = new Man([{name: "Bob"}], "name");
people.get("Bob") // {name: "Bob"}
```

## Properties

### data

Holds the list of objects.

### filterBy
Attribute used to find the specific object. Default is "id". This should be unique for each object.

## Methods

### findIndex (attr) -> Integer
Returns the index of the first object with a specific `filterBy`.
```javascript 
people.findIndex("Bob") // 0
```

### get (attr) -> Object
Uses `findIndex` to retreive the object then return it.
```javascript
people.get("Bob") // {name: "Bob"}
```

### update (valueToSearch, newObjProps::Object) -> Object
Uses `jQuery.extend` to apply an update to the object.
```javascript
people.update("Bob", {age: 30}) // {name: "Bob", age: 30}
```

### remove (attr) -> Object 
Uses `findIndex` and `Array.splice` to remove the element from the list.
```javascript
people.remove("Bob") // {name: "Bob"}
```
### add (newObject::Object)-> data.length
Uses `Array.push` to add the object to the list.
```javascript
people.add({name: "Steve"}) // 2
```
### getAll() -> Array 
Returns `this.data`.
```javascript
people.getAll() // [{name: "Bob"}, {name: "Steve"}]
```

### Extendable

```javascript

var extendedMan = (function(_super){

  $.extend(extendedMan.prototype, _super.prototype); // clone prototypes to new constructor 

   function extendedMan(extraProp, data, filterBy) { // new object
      this.extraProp = extraProp; 
      _super.call(this, data, filterBy); // use _super's constructor and apply result to this
   }
   
   extendedMan.prototype.extraMethod = function(){ ... }; 
   
   return extendedMan; // return function as public 
   
})(Man); // Add Man as _super 

```

