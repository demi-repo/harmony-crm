import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const RouteConstants = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div />,
  },
];

export default RouteConstants;
// export const ROUTES_CONSTANTS = [
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/recipients",
//     element: <Recipient_desktop />,
//   },
//   {
//     path: "/recipients/recipient",
//     element: <Recipient />,
//   },
//   {
//     path: "/report/event",
//     element: <EventReport />,
//   },
//   {
//     path: "/maintask",
//     element: <MainTask />,
//   },
//   {
//     path: "/daily-planner",
//     element: <DailyPlanner />,
//   },
//   {
//     path: "/reporting/presence",
//     element: <Presence />,
//   },
//   {
//     path: "/reporting/expense",
//     element: <Expense />,
//   },
//   {
//     path: "/reporting/employment",
//     element: <Employment />,
//   },
//   {
//     path: "/employment",
//     element: <Opportunities />,
//   },
//   {
//     path: "/crm/service-applicants",
//     element: <ServiceApplicants />,
//   },
//   {
//     path: "/crm/customers",
//     element: <Customers />,
//   },
//   {
//     path: "/tutorials",
//     element: <Tutorials />,
//   },
//   {
//     path: "/alerts",
//     element: <Alerts />,
//   },
//   {
//     path: "*",
//     element: <PageNotFound />,
//   },
// ];
