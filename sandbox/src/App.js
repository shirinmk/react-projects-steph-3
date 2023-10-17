import "bulma/css/bulma.css";
import ProfileInfo from "./component/ProfileInfo";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";
function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-2">
              <ProfileInfo
                image={Alexa}
                title="Alexia"
                content="I'll help you buy stuff off Amazon"
              />
            </div>
            <div className="column is-2">
              <ProfileInfo
                image={Cortana}
                title="Cortana"
                content="Personal Assistant by Microsft"
              />
            </div>
            <div className="column is-2">
              <ProfileInfo
                image={Siri}
                title="Siri"
                content="I don't get lot of updates anymore apple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
