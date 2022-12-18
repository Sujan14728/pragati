import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BlindConsultant from "./pages/blind/BlindConsultant";
import BlindEntertainment from "./pages/blind/BlindEntertainment";
import BlindHome from "./pages/blind/BlindHome";
import BlindNews from "./pages/blind/BlindNews";
import BlindAbout from "./pages/blind/BlindAbout";
import Selection from "./pages/Selection";
import BlindJobs from "./pages/blind/BlindJobs";
import BlindSkills from "./pages/blind/BlindSkills";
import Identifying from "./pages/blind/Identifying";
import BlindSingleNews from "./pages/blind/BlindSingleNews";
import Home from "./pages/others/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Jobs from "./pages/others/Jobs";
import About from "./pages/others/About";
import News from "./pages/others/News";
// import Entertainment from "./pages/others/Entertainment";
import Skills from "./pages/others/Skills";
import Consultant from "./pages/others/Consultant";
import VideoChat from "./pages/others/VideoChat";
import SingleNews from "./pages/others/SingleNews";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Nav = styled.div``;

const Ul = styled.div``;

const Li = styled.div`
  :focus {
    outline: 1px solid red;
  }
`;

function App() {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <Container>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Selection />} />
          {/* Routes for blind website */}
          <Route path="/blind/home" element={<BlindHome />} />
          <Route path="/blind/about" element={<BlindAbout />} />
          <Route path="/blind/news" element={<BlindNews />} />
          <Route path="/blind/news/:id" element={<BlindSingleNews />} />
          <Route path="/blind/entertainment" element={<BlindEntertainment />} />
          <Route path="/blind/consultant" element={<BlindConsultant />} />
          <Route path="/blind/jobs" element={<BlindJobs />} />
          <Route path="/blind/skills" element={<BlindSkills />} />
          <Route path="/blind/skills/identifying" element={<Identifying />} />

          {/* Routes for others */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          {/* <Route path="/entertainment" element={<Entertainment />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/consultant" element={<Consultant />} />
          <Route path="/consultant/videochat/:id" element={<VideoChat />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

export default App;
