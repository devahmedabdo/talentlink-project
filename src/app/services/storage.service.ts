import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

import * as CryptoJS from "crypto-js";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";

interface IStorage {
  value: any;
  expiresin: number;
  timestamp: number;
}

@Injectable({
  providedIn: "root",
})
export class StorageService {
  [x: string]: any;
  cryptoKey: any = "";

  userData: BehaviorSubject<any> = new BehaviorSubject("");

  constructor(private router: Router, private http: HttpClient) {}

  private get ourStorage(): Storage {
    return localStorage;
  }

  async setItem(
    key: string,
    value: any,
    expiresin: number = 168, // a week
    withLanguage = false
  ) {
    try {
      value = this.encryptData(value);
      const _value: IStorage = {
        value,
        timestamp: Date.now(), // in milliseconds
        expiresin, // in hours
      };

      // objects must be strings
      await this.ourStorage.setItem(
        this.getKey(key.split("").reverse().join(""), withLanguage),
        JSON.stringify(_value)
      );
    } catch (reason) {}
  }

  async getItem(key: string, withLanguage = false): Promise<any> {
    // check value
    try {
      const _key = this.getKey(key.split("").reverse().join(""), withLanguage);
      let value: any;

      value = await this.ourStorage.getItem(_key);
      if (!value) {
        return null;
      }
      // cast
      const _value: IStorage = JSON.parse(value);
      return this.decryptData(_value.value);
    } catch (reason) {
      return null;
    }
  }

  async getTime(key: string, withLanguage = false): Promise<any> {
    // check value
    try {
      const _key = this.getKey(key.split("").reverse().join(""), withLanguage);
      let value: any;

      value = await this.ourStorage.getItem(_key);
      if (!value) {
        return null;
      }

      // cast
      const _value = value;

      // calculate expiration, expiresin is in hours, so convert to milliseconds
      if (Date.now() - _value.timestamp > _value.expiresin * 3_600_000) {
        // if expired, remove
        this.ourStorage.removeItem(_key);
        return null;
      }
      return _value.timestamp;
    } catch (reason) {
      return null;
    }
  }

  removeItem(key: string, withLanguage = false) {
    this.ourStorage.removeItem(
      this.getKey(key.split("").reverse().join(""), withLanguage)
    );
  }

  logout() {
    // this.removeItem('token');
    // this.removeItem('userData');
    // this.removeItem('addresses');

    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }

  public clear(): void {
    // remove all prefixed items
    this.ourStorage.clear();
  }

  private getKey(key: string, withLanguage = false): string {
    return key;
  }

  encryptData(cipher: any): string {
    let key = CryptoJS.enc.Utf8.parse(environment.cryptoKey);
    return encodeURIComponent(
      CryptoJS.AES.encrypt(JSON.stringify(cipher), this.cryptoKey).toString()
    );
  }

  decryptData(cipher: any): string {
    let key = CryptoJS.enc.Utf8.parse(environment.cryptoKey);
    return JSON.parse(
      CryptoJS.AES.decrypt(decodeURIComponent(cipher), this.cryptoKey).toString(
        CryptoJS.enc.Utf8
      )
    );
  }
}
