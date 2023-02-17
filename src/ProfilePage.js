//Reference: https://bbbootstrap.com/snippets/reactjs-user-profile-list-items-92852280
import "./ProfilePage.css";
import { useLocation } from "react-router-dom";
export default function ProfilePage() {
  const { state } = useLocation();
  const { firstName, lastName, email } = state;
  return (
    <>
      <div className="container">
        <div className="card">
          <div>
            <h2 style={{ textAlign: "center" }}>Profile Page</h2>
            <br></br>
            <div className="profile_details">
              <h5>First Name : {firstName}</h5>
              <br></br>
              <h5>Last Name : {lastName}</h5>
              <br></br>
              <h5>Email : {email}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
