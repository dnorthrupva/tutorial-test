import * as React from "react";
import {
  IonTab,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import Courses from "./Course";
import AllGoals from "./AllGoals";
import CourseGoals from "./CourseGoals";
import { list, trophyOutline } from "ionicons/icons";

const CourseTabs: React.SFC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/courses" to="/courses/list" exact/>
        <Route path="/courses/list">
          <Courses />
        </Route>
        <Route path="/courses/all-goals" exact>
          <AllGoals />
        </Route>
        <Route path="/courses/:courseId">
          <CourseGoals />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
