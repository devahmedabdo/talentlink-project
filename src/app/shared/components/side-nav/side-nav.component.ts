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
      name: "ESS",
      icon: "ESS",
      link: "/ess",
      subItem: [
        {
          title: "Requests",
          items: [
            {
              name: "Leave",
              link: "/ess/leave",
              icon: "leave",
            },
            {
              name: "Short Leave",
              link: "/ess/short-leave",
              icon: "short-leave",
            },
            {
              name: "Leave Encashment",
              link: "/ess/leave-encashment",
              icon: "leave-encashment",
            },
            {
              name: "Loan",
              link: "/ess/loan",
              icon: "loan",
            },
            {
              name: "Indemnity Encashment",
              link: "/ess/indemnity-encashment",
              icon: "indemnity-encashment",
            },
            {
              name: "AirTicket",
              link: "/ess/airTicket",
              icon: "airTicket",
            },
            {
              name: "Half Day Leave",
              link: "/ess/half-day-leave",
              icon: "half-day-leave",
            },
            {
              name: "Business Trip",
              link: "/ess/business-trip",
              icon: "business-trip",
            },
            {
              name: "Resume Duty",
              link: "/ess/resume-duty",
              icon: "resume-duty",
            },
            {
              name: "Other Request",
              link: "/ess/other-request",
              icon: "other-request",
            },
          ],
        },
        {
          title: "HR Inquiries",
          items: [
            {
              name: "My Requests",
              link: "/ess/my-requests",
              icon: "my-requests",
            },
            {
              name: "Leave Balance Report",
              link: "/ess/leave-balance-report",
              icon: "leave-balance-report",
            },
            {
              name: "Payroll",
              link: "/ess/payroll",
              icon: "payroll",
            },
          ],
        },
        {
          title: "Attendance",
          items: [
            {
              name: "Monthly Attendance",
              link: "/ess/monthly-attendance",
              icon: "monthly-attendance",
            },
            {
              name: "Attendance History",
              link: "/ess/",
              icon: "",
            },
            {
              name: "Attendance Approval",
              link: "/ess/",
              icon: "",
            },
            {
              name: "Shift Calendar",
              link: "/ess/",
              icon: "",
            },
            {
              name: "Random Shift",
              link: "/ess/",
              icon: "",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
            {
              name: "",
              link: "/ess/",
              icon: "",
            },
          ],
        },
      ],
    },
    {
      name: "Tests Module",
      icon: "Policies",
      link: "",
      subItem: [
        {
          // title: "adwd awkdak k",
          items: [
            {
              name: "Configuration",
              icon: "Configuration",
              link: "/config",
              miniSubMenu: [
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
              miniSubMenu: [
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
              miniSubMenu: [
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
              miniSubMenu: [
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
              miniSubMenu: [
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
              miniSubMenu: [
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
              miniSubMenu: [
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
          ],
        },
      ],
    },
  ];
  // nav: any[] = [
  //   {
  //     name: "Dashboard",
  //     icon: "Dashboard",
  //     link: "/",
  //   },
  //   {
  //     name: "Configuration",
  //     icon: "Configuration",
  //     link: "/config",

  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/config/a",
  //       },
  //       {
  //         name: "Dashboard",
  //         link: "/config/s",
  //       },
  //     ],
  //   },
  //   {
  //     name: "User Management",
  //     link: "/manage",
  //     icon: "User Management",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/manage/f",
  //       },
  //       {
  //         name: "Dashboard",
  //         link: "/manage/d",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Company",
  //     link: "/login",
  //     icon: "Company",
  //   },
  //   {
  //     name: "Employee",
  //     link: "/Employee",
  //     icon: "Employee",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/Employee/f",
  //       },
  //       {
  //         name: "Dashboard",
  //         link: "/Employee/d",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Workflow",
  //     link: "/login",
  //     icon: "Workflow",
  //   },
  //   {
  //     name: "Reports",
  //     link: "/login",
  //     icon: "Reports",
  //   },

  //   {
  //     name: "Reports Configuration",
  //     link: "/Reports",
  //     icon: "Reports Configuration",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/Reports/f",
  //       },
  //     ],
  //   },
  //   {
  //     name: "ESS",
  //     link: "/ESS",
  //     icon: "ESS",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/ESS/f",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Policies",
  //     link: "/Policies",
  //     icon: "Policies",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/Policies/f",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Transactions",
  //     link: "/Transactions",
  //     icon: "Transactions",
  //     subMenu: [
  //       {
  //         name: "Projects",
  //         link: "/Transactions/f",
  //       },
  //     ],
  //   },

  //   {
  //     name: "Attendance",
  //     link: "/login",
  //     icon: "Attendance",
  //   },
  //   {
  //     name: "Payroll",
  //     link: "/login",
  //     icon: "Payroll",
  //   },
  // ];
  setLink(link, arr) {
    let linkstatus = link.open;
    arr.forEach((ele) => {
      ele.open = false;
    });
    link.open = !linkstatus;
    console.log(link);
  }

  // setLink(link, arr) {
  //   // console.log("link - ", "'" + link.link + "'");
  //   // console.log("Active Link - ", "'" + this.activeLink + "'");
  //   arr.forEach((ele) => {
  //     if (!link.link.includes(ele.link)) {
  //       console.log(!ele.link.includes(ele.link));
  //       ele.open = false;
  //     }
  //     // if (ele.name !== link.name ) {
  //     //   ele.open = false;
  //     // }
  //   });
  //   if (link?.subItem) {
  //     link.open = !link.open;
  //   } else {
  //     // this.router.navigateByUrl(link.link);
  //   }
  // }
  activeLink: any = "";
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.activeLink = this.router.url;
    });
  }

  ngOnInit(): void {}
}
