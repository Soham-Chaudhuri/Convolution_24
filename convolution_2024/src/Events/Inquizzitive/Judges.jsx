import React from "react";
import "./Judges.css";



import picture6 from "../../components/assets/judges/Quizmaster.png";

const peopleData = [
  {
    id: 1,
    name: "Baneswar Sarker",
    description: "Baneswar Sarker",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "link",
      linkedin: "https://www.linkedin.com/in/baneswar-sarker-59689587/?originalSubdomain=in",
      facebook: "link",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Research Scholar (PhD) at IIT Kharagpur",
  },
  // {
  //   id: 2,
  //   name: "Parthib",
  //   description: "Joint-Secretary",
  //   imgSrc: picture4,
  //   socialMediaLinks: {
  //     instagram: "https://www.instagram.com/parthib_not_parthiv/",
  //     linkedin: "https://www.linkedin.com/in/parthib-roy-3a78b3224/",
  //     facebook: "https://www.facebook.com/profile.php?id=100074521635711",
  //   },
  //   socialMediaavailable: { insta: true, linke: true, face: true },
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

function Judges() {
  return (
    <>
      <section id="judges">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">QUIZ MASTER</h1>
          <span className="underline_teams"></span>
          <p className="paragraph_teams py-4">
            Meet the representatives of JU EE Students' Forum making Convolution
            9.0 possible!
            <br />
            We are ready to address all your queries!
          </p>
        </div>
        <div className="px-[69px] py-5">
          <div className="flex flex-wrap items-center justify-center ">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap items-center">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="algomaniac-teams">{person.description}</div>
                <div className="lorem-ipsum-para-teams flex flex-col gap-2">
                  {person.desc}
                  <div className="flex gap-2">
                    {person.socialMediaavailable.insta ? (
                      <a
                        href={person.socialMediaLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-square-instagram fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}

                    {person.socialMediaavailable.linke ? (
                      <a
                        href={person.socialMediaLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}

                    {person.socialMediaavailable.face ? (
                      <a
                        href={person.socialMediaLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-square-facebook fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="group-item-teams" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Judges;
