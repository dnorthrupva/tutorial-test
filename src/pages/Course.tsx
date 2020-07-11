import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";
// import { useHistory } from "react-router";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic",
  },
  {
    id: "c2",
    title: "Angular",
  },
  {
    id: "c3",
    title: "React",
  },
];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //     history.push('/course-goals');
  // }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardContent className="ion-text-center">
                    <h2 className="ion-text-center">{course.title}</h2>
                    <h3>Enrolled on 03/22/2019</h3>
                    <IonButton routerLink={"/courses/" + course.id}>
                      View Course Goals
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
