import { Routes } from "@angular/router";
import { AuthGuard } from "./services/guard/auth-guard";
import { UnauthGuard } from "./services/guard/unauth.guard";
import { BlankComponent, SimplyWhiteLayout } from "./@pages/layouts";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "dashboard",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },

  {
    path: "ess",
    component: BlankComponent,
    children: [
      {
        path: "leave",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "short-leave",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "leave-encashment",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "tests",
    component: BlankComponent,
    children: [
      {
        path: "dashboard",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "config/lookups",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "config/settings",
        component: HomeComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "lab2000",
    component: SimplyWhiteLayout,
    // canActivate: [AuthGuard],
  },
  // {
  //   path: "",
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: DashboardComponent,
  //       canActivate: [AuthGuard],
  //     },
  //     {
  //       path: "dashboard",
  //       component: DashboardComponent,
  //       canActivate: [AuthGuard],
  //     },
  //   ],
  // },
  // {
  //   path: "application",
  //   canActivate: [AuthGuard],
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: ApplicationComponent,
  //     },
  //   ],
  // },
  // {
  //   path: "details/:uuid",
  //   canActivate: [AuthGuard],
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: ApplicationComponent,
  //     },
  //   ],
  // },

  // {
  //   path: "profile",
  //   canActivate: [AuthGuard],
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: ProfileComponent,
  //     },
  //   ],
  // },

  // {
  //   path: "home",
  //   canActivate: [AuthGuard],
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: DashboardComponent,
  //     },
  //   ],
  // },
  {
    path: "login",
    component: AppComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
    ],
  },
  // {
  //   path: "signup",
  //   component: BlankComponent,
  //   canActivate: [UnauthGuard],
  //   children: [
  //     {
  //       path: "",
  //       component: SignupComponent,
  //     },
  //   ],
  // },
  // { path: "**", redirectTo: "dashboard" },
  // {
  //   path: "",
  //   component: AppComponent,
  //   loadChildren: () =>
  //     import("./modules/app/app.module").then((m) => m.AppModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "auth",
  //   loadChildren: () =>
  //     import("./modules/auth/auth.module").then((m) => m.AuthModule),
  //   canActivate: [UnauthGuard],
  // },
  // {
  //   path: "auth",
  //   component: BlankComponent,
  //   // canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () =>
  //         import("./modules/auth/auth.module").then((m) => m.AuthModule),
  //     },
  //   ],
  // },
  // {
  //   path: "",
  //   component: BlankComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () =>
  //       import("./modules/app/app.module").then((m) => m.AppModule),
  //     },
  //   ],
  // },
  // {
  //   path: "",
  //   component: SimplyWhiteLayout,
  //   children: [
  //     {
  //       path: "",
  //       component: BlankComponent,
  //       canActivate: [AuthGuard]
  //     },
  //     // { path: 'inventory', component: InventoryComponent },
  //     // { path: '**', redirectTo: '' },
  //   ],
  // },
  // {
  // path: "asd",
  // component: SimplyWhiteLayout,
  // canActivate: [AuthGuard],
  // children: [
  //   {
  //     path: "",
  //     loadChildren: () =>
  //       import("./modules/app/app.module").then((m) => m.AppModule),
  //   },
  // ],
  // },
];
