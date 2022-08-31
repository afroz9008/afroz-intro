import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";
import Bloglist from "./pages/Bloglist";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails from "./pages/BlogDetails";
import BlogDetails2 from "./pages/BlogDetails2";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

import Demopage from "./pages/Demopage";
import WorkDetails from "./pages/WorkDetails";
import WorkDetails2 from "./pages/WorkDetails2";
import { useEffect, useState } from "react";

function App() {
  const [colors, setColors] = useState([
    { background: "#3686fe", text: "#FFFFFF" },
    { background: "#AB46D2", text: "#FCF69C" },
    { background: "#005555", text: "#F7FF93" },
    { background: "#E8630A", text: "#E9D5DA" },
    { background: "#92BA92", text: "#F1DDBF" },
    { background: "#4D96FF", text: "#FF6B6B" },
    { background: "#630606", text: "#D9CE3F" },
    { background: "#8A39E1", text: "#ECC488" },
  ]);

  useEffect(() => {
    const background = localStorage.getItem("background");
    const text = localStorage.getItem("text");
    const ind = colors.findIndex(c => c.background === background && c.text === text);
    if (background && text && ind >= 0) {
      const root = document.documentElement;
      root.style.setProperty('--colorblue', background);
      root.style.setProperty('--textColor', text);
      root.style.setProperty('--colororangetrans', background + "78");
      const data = Object.assign([], [...colors])
      const r = data.splice(ind, 1)[0];
      setColors([r, ...data]);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="loader">
        <div class="lds-roller">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
      <div className="color-picker pulse">
        {colors.map((color, ind) =>
          <div
            onClick={() => {
              const root = document.documentElement;
              root.style.setProperty('--colorblue', color.background);
              root.style.setProperty('--textColor', color.text);
              root.style.setProperty('--colororangetrans', color.background + "78");
              localStorage.setItem("background", color.background)
              localStorage.setItem("text", color.text)
              const data = Object.assign([], [...colors])
              const r = data.splice(ind, 1)[0];
              setColors([r, ...data]);
            }}
            key={color}
            className="color-badge" >
            <div style={{ background: color.background, flex: 1 }} />
            <div style={{ background: color.text, flex: 1 }} />
          </div>
        )}
      </div>
      <Switch>
        <Route path="/" component={Homepage} exact />
        {/* 
        <Route path="/multipage" component={Multipage} exact />
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/bloglist" component={Bloglist2} exact />
        <Route path="/blogs/:id/:title" component={BlogDetails} />
        <Route path="/blog-details/:id/:title" component={BlogDetails2} /> */}

        {/* For Multipage */}
        {/* <Route path="/multipage" component={Multipage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/works" component={Works} exact />
        <Route path="/works/:id/:title" component={WorkDetails} />
        <Route path="/work-details/:id/:title" component={WorkDetails2} />
        <Route path="/contact" component={Contact} exact /> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
