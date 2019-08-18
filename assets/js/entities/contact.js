ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: "firstName"
    });

    var contacts;

    var initializeContacts = function () {
        contacts = new Entities.ContactCollection([
            {id: 1, firstName: "Alice", lastName: "Artem", phoneNumber: "1234567890"},
            {id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "0987654321"},
            {id: 3, firtName: "Charlie", lastName: "Campbell", phoneNumber: "6574839201"}
        ]);
    };

    var API = {
        getContactEntities: function(){
            if(contacts === undefined){
                initializeContacts();
            }
            return contacts;
        }
    };

    //  Need to declare a request-handler to return contacts as a collection.
    ContactManager.reqres.setHandler("contact:entities", function(){
        return API.getContactEntities();
    });
});
