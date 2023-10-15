
// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as usersData from './users.json'
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

    users = usersData;

    getUsers() {
        return this.users;
    }
    getUsersSummary() {
        const users = this.users;
        return users.map(user => {
            return { name: user.name, id: user.id }
        })
    }
    getUser(id: string) {
        const key = parseInt(id);
        return this.users[key];
    }
}
