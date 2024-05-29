import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Bike } from './products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};

// when an old token expires, you can update the authorization header before making the next request.
// httpOptions.headers =
//   httpOptions.headers.set('Authorization', 'my-new-auth-token');

@Injectable({
  providedIn: 'root',
})

  export class BikesService {

    private bikesUrl = 'https://bikeindex.org:443/api/v3/'; 

    getBikes(): Observable<any> {
     return this.http.get<any>(this.bikesUrl+'search').pipe(tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any>('getBikes', []))
      );
    }


    /** POST: add a new hero to the database */
  addBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.bikesUrl+'bikes', bike, httpOptions)
      .pipe(
        catchError(this.handleError('addBike', bike))
      );
  }

    /** DELETE: delete the hero from the server */
  deleteBike(id: number): Observable<unknown> {
    const url = `${this.bikesUrl+'bikes'}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url , httpOptions)
      .pipe(
        catchError(this.handleError('deleteBike'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
updateBike(bike: Bike): Observable<Bike> {
  const url = `${this.bikesUrl+'bikes'}/${bike.id}`;
  return this.http.put<Bike>(url, bike, httpOptions)
    .pipe(
      catchError(this.handleError('updateBike', bike))
    );
}

    private log(message: string) {
        console.log(message)
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
        
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
        
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

  
    constructor(
        private http: HttpClient,
    ) { }
  }