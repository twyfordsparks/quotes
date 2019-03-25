export class Quote {
    public showDescription: boolean;
    constructor(public id: number, public quoteName: string,public author:string, public completeDate: Date) {
        this.showDescription = false

    }
}