import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dob: new Date(),
  age: "",
  github: "",
  phone: "",
  enrollNo : "",
  linkedin: "",
  introduction: "",
  address: "",
  skills: "",
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
    case actionTypes.SET_STUDENT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default reducer;
