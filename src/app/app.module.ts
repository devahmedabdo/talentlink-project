import { QuillModule } from "ngx-quill";
import { TabsModule } from "ngx-bootstrap/tabs";
import { HttpModule } from "@angular/http";
//Angular Core
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  BrowserModule,
  // HammerGestureConfig,
  // HAMMER_GESTURE_CONFIG,
} from "@angular/platform-browser";
import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";

//Routing

//Layouts - Import required layout only
import { BlankComponent, SimplyWhiteLayout } from "./@pages/layouts";

//Thirdparty Components / Plugins - Optional
// import {
//   PERFECT_SCROLLBAR_CONFIG,
//   PerfectScrollbarModule,
// } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { RestApiService } from "./services/rest-api.service";
import { ApiInterceptor } from "./services/interceptor/api.interceptor";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { HorizontalMenuComponent } from "./@pages/components/horizontal-menu/horizontal-menu.component";
import { QuickviewComponent } from "./@pages/components/quickview/quickview.component";
import { QuickviewService } from "./@pages/components/quickview/quickview.service";
import { SearchOverlayComponent } from "./@pages/components/search-overlay/search-overlay.component";
import { SidebarComponent } from "./@pages/components/sidebar/sidebar.component";
import { pagesToggleService } from "./@pages/services/toggler.service";
import { SharedModule } from "./@pages/components/shared.module";
import { pgListViewModule } from "./@pages/components/list-view/list-view.module";
import { pgCardModule } from "./@pages/components/card/card.module";
// import { NvD3Module } from 'ngx-nvd3';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ModalModule } from "ngx-bootstrap/modal";
import { LoginComponent } from "./auth/login/login.component";

import { SideNavComponent } from "./shared/components/side-nav/side-nav.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { pgSelectComponent } from "./@pages/components/select/select.component";
import { pgSelectModule } from "./@pages/components/select/select.module";
import { pgUploadModule } from "./@pages/components/upload/upload.module";
import { MessageModule } from "./@pages/components/message/message.module";
import { MessageService } from "./@pages/components/message/message.service";
import { HomeComponent } from "./home/home.component";
import { pgTabsModule } from "./@pages/components/tabs/tabs.module";
import { LogTwoComponent } from './auth/log-two/log-two.component';
import { LogThreeComponent } from './auth/log-three/log-three.component';
import { LogFourComponent } from './auth/log-four/log-four.component';
// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true,
// };

//Hammer Config Overide
//https://github.com/angular/angular/issues/10541
// @Injectable()
// export class AppHammerConfig extends HammerGestureConfig {
//   overrides = <any>{
//     pinch: { enable: false },
//     rotate: { enable: false },
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    SimplyWhiteLayout,
    BlankComponent,
    SidebarComponent,
    LoginComponent,
    HeaderComponent,
    QuickviewComponent,
    SearchOverlayComponent,
    HorizontalMenuComponent,
    SideNavComponent,
    HomeComponent,
    LogTwoComponent,
    LogThreeComponent,
    LogFourComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    pgTabsModule,

    // PerfectScrollbarModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    pgListViewModule,
    PaginationModule,
    ModalModule,
    pgSelectModule,
    pgUploadModule,
    MessageModule,
  ],
  providers: [
    QuickviewService,
    MessageService,
    pagesToggleService,
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    // },
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: AppHammerConfig,
    // },
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    // },
    RestApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, SideNavComponent],
})
export class AppModule {}
