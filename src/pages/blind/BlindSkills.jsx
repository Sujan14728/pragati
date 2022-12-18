import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlindTopNav from "../../components/BlindTopNav";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const BlindSkills = () => {
  return (
    <>
      <BlindTopNav />
      {/* <div style={{marginLeft:"40%"}}>
        <textarea
          name=""
          id=""
          cols="60"
          rows="10"
          style={{ resize: "none", height: "20vh" }}
        >
<p>Hello</p>


        </textarea>
      </div> */}
      <Container>
        <div className="cooking" style={{ position: "relative", top: "10vh" }}>
          <div
            style={{
              width: "80vw",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1>what Skill do you want to learn?</h1>
            <div
              className="link"
              style={{
                display: "flex",
                listStyle: "none",
                fontSize: "40px",
                width: "80vw",
                border: "1px solid black",
                justifyContent: "space-evenly",
              }}
            >
              <Link to="/blind/skills/identifying">
                <li>Identifying paper money and coins</li>
              </Link>

              <Link to="blind/skills/blindcooking">
                <li>Cooking</li>
              </Link>

              <Link>
                <li>Sewing</li>
              </Link>

              <li>
                <a href="">Craft</a>
              </li>
            </div>

            {/* <p>
            So how does a blind person get started with cooking? The following
            excerpt is copied directly from the VisionAware site and is a very
            small portion of the overall article. It is only intended to give
            you a taste (pun intended) of the overall quality and content. Want
            to find more resources such as VisionAware? Check out my Resources
            page, which is frequently updated with new information. Cutting and
            Chopping Use trays or cutting boards in colors that contrast with
            your food. For example, keep a white cutting board for slicing
            apples or carrots, and a dark-colored board for onions. Use
            reversible cutting board, dark on one side, white on the other Use
            the white side of the cutting board for darker-colored foods, such
            as eggplant or broccoli, and the black side for lighter-colored
            foods, such as onions and cheese. Make sure the cutting edge of your
            knife blade is facing downward before you cut or slice. You can
            identify the cutting edge of the knife blade without touching it.
            Since the cutting edge is usually curved, try rocking the knife
            blade forward and backward on the table top to determine when the
            cutting edge (which will rock) is facing downward. Try using a pizza
            cutter instead of a knife for slicing sandwiches.
          </p> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlindSkills;
