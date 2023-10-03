import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { MessageService } from "../../../@pages/components/message/message.service";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit {
  @Input() title: any;
  @Input() info: any;
  apiKey = environment.apiUrl;

  errors: any = [];
  constructor(
    private http: HttpClient,
    private _notification: MessageService
  ) {}

  ngOnInit(): void {}

  updateApp() {
    this.info["perms"] = this.info.permissions;
    this.http
      .patch(this.apiKey + "app/" + this.info.uuid + "/update", this.info)
      .subscribe({
        next: (res: any) => {
          this._notification.create("success", "App Updated Successfully!", {
            Position: "-right",
            Style: "simple",
            Duration: 2000,
          });
          this.errors = null;
        },
        error: (err: any) => {
          this._notification.create("error", "App Updated error!", {
            Position: "-right",
            Style: "simple",
            Duration: 2000,
          });
          if (err?.status == 422) {
            for (const key in err?.error?.errors) {
              this.errors.push(err?.error?.errors[key]);
            }
          }
        },
      });
  }
}
