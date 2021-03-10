import Signin from "views/pages/signin.js";
import Signup from "views/pages/signup.js";

// admin
import Adashboard from "views/pages/administrative/administrative_dashboard.js";
import Aapimanagement from "views/pages/administrative/api_management.js";
import Aapisandbox from "views/pages/administrative/api_sandbox.js";
import APaybill from "views/pages/administrative/pay_bill.js";
import Ausermanagement from "views/pages/administrative/user_management.js";

// developer
import Ddashboard from "views/pages/developer/dev_dashboard.js";
import Dapimanagement from "views/pages/developer/developer_api_management.js";
import Dapisandbox from "views/pages/developer/dev_api_sandbox.js";
import Dpaybill from "views/pages/developer/dev_pay_bill.js";
import Dusermanagement from "views/pages/developer/dev_user_management.js";

const routes = [
  { path: "/signin", component: Signin, layout: "/auth" },
  { path: "/signup", component: Signup, layout: "/auth" },
  {
    collapse: true,
    group: "admin",
    name: "Administrative Portal",
    icon: "ni ni-briefcase-24 text-warning",
    state: "adminCollapse",
    views: [
      {
        group: "admin",
        path: "/administrative_dashboard",
        name: "Dashboard",
        miniName: "A",
        component: Adashboard,
        layout: "/admin",
      },
      {
        group: "admin",
        path: "/api_management",
        name: "API Management",
        miniName: "B",
        component: Aapimanagement,
        layout: "/admin",
      },
      // {
      //   path: "/api_sandbox",
      //   name: "API Sandbox",
      //   miniName: "C",
      //   component: Aapisandbox,
      //   layout: "/admin"
      // },
      {
        group: "admin",
        path: "/payment_and_billing",
        name: "Payment & Billing",
        miniName: "D",
        component: APaybill,
        layout: "/admin",
      },
      {
        group: "admin",
        path: "/user_management",
        name: "User Management",
        miniName: "E",
        component: Ausermanagement,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    group: "user",
    name: "Developer Portal",
    icon: "ni ni-shop text-primary",
    state: "pengurusanMetadataCollapse",
    views: [
      {
        group: "user",
        path: "/developer_dashboard",
        name: "Dashboard",
        miniName: "F",
        component: Ddashboard,
        layout: "/user",
      },
      {
        group: "user",
        path: "/developer_api_management",
        name: "API Management",
        miniName: "G",
        component: Dapimanagement,
        layout: "/user",
      },
      {
        group: "user",
        path: "/developer_api_sandbox",
        name: "API Sandbox",
        miniName: "H",
        component: Dapisandbox,
        layout: "/user",
      },
      {
        group: "user",
        path: "/developer_payment_billing",
        name: "Payment & Biling",
        miniName: "J",
        component: Dpaybill,
        layout: "/user",
      },
      // ,
      // {
      //   path: "/developer_user_management",
      //   name: "User Management",
      //   miniName: "I",
      //   component: Dusermanagement,
      //   layout: "/admin"
      // }
    ],
  },
];

export default routes;
