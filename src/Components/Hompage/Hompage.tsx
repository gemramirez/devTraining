import UserMasterlist from "../Users/UserMasterlist"
import HomepageStyle from "./HompageStyle.module.css"
const Homepage: React.FC = () => {
    return (
        <>
            <div className={HomepageStyle.mainContainer}>
                <div className={HomepageStyle.contentContainer}>
                    <h1>Masterlist</h1>
                    <div className={HomepageStyle.tables}>
                    <UserMasterlist name="gem" age={2}/>

                    </div>

                </div>
            </div>    
        </>
    );
}

export default Homepage;