// import stepStyles from "./Steps.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Thankyou = () => {
  const history = useHistory();
  const { driver } = useSelector((state) => state);
  console.log(driver, "driver");
  // const driverData = Object.entries(driver);
  // console.log(driverData, "driverData");
  useEffect(() => {
    if (!driver) {
      history.push("/");
    }
  }, [driver]);

  return (
    <>
      {" "}
      <h1>
        Driver Profile Submitted
        <strong>We have recieved your details as</strong>
        {/* {driverData.map((driverDetail) => (
          <li key={driverDetail[0]}>
            {typeof driverDetail[1] === "boolean"
              ? driverDetail[1].toString()
              : driverDetail[1]}
          </li>
        ))} */}
      </h1>
      <p style={{ color: "white" }}>
        asjdfkhlsdkjfhalsdkjf lskjdfhalskjdfh lkjha sldkjfh asldkjfh lkjshdf
        lksdjfh
      </p>
    </>
  );
};

export default Thankyou;
