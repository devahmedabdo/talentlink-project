import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-log-two",
  templateUrl: "./log-two.component.html",
  styleUrls: ["./log-two.component.scss"],
})
export class LogTwoComponent implements OnInit {
  openTermsBox: any = false;
  token: any;
  loginForm = this.fb.group({
    email: [
      window.localStorage.getItem("email") || "",
      [Validators.required, Validators.email],
    ],
    password: [
      window.localStorage.getItem("password") || "",
      [Validators.required],
    ],
  });
  formStatus: any = {
    errors: [],
    message: null,
    loading: false,
  };
  rememberMe: boolean = false;

  apiKey = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  login(data: any) {
    this.formStatus.message = null;
    this.formStatus.loading = true;

    setTimeout(() => {
      this.formStatus.loading = false;
      this.formStatus.message = "err?.error?.message;";
    }, 3030);
  }

  storeDate() {
    this.formStatus.message = null;
    this.formStatus.errors = [];
    if (this.rememberMe) {
      window.localStorage.setItem(
        "email",
        `${this.loginForm.controls.email.value}`
      );
      window.localStorage.setItem(
        "password",
        `${this.loginForm.controls.password.value}`
      );
    }
  }
}
