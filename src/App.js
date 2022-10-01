import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyValueBlock from "./components/KeyValueBlock";
import Container from "./components/Container";
import usePrivacyKey from "./hooks/usePrivacyKey";
import useSymmetricList from "./hooks/useSymmetricList";
import useRasList from "./hooks/useRASList";

function App() {
  const [privacyKey, updatePrivacyKey] = usePrivacyKey();
  const [symmetricList, updateSymmetricList] = useSymmetricList();
  const [rasList, updateRasList] = useRasList();

  const refresh = () => {
    updatePrivacyKey();
    updateSymmetricList();
    updateRasList();
  };

  return (
    <>
      <Container>
        <button onClick={refresh}>Refresh keys</button>
        {privacyKey && (
          <KeyValueBlock alias="PK" list={[privacyKey]} title="Privacy Key" />
        )}
        {symmetricList?.length && (
          <KeyValueBlock alias="CH" list={symmetricList} title="Symmetric" />
        )}
        {rasList?.length && (
          <KeyValueBlock
            alias="RAS"
            list={rasList}
            title="Restricted Access to System"
          />
        )}
      </Container>
      <ToastContainer hideProgressBar autoClose={4000} position="top-right" />
    </>
  );
}

export default App;
