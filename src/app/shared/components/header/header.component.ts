import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { uReveal, rReveal } from "../../animations/animation";
import { StorageService } from "../../../services/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [uReveal, rReveal],
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit(): void {
    // this.getData();
  }
  modal: any = {
    type: null,
  };
  quickAccess: any[] = [
    {
      title: "CONFIGURATION",
      icon: "gears.svg",
      twoColSubItem: true,
      subItem: [
        {
          name: "Lookups",
          link: "",
        },
        {
          name: "Settings",
          link: "",
        },
        {
          name: "Mandatory Fields",
          link: "",
        },
        {
          name: "Country",
          link: "",
        },
        {
          name: "Area",
          link: "",
        },
        {
          name: "Bank",
          link: "",
        },
        {
          name: "Bank Branch",
          link: "",
        },
        {
          name: "Payment Group",
          link: "",
        },
        {
          name: "Levels",
          link: "",
        },
        {
          name: "Grades",
          link: "",
        },
        {
          name: "Positions",
          link: "",
        },
        {
          name: "Attachment Type",
          link: "",
        },
        {
          name: "Extra Field",
          link: "",
        },
        {
          name: "Geolocation Setup",
          link: "",
        },
        {
          name: "Modules",
          link: "",
        },
        {
          name: "News",
          link: "",
        },
      ],
    },
    {
      title: "EMPLOYEE",
      icon: "users-medical.svg",
      subItem: [
        {
          name: "Employee Profile",
          link: "",
        },
        {
          name: "Initial Leave Balance",
          link: "",
        },
        {
          name: "Leave Balance Provision",
          link: "",
        },
      ],
    },
    {
      title: "REPORTS CONFIGURATION",
      icon: "stats.svg",
      subItem: [
        {
          name: "Template Builder",
          link: "",
        },
      ],
    },
  ];
  searchTypes: any[] = [
    {
      name: "Configuration",
      id: 1,
    },
    {
      name: "User Managment",
      id: 2,
    },
    {
      name: "Company",
      id: 3,
    },
    {
      name: "Employee",
      id: 4,
    },
    {
      name: "Workflow",
      id: 5,
    },
    {
      name: "Reports",
      id: 6,
    },
    {
      name: "Reports Configuration",
      id: 7,
    },
    {
      name: "Ess",
      id: 8,
    },
    {
      name: "Policies",
      id: 9,
    },
  ];
  settings: any[] = [
    {
      name: "Lookups",
      link: "",
    },
    {
      name: "Settings",
      link: "",
    },
    {
      name: "Mandatory Fields",
      link: "",
    },
    {
      name: "Country",
      link: "",
    },
    {
      name: "Area",
      link: "",
    },
    {
      name: "Bank",
      link: "",
    },
    {
      name: "Bank Branch",
      link: "",
    },
    {
      name: "Payment Group",
      link: "",
    },
    {
      name: "Levels",
      link: "",
    },
    {
      name: "Grades",
      link: "",
    },
    {
      name: "Positions",
      link: "",
    },
    {
      name: "Attachment Type",
      link: "",
    },
    {
      name: "Extra Field",
      link: "",
    },
    {
      name: "Geolocation Setup",
      link: "",
    },
    {
      name: "Modules",
      link: "",
    },
    {
      name: "News",
      link: "",
    },
  ];
  modules: any[] = [
    {
      name: "Hr Core",
      dis: "Test text here",
      link: "",
      icon: "hr-core.svg",
    },
    {
      name: "Attendance",
      dis: "Test text here",
      link: "",
      icon: "attendence.svg",
    },
    {
      name: "Administration",
      dis: "Test text here",
      link: "",
      icon: "administration.svg",
    },
    {
      name: "Test",
      dis: "Test text here",
      link: "",
      icon: "test.svg",
    },
    {
      name: "ESS",
      dis: "Test text here",
      link: "",
      icon: "ess.svg",
    },
  ];

  user: any = {
    name: "Username",
    email: "Company@info.com",
    avatar: "avatar.svg",
    empNo: "868878777",
    fingerNo: "868878777",
  };
  // getData() {
  //   this.storageService.getItem("userData").then((res) => {
  //     if (res) {
  //       this.user = res;
  //       this.user.loged = true;
  //     } else {
  //       this.user = null;
  //     }
  //   });
  // }
  log(asd: any) {
    console.log(asd);
  }
  closePopup() {
    this.modal.type = null;
  }

  // loading = false;
  // logOut() {
  //   this.storageService.logout();
  //   location.reload();
  // }
}
