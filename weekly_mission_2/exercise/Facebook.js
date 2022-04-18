const facebook ={
    nameuser:"ChristanDeMartino",
    Nickname:"yano",
    Posts:17,
    friends:78,
    photos:680,
    videos:968,
    hobbies:["playguitar","takephotos","memes","watchmovies"],

    Getinfo: function(){
        return this.Nickname,
               this.hobbies
    }
}

console.log( facebook.Getinfo());