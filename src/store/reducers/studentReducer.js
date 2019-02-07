import * as actionTypes from "../actions/actionTypes";

const initialState = {
  DoB: "",
  age: "20",
  github: "https://github.com/Ahmed067Abdullah",
  phone: "03324000087",
  linkedin: "https://linkedIn.com/Ahmed067Abdullah",
  introduction:
    "I've done software engineering, software enginerring is done by me, im proud of it",
  address: "House # 214, Street no 12, Bahadurabad, Karachi",
  skills : "HTML, CSS, JS",
  education: [
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "Present"
    },
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "2020"
    },
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "2020"
    },
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "2020"
    },
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "Present"
    },
    {
      institue: "NED University of Enginerring and Technology",
      degree: "Bachelors of Engineering",
      from: "2016",
      to: "2020"
    }
  ],
  experience: [
    {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "Present"
      },
      {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "2020"
      },
      {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "2020"
      },
      {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "Present"
      },
      {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "2020"
      },
      {
        company: "NED University of Enginerring and Technology",
        position: "Bachelors of Engineering",
        from: "2016",
        to: "2020"
      }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
