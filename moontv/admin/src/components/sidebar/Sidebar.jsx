import { Link } from "react-router-dom";
import { PlayCircleOutline, Timeline } from "@material-ui/icons"
import { Storefront } from "@material-ui/icons"
import { BarChart } from "@material-ui/icons"
import { DynamicFeed } from "@material-ui/icons"
import { WorkOutline } from "@material-ui/icons"
import { Report } from "@material-ui/icons"
import { ChatBubbleOutline } from "@material-ui/icons"
import { MailOutline } from "@material-ui/icons"
import { AttachMoney } from "@material-ui/icons"
import { PermIdentity } from "@material-ui/icons"
import { TrendingUp } from "@material-ui/icons"
import { LineStyle } from "@material-ui/icons"
import "./sidebar.scss"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <Link to="/" className="link">
                    {/* Can turn back on active if required */}
                {/* <li className="sidebarListItem active"> */}
                <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
                </li>
                </Link>
                <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
                </li>
                <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
                </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <Link to="/users" className="link">
                <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Users
                </li>
                </Link>
                <Link to="/movies" className="link">
                <li className="sidebarListItem">
                    <PlayCircleOutline className="sidebarIcon" />
                    Movies
                </li>
                </Link>
                <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
                </li>
                <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
                </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
                </li>
                <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
                </li>
                <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
                </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
                </li>
                <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
                </li>
                <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}
