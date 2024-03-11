import TopNavBarStyle from "./TopNavStyle.module.css"

const TopNavBar : React.FC = () =>{
    return(
        <>
            <div className={TopNavBarStyle.mainContainer}>
                <div className={TopNavBarStyle.contentContainer}>
                    <ul>
                        <li className={TopNavBarStyle.logo}>Logo</li>
                        <li className={TopNavBarStyle.nav}>Homepage</li>
                        <li >Profile</li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default TopNavBar;