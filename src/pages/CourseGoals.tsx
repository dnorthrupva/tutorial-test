import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { useParams } from "react-router";
import { COURSE_DATA } from "./Course";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse?.title : "No course found!"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - {selectedCourse?.title}</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
