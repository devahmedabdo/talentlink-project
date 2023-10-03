import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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
  ngOnDestroy(): void {
    // Swal.close();
  }
}
