import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const AllGoals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - Courses Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
