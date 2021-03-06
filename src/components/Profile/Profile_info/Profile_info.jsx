import React from 'react';
import s from './Profile_info.module.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import user_icon from "../../../assets/img/user-icon.png";
import Profile_status_with_hoocks from "./Profile_status_with_hoocks";

const Profile_info = (props) => {
    if (!props.profile) {
        return <CircularProgress/>
    }
    return (
        <div className={s.user}>
            <div className={s.user_icon}>
                <img src={props.profile.photos.large ? props.profile.photos.large : user_icon} alt='user'/>
            </div>
            <div className={s.user_info}>
                <ul className={s.user_info_list}>
                    <li className={s.user_info_item}>
                        <Profile_status_with_hoocks status={props.status}
                                                    update_status={props.update_status}/>
                    </li>

                    <li className={s.user_info_item}><h1>{props.profile.fullName}</h1></li>
                    <li className={s.user_info_item}>Date of Birth: 2 april</li>
                    <li className={s.user_info_item}>City: Minsk</li>
                    <li className={s.user_info_item}>Education: BNTU 20'</li>
                    <li className={s.user_info_item}>Web-site: http://it-kamasutra.com</li>
                </ul>
            </div>
        </div>
    )
}
export default Profile_info;