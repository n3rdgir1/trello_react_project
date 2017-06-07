function Card (title, description){
    this.title = title;
    this.description = description;
    this.status = 'Up Next'; // could be a status
    this.archived = false;
}

Card.prototype = {
    constructor: Card,
    changeStatus: function (newStatus){
        this.status = newStatus;
    },
    isUpNext: function (){
        return this.status == 'Up Next';
    },
    isComplete: function (){
        return this.status == 'Done';
    },
    archive: function (){
        this.archived = true;
    }
}

/* create new student object */
var card = new Card("Complete React Challenge", "need to wrap up the html and css");
