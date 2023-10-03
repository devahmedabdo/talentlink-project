import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  get(url: any, token?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Accept-Language": "ar",
      }),
    };
    return this.http.get(url, httpOptions);
  }

  // post(url: any, data: any, token: any): Observable<any> {

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     }),
  //   };
  //   return this.http.post(
  //     'https://' + this.merchantID + this.apiURL + url,
  //     JSON.stringify(data),
  //     httpOptions
  //   );
  // }

  // Error handling
  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
