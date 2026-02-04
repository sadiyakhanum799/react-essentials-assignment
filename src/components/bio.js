function Bio() {
      const bioText = "I am a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, and CSS, I strive to build user-friendly interfaces that provide seamless user experiences. In my free time, I enjoy exploring new technologies and contributing to open-source projects.";
      return (
            <div className="bio-section">
                  <h3>About Me</h3>
                  <p>{bioText}</p>
                  <h3>Skills</h3>
                  <p>Here are some of my technical skills:</p>
                  <div className="skills-list">{
                        ["JavaScript", "React", "HTML", "CSS", "Git", "Responsive Design"].map((skill, index) => (
                              <span key={index} className="skill-item">{skill}</span>
                        ))
                  }</div>
            </div>
      );
}
export default Bio;