// Accordions
let accordionStatus = [
  { id: "accInfo", status: 0 },
  { id: "accCamp", status: 0 },
  { id: "accVC", status: 0 },
  { id: "accArt", status: 0 },
  { id: "accEvent", status: 0 },
  { id: "accNews", status: 0 },
  { id: "accLess", status: 0 },
  { id: "accPeople", status: 0 },
  { id: "accPlaces", status: 0 }
]

// Dummy info
let selectedPark = {
  "contacts":
    {
      "phoneNumbers": [
        {
          "phoneNumber": "3073447381",
          "description": "",
          "extension": "",
          "type": "Voice"
        }
      ],
      "emailAddresses": [
        {
          "emailAddress": "yell_visitor_services@nps.gov",
          "description": ""
        }
      ]
    },
  "description": "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
  "designation": "National Park",
  "directionsInfo": "Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.",
  "fullName": "Yellowstone National Park",
  "images": [
    {
      "credit": "NPS/Jim Peaco",
      "altText": "Crowd watching Aurum Geyser erupt",
      "title": "Aurum Geyser",
      "id": 1789,
      "caption": "Aurum Geyser Erupting",
      "url": "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"
    },
    {
      "credit": "NPS/Neal Herbert",
      "altText": "Photo of bison in Lamar Valley",
      "title": "Bison in Lamar Valley",
      "id": 1792,
      "caption": "Bison in Lamar Valley",
      "url": "https://www.nps.gov/common/uploads/structured_data/3C7D34E6-1DD8-B71B-0BBB1C0F478318E2.jpg"
    }
  ],
  "latLong": "lat:44.59824417, long:-110.5471695",
  "name": "Yellowstone",
  "operatingHours": [
    {
      "name": "All Park Hours",
      "description": "Yellowstone is open daily, year-round, although activities and services are limited at night and certain times of year. The park has five entrance stations, but not all entrance stations are open year-round. Make sure to carefully read about access at each station at different times of year. And remember, all dates are weather dependent!\n\nPlease note that camping is possible only in designated campgrounds.",
      "standardHours": [
        {
          "sunday": "All Day",
          "monday": "All Day",
          "tuesday": "All Day",
          "wednesday": "All Day",
          "thursday": "All Day",
          "friday": "All Day",
          "saturday": "All Day"
        }
      ],
      "exceptions": [
        {
          "name": "Thanksgiving Day",
          "startDate": "{ts '2015-11-26 00:00:00'}",
          "endDate": "{ts '2015-11-26 00:00:00'}",
          "exceptionHours": [
            {
              "sunday": "Closed",
              "monday": "Closed",
              "tuesday": "Closed",
              "wednesday": "Closed",
              "thursday": "Closed",
              "friday": "Closed",
              "saturday": "Closed"
            }
          ]
        },
        {
          "name": "Christmas Day",
          "startDate": "{ts '2015-12-25 00:00:00'}",
          "endDate": "{ts '2015-12-25 00:00:00'}",
          "exceptionHours": [
            {
              "sunday": "Closed",
              "monday": "Closed",
              "tuesday": "Closed",
              "wednesday": "Closed",
              "thursday": "Closed",
              "friday": "Closed",
              "saturday": "Closed"
            }
          ]
        }
      ]
    },
    {
      "name": "West Entrance",
      "description": "Adjacent to the town of West Yellowstone, MT, the West Entrance is usually open (weather dependent) to wheeled vehicles from the third Friday in April through early November, and to tracked-oversnow (snowmobiles and snowcoaches) vehicles from December 15 to March 15.",
      "standardHours": [
        {
          "sunday": "Closed",
          "monday": "Closed",
          "tuesday": "Closed",
          "wednesday": "Closed",
          "thursday": "Closed",
          "friday": "Closed",
          "saturday": "Closed"
        }
      ],
      "exceptions": null
    }
  ],
  "parkCode": "yell",
  "states": "ID,MT,WY",
  "url": "https://www.nps.gov/yell/index.htm",
  "weatherInfo": "Yellowstone's weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70F (25C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below zero, especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer."
}

// 51 entries
let data = [
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  },
  {
    "images": [
      {
        "url": "images/squirrel.jpg"
      },
      {
        "url": "images/squirrel.jpg"
      }
    ]
  }
]
