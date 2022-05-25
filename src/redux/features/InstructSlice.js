import { createSlice } from "@reduxjs/toolkit";
import Instructor_1_Image from "../../images/instructor-1.png"
import Instructor_2_Image from "../../images/instructor-2.png"
import Instructor_3_Image from "../../images/instructor-3.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export const instructSlice = createSlice({
    name: "instruct",
    initialState: {
        instructs: [
            {
                id: 1,
                image: Instructor_1_Image,
                card_title: "Shaapir Prio",
                card_subtitle: "Assistant Director",
                card_link1: <LinkedInIcon />,
                card_link2: <FacebookIcon />,
                card_link3: <TwitterIcon />
            },
            {
                id: 2,
                image: Instructor_2_Image,
                card_title: "Shaapir Prio",
                card_subtitle: "Assistant Director",
                card_link1: <LinkedInIcon />,
                card_link2: <FacebookIcon />,
                card_link3: <TwitterIcon />
            },
            {
                id: 3,
                image: Instructor_3_Image,
                card_title: "Shaapir Prio",
                card_subtitle: "Assistant Director",
                card_link1: <LinkedInIcon />,
                card_link2: <FacebookIcon />,
                card_link3: <TwitterIcon />
            },

        ],

        instruct: {
            name: "",
            email: "",
            phone: "",
            status: "",
        },
    },

    reducers: {
        getInstruct: (state, action) => {
            state.instruct = state.instructs.find((item) => item.id == action.payload);
        },
    },
});

export const { getInstruct } = instructSlice.actions;

export default instructSlice.reducer;
