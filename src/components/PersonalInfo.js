function PersonalInfo(){
      const name = "Sadiya Khanum";
      const role = "Frontend Developer";
      const email = "sadiyakhanum799@gmail.com";
      const phone = "6366654780";
      const location = "Bengaluru, India";

      return (
            <div className="personal-info">
                  <h2>{name}</h2>
                  <p className="role">{role}</p>
                  <div className="contact-info">
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                        <p>Location: {location}</p>
                  </div>
            </div>
      );
}
export default PersonalInfo;