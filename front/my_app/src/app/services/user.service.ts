import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { User } from '../models/user';
 
@Injectable({
    providedIn: 'root'
})
export class UserService {
    URL = "http://127.0.0.1:3005/users"
    constructor(private http: HttpClient) { }
 
    /** GET user from the server */
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.URL)
    }
 
    /** GET user by id. Will 404 if id not found */
    getUser(id: string): Observable<User> {
        return this.http.get<User>(`${this.URL}/${id}`)
    }
 
     /** GET user by id. Will 404 if id not found */
     delUser(id: string): Observable<User> {
        return this.http.delete<User>(`${this.URL}/${id}`)
    }
 
     /** create a  user  */
     addUser(user: User): Observable<User> {
         console.log('service add')
         return this.http.post<User>(`${this.URL}`,{'fName':User.fname,'accountNumber':User.accountNumber,})
        }
}

