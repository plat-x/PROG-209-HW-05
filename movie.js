// constructor function Movie
let Movie = function(pTitle, pRating) {
        // property title
        this.title = pTitle,
        // property rating
        this.rating = parseInt(pRating)
};

// validate method to validate title and rating
Movie.prototype.isValid = function(){
        // if title is valid and rating is between 1 and 5 return true
        if (this.title === "" || this.rating === "" || isNaN(this.rating) || this.rating >5 || this.rating <1) {
                return false;
        } else {
                return true;
        }
};

// toString method
Movie.prototype.toString = function(){
        return 'Title: ' + this.title + ' Rating: ' + this.rating;
};
