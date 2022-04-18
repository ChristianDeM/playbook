const  Issue ={
    title:"test",
    repositoryNameAssociated:"christianDm",
    status:"true",
    numberOfComments:10,
    labels:3,
    author:"christianDm",
    dateCreated:19/02/2022,
    lastUpdated:19/02/2022,

    getTitleAndAuthor: function(){
        return `This Issue title is ${this.title} and auothoe is ${this.author}`
    },
    getGeneralInfo: function(){
        return  ` repositoryName: ${this.repositoryNameAssociated} Title: ${this.title} Author: ${this.author}`
    }
}
console.log( Issue.getTitleAndAuthor());
console.log( Issue.getGeneralInfo() );