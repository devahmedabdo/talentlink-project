import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { isPlatformBrowser } from "@angular/common";
import { StorageService } from "../storage.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private storage: StorageService
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> | any {
    if (request.url.includes("login") || request.url.includes("register")) {
      return next.handle(request);
    }

    if (
      this.storage.decryptData(
        JSON.parse(localStorage.getItem("nekot") || "")?.value
      )
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.storage.decryptData(
            JSON.parse(localStorage.getItem("nekot") || "")?.value
          )}`,
        },
      });
    }

    return next.handle(request);
  }
}
