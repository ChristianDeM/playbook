const PullRequest = {
    title:"Title",
    branchName:"Branchnamer",
    dateCreated:19/02/2022,
    status:true,
    repositoryNameAssociated:"ChristainDM",
    author:"christianDM",

    GetStatus: function(){
        return  this.status
    },
    GetTitleandAuthor: function(){
        return `This repository ${this.title} was created by ${this.author}`
    }

}
console.log(PullRequest.GetStatus());
console.log(PullRequest.GetTitleandAuthor());