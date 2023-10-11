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
      icon: "ess",
      includeLink: "/ess/",
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
              link: "/ess/attendance-history",
              icon: "attendance-history",
            },
            {
              name: "Attendance Approval",
              link: "/ess/attendance-approval",
              icon: "attendance-approval",
            },
            {
              name: "Shift Calendar",
              link: "/ess/shift-calendar",
              icon: "shift-calendar",
            },
            {
              name: "Random Shift",
              link: "/ess/random-shift",
              icon: "random-shift",
            },
          ],
        },
        {
          title: "Update Information",
          items: [
            {
              name: "Address",
              link: "/ess/address",
              icon: "address",
            },
            {
              name: "Contact",
              link: "/ess/contact",
              icon: "contact",
            },
            {
              name: "Attachment",
              link: "/ess/attachment",
              icon: "attachment",
            },
            {
              name: "Assets",
              link: "/ess/assets",
              icon: "assets",
            },
            {
              name: "Education",
              link: "/ess/education",
              icon: "education",
            },
          ],
        },
        {
          title: "Dashboard& Reports",
          items: [
            {
              name: "Dashboard",
              link: "/ess/dashboard",
              icon: "dashboard",
            },
          ],
        },
      ],
    },
    {
      name: "Tests Module",
      icon: "policies",
      includeLink: "/tests/",
      subItem: [
        {
          items: [
            {
              name: "Dashboard",
              icon: "dashboard",
              link: "/tests/dashboard",
            },
            {
              name: "Configuration",
              icon: "Configuration",
              includeLink: "/tests/config/",
              miniSubMenu: [
                {
                  name: "Lookups",
                  link: "/tests/config/lookups",
                  icon: "lookups",
                },
                {
                  name: "Settings",
                  link: "/tests/config/settings",
                  icon: "settings",
                },
                {
                  name: "Mandatory Fields",
                  link: "/tests/config/mandatory-fields",
                  icon: "mandatory-fields",
                },
                {
                  name: "Country",
                  link: "/tests/config/country",
                  icon: "country",
                },
                {
                  name: "Area",
                  link: "/tests/config/area",
                  icon: "area",
                },
                {
                  name: "Bank",
                  link: "/tests/config/bank",
                  icon: "bank",
                },
                {
                  name: "Bank Branch",
                  link: "/tests/config/bank-branch",
                  icon: "bank-branch",
                },
                {
                  name: "Payment Group",
                  link: "/tests/config/payment-group",
                  icon: "payment-group",
                },
                {
                  name: "Levels",
                  link: "/tests/config/levels",
                  icon: "levels",
                },
                {
                  name: "Grades",
                  link: "/tests/config/grades",
                  icon: "grades",
                },
                {
                  name: "Positions",
                  link: "/tests/config/positions",
                  icon: "positions",
                },
                {
                  name: "Attachment Type",
                  link: "/tests/config/attachment-type",
                  icon: "attachment-type",
                },
                {
                  name: "Extra Field",
                  link: "/tests/config/extra-field",
                  icon: "extra-field",
                },
                {
                  name: "Geolocation Setup",
                  link: "/tests/config/geolocation-setup",
                  icon: "geolocation-setup",
                },
                {
                  name: "Modules",
                  link: "/tests/config/modules",
                  icon: "modules",
                },
                {
                  name: "News",
                  link: "/tests/config/news",
                  icon: "news",
                },
              ],
            },
            {
              name: "User Management",
              includeLink: "/tests/user-management/",
              icon: "user-management",
              miniSubMenu: [
                {
                  name: "Users",
                  link: "/tests/user-management/users",
                  icon: "users",
                },
                {
                  name: "Access Roles",
                  link: "/tests/user-management/access-roles",
                  icon: "access-roles",
                },
              ],
            },
            {
              name: "Company",
              link: "/tests/company/",
              icon: "company",
            },
            {
              name: "Employee",
              includeLink: "/tests/employee/",
              icon: "employee",
              miniSubMenu: [
                {
                  name: "Employee Profile",
                  link: "/tests/employee/employee-profile",
                  icon: "employee-profile",
                },
                {
                  name: "Initial Leave Balance",
                  link: "/tests/employee/initial-leave-balance",
                  icon: "initial-leave-balance",
                },
                {
                  name: "Leave Balance Provision",
                  link: "/tests/employee/leave-balance-provision",
                  icon: "leave-balance-provision",
                },
              ],
            },
            {
              name: "Workflow",
              link: "/tests/login/",
              icon: "workflow",
            },
            {
              name: "Reports",
              link: "/tests/reports/",
              icon: "reports",
            },
            {
              name: "Reports Configuration",
              includeLink: "/tests/reports/",
              icon: "reports-configuration",
              miniSubMenu: [
                {
                  name: "Template Builder",
                  link: "/tests/reports/template-builder",
                  icon: "template-builder",
                },
              ],
            },
            {
              name: "ESS",
              includeLink: "tests/ess/",
              icon: "ess",
              miniSubMenu: [
                {
                  name: "Dynamic Forms",
                  link: "/tests/ess/dynamic-forms",
                  icon: "dynamic-forms",
                },
                {
                  name: "Upload information List",
                  link: "/tests/ess/upload-information-list",
                  icon: "upload-information-list",
                },
                {
                  name: "Company Test",
                  link: "/tests/ess/company-test",
                  icon: "company-test",
                },
                {
                  name: "Random Shift",
                  link: "/tests/ess/random-shift",
                  icon: "random-shift",
                },
              ],
            },
            {
              name: "Policies",
              includeLink: "/tests/policies/",
              icon: "policies",
              miniSubMenu: [
                {
                  name: "Master Holiday",
                  link: "/tests/policies/master-holiday",
                  icon: "master-holiday",
                },
                {
                  name: "Attendance",
                  link: "/tests/policies/attendance",
                  icon: "attendance",
                },
                {
                  name: "Public Holiday",
                  link: "/tests/policies/public-holiday",
                  icon: "public-holiday",
                },
                {
                  name: "Contracts",
                  link: "/tests/policies/contracts",
                  icon: "contracts",
                },
                {
                  name: "Leave Type",
                  link: "/tests/policies/leave-type",
                  icon: "leave-type",
                },
                {
                  name: "Half Day  Leave",
                  link: "/tests/policies/half-day-leave",
                  icon: "half-day-leave",
                },
                {
                  name: "Short Leave",
                  link: "/tests/policies/short-leave",
                  icon: "short-leave",
                },
                {
                  name: "Social Security",
                  link: "/tests/policies/social-security",
                  icon: "social-security",
                },
                {
                  name: "Taxes",
                  link: "/tests/policies/taxes",
                  icon: "taxes",
                },
                {
                  name: "Leave Encashment",
                  link: "/tests/policies/leave-encashment",
                  icon: "leave-encashment",
                },
                {
                  name: "Indemnity Encashment",
                  link: "/tests/policies/indemnity-encashment",
                  icon: "indemnity-encashment",
                },
                {
                  name: "Loan",
                  link: "/tests/policies/loan",
                  icon: "loan",
                },
                {
                  name: "End Of Service",
                  link: "/tests/policies/end-of-service",
                  icon: "end-Of-service",
                },
                {
                  name: "Policy Profile",
                  link: "/tests/policies/policy-profile",
                  icon: "policy-profile",
                },
                {
                  name: "Attendance Setup",
                  link: "/tests/policies/attendance-setup",
                  icon: "attendance-setup",
                },
                {
                  name: "Shift Setup",
                  link: "/tests/policies/shift-setup",
                  icon: "shift-setup",
                },
                {
                  name: "Violation Policy",
                  link: "/tests/policies/violation-policy",
                  icon: "violation-policy",
                },
                {
                  name: "Overtime Policy",
                  link: "/tests/policies/overtime-policy",
                  icon: "overtime-policy",
                },
                {
                  name: "Calendar",
                  link: "/tests/policies/calendar",
                  icon: "calendar",
                },
                {
                  name: "Payroll",
                  link: "/tests/policies/payroll",
                  icon: "payroll",
                },
              ],
            },
            {
              name: "Transactions",
              includeLink: "/tests/transactions/",
              icon: "transactions",
              miniSubMenu: [
                {
                  name: "Balance Adjustment",
                  link: "/tests/transactions/balance-adjustment",
                  icon: "balance-adjustment",
                },
                {
                  name: "Employee Addition",
                  link: "/tests/transactions/employee-addition",
                  icon: "employee-addition",
                },
                {
                  name: "Employee Short Leave",
                  link: "/tests/transactions/employee-short-leave",
                  icon: "employee-short-leave",
                },
                {
                  name: "Employee Deduction",
                  link: "/tests/transactions/employee-deduction",
                  icon: "employee-deduction",
                },
                {
                  name: "Employee Loans",
                  link: "/tests/transactions/employee-loans",
                  icon: "employee-loans",
                },
                {
                  name: "Employee Leave",
                  link: "/tests/transactions/employee-leave",
                  icon: "employee-leave",
                },
                {
                  name: "Employee Other Request",
                  link: "/tests/transactions/employee-other-request",
                  icon: "employee-other-request",
                },
                {
                  name: "Employee Medical",
                  link: "/tests/transactions/employee-medical",
                  icon: "employee-medical",
                },
                {
                  name: "Employee Leave Encashment",
                  link: "/tests/transactions/employee-leave-encashment",
                  icon: "employee-leave-encashment",
                },
                {
                  name: "Half Day Leave",
                  link: "/tests/transactions/half-day-leave",
                  icon: "half-day-leave",
                },
                {
                  name: "Employee Indemnity Encashment",
                  link: "/tests/transactions/employee-indemnity-encashment",
                  icon: "employee-indemnity-encashment",
                },
                {
                  name: "Employee Warning",
                  link: "/tests/transactions/employee-warning",
                  icon: "employee-warning",
                },
                {
                  name: "Employee  Business Trip",
                  link: "/tests/transactions/employee-business-trip",
                  icon: "employee-business-trip",
                },
                {
                  name: "Employee Promotion",
                  link: "/tests/transactions/employee-promotion",
                  icon: "employee-promotion",
                },
                {
                  name: "AirTicket",
                  link: "/tests/transactions/airTicket",
                  icon: "airTicket",
                },
                {
                  name: "Employee Violation ",
                  link: "/tests/transactions/employee-violation ",
                  icon: "employee-violation",
                },
                {
                  name: "Employee Overtime",
                  link: "/tests/transactions/employee-overtime",
                  icon: "employee-overtime",
                },
                {
                  name: "Employee Transfer",
                  link: "/tests/transactions/employee-transfer",
                  icon: "employee-transfer",
                },
                {
                  name: "Employee End Of Service",
                  link: "/tests/transactions/employee-end-of-service",
                  icon: "employee-end-of-service",
                },
                {
                  name: "Employee Rejoin",
                  link: "/tests/transactions/employee-rejoin",
                  icon: "employee-rejoin",
                },
                {
                  name: "Employee Resume Duty",
                  link: "/tests/transactions/employee-resume-duty",
                  icon: "employee-resume-duty",
                },
              ],
            },
            {
              name: "Attendance",
              link: "/tests/login",
              icon: "attendance",
            },
            {
              name: "Payroll",
              link: "/tests/login",
              icon: "payroll",
            },
            {
              name: "Login",
              link: "/login",
              icon: "payroll",
            },
          ],
        },
      ],
    },
  ];

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
