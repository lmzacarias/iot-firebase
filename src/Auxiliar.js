import React, { useState, useEffect } from "react";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfUJEmBpEza1KAfGmzj2V0DrAY2bzDJzk",
  authDomain: "iot-test-6e53b.firebaseapp.com",
  databaseURL: "https://iot-test-6e53b-default-rtdb.firebaseio.com",
  projectId: "iot-test-6e53b",
  storageBucket: "iot-test-6e53b.appspot.com",
  messagingSenderId: "45733058205",
  appId: "1:45733058205:web:a8076aef0e703718af2674",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Auxiliar = () => {
  const [data, setData] = useState("Comenzado.....");
  const [dataNew, setDataNew] = useState("");

  useEffect(() => {
    console.log("useEfectsssd2");
    const nameRef = firebase
      .database()
      .ref()
      .child("Sensores")
      .child("sensor2");
    console.log("refencia", nameRef);
    nameRef.on("value", (snapshot) => {
      setData(snapshot.val());
      setDataNew(snapshot.val());
    });
  }, []);

  /*  const onChangeInput = (value) => {
    console.log("onChange", value.target.value);
    setDataNew(value.target.value);
  }; */

  const onClick = () => {
    if (dataNew === "on") {
      firebase.database().ref().child("Sensores").child("sensor2").set("off");
    } else {
      firebase.database().ref().child("Sensores").child("sensor2").set("on");
    }
  };
  console.log("Datos", data);
  return (
    <div>
      <div> Fire</div>
      <div>
        <span> Estado: </span>
        {data}
      </div>
      {/* <input onChange={onChangeInput} /> */}
      <button onClick={onClick}> {dataNew === "on" ? "off" : "on"}</button>
    </div>
  );
};

export default Auxiliar;
