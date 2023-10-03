import { Component, OnInit } from "@angular/core";
import { hReveal } from "../../animations/animation";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  animations: [hReveal],
})
export class SideNavComponent implements OnInit {
  nav: any[] = [
    {
      name: "Dashboard",
      icon: "dashboard",
      link: "/",
    },
    {
      name: "Configuration",
      icon: "configuration",
      link: "/config",

      subMenu: [
        {
          name: "Projects",
          link: "/config/a",
        },
        {
          name: "Dashboard",
          link: "/config/s",
        },
      ],
    },
    {
      name: "User Management",
      link: "/manage",
      icon: "configuration",
      subMenu: [
        {
          name: "Projects",
          link: "/manage/f",
        },
        {
          name: "Dashboard",
          link: "/manage/d",
        },
      ],
    },
  ];
  setLink(link) {
    console.log("link - ", "'" + link.link + "'");
    console.log("Active Link - ", "'" + this.activeLink + "'");
    this.nav.forEach((ele) => {
      if (!link.link.includes(ele.link)) {
        console.log(!ele.link.includes(ele.link));
        ele.open = false;
      }
      // if (ele.name !== link.name ) {
      //   ele.open = false;
      // }
    });
    if (link?.subMenu) {
      link.open = !link.open;
    } else {
      this.router.navigateByUrl(link.link);
    }
  }
  activeLink: any = "";
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.activeLink = this.router.url;
    });
  }

  ngOnInit(): void {}
}
