export class SuggestedUser {
    profileName: string;
    position: string;
    company: string;
    numOfConnections: string;
    cover: string;


    constructor( 
        profileName: string,
        position: string,
        company: string,
        numOfConnections: string,
        cover: string,

    ) 
     {
        this.profileName = profileName;
        this.position = position;
        this.company = company;
        this.numOfConnections = numOfConnections;
        this.cover = cover;

    }
}
   