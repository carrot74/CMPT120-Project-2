
function torch(_id, _name, _description) {
   this.name          = _name;
   this.id            = _id;
   this.description   = _description;
   
   this.toString = function() {
      var retVal = "";
      retVal = "[Torch]"                  + "\n" + 
               "ID:" + this.id            + "\n" +
               "Name:" + this.name          + "\n" +
               "Description:" + this.description      + "\n";
      return retVal;
   }
   }
function place(_id, _name, _description,_item,_xLocation,_yLocation) {
   this.id            = _id;
   this.name          = _name;
   this.description   = _description;
   this.item          = _item;
   this.xLocation     = _xLocation;
   this.yLocation     = _yLocation;
   
   this.toString = function() {
      var retVal = "";
      retVal = "[place]"                              + "\n" + 
               "ID:" + this.id                        + "\n" +
               "Name:" + this.name                    + "\n" +
               "Description:" + this.description      + "\n" +
               "Item:" + this.item                    + "\n" +
               "X Loaction:" + this.xLocation         + "\n" +
               "Y Location:" + this.yLocation         + "\n";
      return retVal;
		}
   }
   
   function bone(_id, _name, _description) {
   this.id          = _id;
   this.name           = _name;
   this.description   = _description;
   
   this.toString = function() {
      var retVal = "";
      retVal = "[Bone]"                  + "\n" + 
               "ID:" + this.id            + "\n" +
               "Name:" + this.name          + "\n" +
               "Description:" + this.description      + "\n";
      return retVal;
	}
   }
   
   function treasure(_id, _name, _description,_value) {
   this.id            = _id;
   this.name          = _name;
   this.description   = _description
   this.value         = _value;
   
   this.toString = function() {
      var retVal = "";
      retVal = "[Treasure]"                  + "\n" + 
               "ID:" + this.id            + "\n" +
               "Name:" + this.name          + "\n" +
               "Description:" + this.description      + "\n" +
               "Value:" + this.value          + "\n" ;
      return retVal;
	}
   }
   
  
  function noItem(_id, _name, _description) {
   this.id            = _id;
   this.name          = _name;
   this.description   = _description;
   
   this.toString = function() {
      var retVal = "";
      retVal = "[Nothing]"                  + "\n" + 
               "ID:" + this.id            + "\n" +
               "Name:" + this.name          + "\n" +
               "Description:" + this.description      + "\n";
      return retVal;
	}
   }
   