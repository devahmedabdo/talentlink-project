import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../storage.service";

@Injectable({
  providedIn: "root",
})
export class UnauthGuard implements CanActivate {
  authourized: any;
  constructor(private router: Router, private storageService: StorageService) {
    if (localStorage.getItem("nekot")) {
      this.authourized = this.storageService.decryptData(
        JSON.parse(localStorage.getItem("nekot") || "")?.value
      );
    } else {
      this.authourized = null;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
    | any {
    if (!this.authourized) {
      return true;
    } else {
      this.router.navigateByUrl(``);
      return false;
    }
  }
}
