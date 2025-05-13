export default {
  // GET APP BAR VALUE
  GetAppBarValue() {
    return Promise.resolve({
      data: {
        profile: {
          name: "VIJAY RAMESH",
          role: "ADMIN",
          imageUrl:
            "https://media.licdn.com/dms/image/v2/D5635AQGhYedlw9e92g/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1714500075878?e=1747742400&v=beta&t=wpKIcVVw3VK-axCgpMQ46kNyG6U-bk_zBzWg-ioKSqo",
          menu: [
            {
              menuName: "Profile",
            },
            {
              menuName: "Settings",
            },
            {
              menuName: "Logout",
            },
          ],
        },
        status: "S",
        errMsg: "",
      },
    });
  },
  // GET NAVIGATION DRAWER CONTENT
  GetNavValue() {
    return Promise.resolve({
      data: {
        navigationContent: [
          { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
          { title: "Flight", icon: "mdi-airplane-takeoff", to: "/flights" },
          {
            title: "Bookings",
            icon: "mdi-ticket-confirmation-outline",
            to: "/bookings",
          },
          {
            title: "Staff",
            icon: "mdi-account-multiple-outline",
            to: "/staff",
          },
          {
            title: "Help desk",
            icon: "mdi-chat-processing-outline",
            to: "/helpdesk",
          },
          { title: "Manage Aircrafts", icon: "mdi-cog", to: "/manage" },
          { title: "Reports & Analytics", icon: "mdi-poll", to: "/reports" },
          {
            title: "Broadcast Notification",
            icon: "mdi-bullhorn-outline",
            to: "/notification",
          },
          { title: "Payment & Refunds", icon: "mdi-bitcoin", to: "/payments" },
        ],
        app: {
          name: "FLIGHTMS",
          icon: "mdi-airplane",
        },
        status: "S",
        errMsg: "",
      },
    });
  },

  // GET DASHBOARD CARD CONTENT
  GetDashCardValue() {
    return Promise.resolve({
      data: {
        cardContent: [
          {
            icon: "mdi-bitcoin",
            title: "Sales",
            price: "$1,22,154",
            percentage: "25.26%",
            endColor: "#805ADF",
            startColor: "#E4DBFD",
          },
          {
            icon: "mdi-bitcoin",
            title: "sales",
            price: "$1,22,154",
            percentage: "25.26%",
            endColor: "#4ACB98",
            startColor: "#BBFFE4",
          },
          {
            icon: "mdi-bitcoin",
            title: "sales",
            price: "$1,22,154",
            percentage: "25.26%",
            endColor: "#1A78F2",
            startColor: "#BCD8FC",
          },
          {
            icon: "mdi-bitcoin",
            title: "sales",
            price: "$1,22,154",
            percentage: "25.26%",
            endColor: "#DEBE30",
            startColor: "#F1E7B9",
          },
        ],

        status: "S",
        errMsg: "",
      },
    });
  },
  // GET BOOKING CARD CONTENT
  GetBookingValue() {
    return Promise.resolve({
      data: {
        flightdata: [
          {
            aircraft: "Airbus A350",
            status: "Ready For Departure",
            depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
            arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
            duration: "13H 40Min",
            occupancy: "70% (40/280 Economy | 2/14 Business left)",
            crew: [
              "https://randomuser.me/api/portraits/thumb/men/11.jpg",
              "https://randomuser.me/api/portraits/thumb/men/12.jpg",
              "https://randomuser.me/api/portraits/thumb/women/13.jpg",
            ],
          },
        ],
        tableData: [
          {
            passenger: "Janet Adebayo (32 F)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "23 A",
            addOns: "23Kg baggage extra. Meal(Jan + 1 + 2 more)",
            status: "Pending",
          },
          {
            passenger: "Samuel Johnson (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "23 B",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },

          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
          {
            passenger: "Francis Doe (30 M)",
            bookingDate: "12 Aug 2022 - 12:25 am",
            class: "Economy",
            bookingRef: "9348fj73",
            seat: "Not selected",
            addOns: "",
            status: "Confirmed",
          },
        ],
        status: "S",
        errMsg: "",
      },
    });
  },

  // GET DASHBOARD RIGHT CARD CONTENT
  GetDashboardValue() {
    return Promise.resolve({
      data: {
        flightStatus: {
          regions: ["Region", "US", "EU", "Asia"],
          flights: [
            {
              aircraft: "A350",
              dep: "KLAX",
              etd: "ETD 1130z",
              atd: "1135Z",
              status: "Enroute",
              ete: "-03:08",
              arr: "KVNY",
              eta: "1130z",
              alert: true,
            },
            {
              aircraft: "A380",
              dep: "KFLL",
              etd: "ETD 1130z",
              atd: "-",
              status: "Taxi",
              ete: "-03:08",
              arr: "KPWK",
              eta: "1130z",
              alert: false,
            },
            {
              aircraft: "B737",
              dep: "HPN",
              etd: "ETD 1130z",
              atd: "1135Z",
              status: "Parked",
              ete: "-03:08",
              arr: "KBKL",
              eta: "1130z",
              alert: false,
            },
          ],
        },
        routes: {
          options: ["Last Week", "This Week"],
          routes: [
            { route: "Kuala Lumpur(KUL) to Singapore(SIN)", count: 120 },
            { route: "Hong Kong(HKG) to Taipei(TPE)", count: 110 },
            { route: "Toronto(YYZ) to Newyork(LGA)", count: 80 },
            { route: "Jakarta(CJK) to Kuala Lumpur(KUL)", count: 60 },
          ],
        },
        alert: {
          alerts: [
            {
              icon: "mdi-wifi-off",
              title: "Connection loss",
              subtitle: "N1234H",
              time: "20 min ago",
            },
            {
              icon: "mdi-signal-cellular-outline",
              title: "Less than 25% data remaining",
              subtitle: "Jet ConneX for B740Y2",
              time: "1 hour ago",
            },
          ],
        },
        flightMap: {
          infoCard: [
            {
              Key: "Enroute",
              value: "1",
              color: "blue",
            },
            {
              Key: "Taxi",
              value: "1",
              color: "red",
            },
            {
              Key: "Parked",
              value: "1",
              color: "grey",
            },
          ],
          googleMapSrc:
            "https://maps.google.com/maps?q=Europe&t=&z=3&ie=UTF8&iwloc=&output=embed",
        },
        performanceChart: {
          options: ["Today", "Yesterday"],
          fleetOccupancyChart: [30],
          delayChart: [10],
          cancellationChart: [80],
        },
        salesChart: {
          options: ["Last Week", "This Week"],
          BarChartVal: [],
        },
        status: "S",
        errMsg: "",
      },
    });
  },

  GetFlightContent() {
    return Promise.resolve({
      data: {
        flightHome: {
          tabValues: ["Upcoming", "Completed", "Real-time tracking"],
          actions: [
            "Edit Flight",
            "Assign Staff",
            "Manage Bookings",
            "Cancel Flight",
          ],
          flightsByDate: {
            "2025-05-04": [
              {
                aircraft: "Airbus A350",
                status: "Ready For Departure",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "70% (40/280 Economy | 2/14 Business left)",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
              {
                aircraft: "Airbus A350",
                status: "Cancelled",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "--",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
            ],
            "2025-05-05": [
              {
                aircraft: "Airbus A350",
                status: "Ready For Departure",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "70% (40/280 Economy | 2/14 Business left)",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
              {
                aircraft: "Airbus A350",
                status: "Cancelled",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "--",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
            ],
            "2025-05-06": [
              {
                aircraft: "Airbus A350",
                status: "Ready For Departure",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "70% (40/280 Economy | 2/14 Business left)",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
              {
                aircraft: "Airbus A350",
                status: "Cancelled",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "--",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
            ],
            "2025-05-07": [
              {
                aircraft: "Airbus A350",
                status: "Cancelled",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "--",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
            ],
            "2025-05-08": [
              {
                aircraft: "Airbus A350",
                status: "Ready For Departure",
                depart: { date: "Tue, 4 Jun 2024", time: "12:15", code: "YYZ" },
                arrive: { date: "Thu, 6 Jun 2024", time: "11:25", code: "DEL" },
                duration: "13H 40Min",
                occupancy: "70% (40/280 Economy | 2/14 Business left)",
                crew: [
                  "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                  "https://randomuser.me/api/portraits/thumb/men/12.jpg",
                  "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                ],
              },
            ],
          },
        },
        addFlights: {
          //stepper 1
          airports: ["JFK", "LAX", "Heathrow", "DXB"],
          routes: ["Route A", "Route B"],
          durations: ["1 hr", "2 hr 30 min", "5 hr", "12 hr"],
          // stepper 2
          timezones: ["UTC", "GMT", "IST"],
          days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        status: "S",
        errMsg: "",
      },
    });
  },
};
