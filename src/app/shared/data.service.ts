
import { Injectable } from '@angular/core';
import * as usersData from './users.json';

type User = {
    createdAt: string//date
    name: string
    avatar: string//url
    country: string
    state: string
    yearsOfExperience: number
    certificateCount: number,
    numberOfInternships: number,
    summary: string
    id: string
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    //constructor(private http: HttpClient) { }

   // private users = users

    getUsers() {
        return Object.values(usersData);
    }
    getUsersSummary() {
        //console.log(this.getUsers())
        //console.log(this.getUsers())
        //console.log(Array.isArray(usersData))

        return this.getUsers().map(user => {
            return { name: user.name, id: user.id }
        })
    }
    getUser(id: string) {
        const key = parseInt(id);
        return usersData[key];
    }
}
