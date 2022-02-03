import { Player } from './Player'

export class PlayerWithAccount extends Player {
    public email:string;
    private password:string;
    public profilePicture:string;

    public constructor(id:BigInteger, pseudo:string, email:string, password:string, profilePicture:string) {
        super(id,pseudo);
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}