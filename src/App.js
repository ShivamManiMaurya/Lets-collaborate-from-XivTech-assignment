import "./App.css";
import data from "./Components/letsCollaborateData";
import Main from "./Components/Main";

function App() {
    return (
        <div className="App">
            <h4 className="app-heading">Let's Collaborate</h4>
            <div className="services">
                {data.map((data) => {
                    return (
                        <Main
                            key={data.id}
                            heading={data.heading}
                            image={data.image}
                            description={data.description}
                            linkText={data.linkText}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
