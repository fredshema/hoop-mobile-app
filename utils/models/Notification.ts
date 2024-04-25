export default class {
    id: string;
    title: string;
    description: string;
    date: string;
    read: boolean;

    constructor(id: string, title: string, description: string, date: string, read: boolean) {
        console.log("Notification", id, title, description, date, read);
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.read = read;
    }
}