var Syncano = require("syncano");

aclKey = "API KEY WITH ACL";
className = "CLASS_NAME"; //this is a name of a class you'd like to get random ID from

var connection = Syncano({apiKey: aclKey,
                    defaults: {instanceName : META.instance, className: "id_holder"}
                }); //it sets id_holder as default class name - it's the class we will use to hold object IDs in
var DataObject = connection.DataObject;

var filter = {"class_name":{"_eq":className}};

DataObject.please().list().filter(filter).then(function(res) {
    book_ids_holder = res[0]; //object with our IDs
    random_array_id = Math.floor(Math.random() * book_ids_holder.ids.length); //get random array index
    random_book_id = book_ids_holder.ids[random_array_id]; //get random object ID
    console.log(random_book_id); //log and output random ID
}).catch(function(err) {
    console.log(err);
});
