export class User {
    private _id: string;
    private _username: string;

    constructor(username: string) {
        this._username = username;
    }

    static fromJSON(json: any): User {
        const weightEntry = new User(
            json.username
        );
        weightEntry._id = json._id;
        return weightEntry;
    }

    toJSON() {
        return {
            id: this._id,
            username: this._username
        };
    }

    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }
}