import Base from '../Components/Pages/Base'

import WelcomeContainer from '../Containers/WelcomeContainer'
import NotFoundContainer from '../Containers/NotFoundContainer'
import Vision from '../Containers/Vision'
import Dora from '../Containers/Dora'
import Team from '../Containers/Team'
import SocialLinks from '../Containers/SocialLinks'
import UpcomingEvents from '../Containers/UpcomingEvents'
import RecentEvents from '../Containers/RecentEvents'
import Initiatives from '../Containers/Initiatives'
import Alum from '../Containers/Alum'
import Story from '../Containers/Story'
import Donate from '../Containers/Donate'
import ContactUs from '../Containers/ContactUs'
import Contact from '../Containers/WriteToUs'
import Awards from '../Containers/awards'
import AlumniDashboard from '../Containers/DashboardContainer/index'
import AboutEvent from '../Containers/aboutEvent'
import Publications from '../Containers/publications'
import MOU from '../Containers/MOU'
import UserWrapper from '../Containers/UserWrapper'
import TemporaryLoginContainer from '../Containers/TemporaryLoginContainer'
import TemporaryLogoutContainer from '../Containers/TemporaryLogoutContainer'
import DistinguishedAlumniContainer from '../Containers/DistinguishedAlumniContainer'

import * as rC from './routeConstants'

const routes = {
  component: Base,
  childRoutes: [
    {
      path: rC.TEMPORARY_LOGIN_ROUTE,
      component: TemporaryLoginContainer,
    },
    {
      path: rC.WELCOME_ROUTE,
      component: WelcomeContainer,
    },
    {
      path: rC.VISION_ROUTE,
      component: Vision,
    },
    {
      path: rC.DORA_ROUTE,
      component: Dora,
    },
    {
      path: rC.TEAM_ROUTE,
      component: Team,
    },
    {
      path: rC.SOCIAL_LINKS_ROUTE,
      component: SocialLinks,
    },
    {
      path: rC.UPCOMING_EVENTS_ROUTE,
      component: UpcomingEvents,
    },
    {
      path: rC.RECENT_EVENTS_ROUTE,
      component: RecentEvents,
    },
    {
      path: rC.INITIATIVES_ROUTE,
      component: Initiatives,
    },
    {
      path: rC.ALUM_ROUTE,
      component: Alum,
    },
    {
      path: rC.STORY_ROUTE,
      component: Story,
    },
    {
      path: rC.DONATE_ROUTE,
      component: Donate,
    },
    {
      path: rC.CONTACT_US_ROUTE,
      component: Contact,
    },
    {
      path: rC.AWARDS_ROUTE,
      component: Awards,
    },
    {
      path: rC.ABOUT_EVENT_ROUTE,
      component: AboutEvent,
    },
    {
      path: rC.PUBLICATIONS,
      component: Publications,
    },
    {
      path: rC.MOU_ROUTE,
      component: MOU,
    //   // Add authorisation wrapper
    },
    {
      path: rC.ALUM_DASHBOARD_ROUTE,
      component: AlumniDashboard,
    },
    {
      path: rC.ABOUT_EVENT_ROUTE,
      component: AboutEvent,
    },
    {
      path: rC.PUBLICATIONS,
      component: Publications,

    },
    {
      path: '/user',
      component: UserWrapper,
      childRoutes: [
        {
          path: '/user/dashboard',
          component: AlumniDashboard,
        },
      ],
    },
    {
      path: '/distinguished',
      component: DistinguishedAlumniContainer,
    },
    {
      path: '/user/logout',
      component: TemporaryLogoutContainer,
    },
    {
      path: '*',
      component: NotFoundContainer,
    },
  ],
}

export default routes
