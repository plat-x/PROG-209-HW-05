let MovieRating = function(pTitle, pRating) {
    this.title = pTitle;
    this.rating = parseInt(pRating);
}

MovieRating.prototype.isValid = function(){
    if (this.title === "" || this.rating === "" || isNaN(this.rating) || this.rating >5 || this.rating <1) {
        return false;
    }
    else{
        return true;
    }
}

MovieRating.prototype.toString = function(){
    return 'Title: ' + this.title + ' Rating: ' + this.rating;
}