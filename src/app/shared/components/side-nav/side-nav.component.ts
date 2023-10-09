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
      icon: "Dashboard",
      link: "/",
    },
    {
      name: "Configuration",
      icon: "Configuration",
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
      icon: "User Management",
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
    {
      name: "Company",
      link: "/login",
      icon: "Company",
    },
    {
      name: "Employee",
      link: "/Employee",
      icon: "Employee",
      subMenu: [
        {
          name: "Projects",
          link: "/Employee/f",
        },
        {
          name: "Dashboard",
          link: "/Employee/d",
        },
      ],
    },
    {
      name: "Workflow",
      link: "/login",
      icon: "Workflow",
    },
    {
      name: "Reports",
      link: "/login",
      icon: "Reports",
    },

    {
      name: "Reports Configuration",
      link: "/Reports",
      icon: "Reports Configuration",
      subMenu: [
        {
          name: "Projects",
          link: "/Reports/f",
        },
      ],
    },
    {
      name: "ESS",
      link: "/ESS",
      icon: "ESS",
      subMenu: [
        {
          name: "Projects",
          link: "/ESS/f",
        },
      ],
    },
    {
      name: "Policies",
      link: "/Policies",
      icon: "Policies",
      subMenu: [
        {
          name: "Projects",
          link: "/Policies/f",
        },
      ],
    },
    {
      name: "Transactions",
      link: "/Transactions",
      icon: "Transactions",
      subMenu: [
        {
          name: "Projects",
          link: "/Transactions/f",
        },
      ],
    },

    {
      name: "Attendance",
      link: "/login",
      icon: "Attendance",
    },
    {
      name: "Payroll",
      link: "/login",
      icon: "Payroll",
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
