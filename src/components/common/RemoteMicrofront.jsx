/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from 'react-redux';
import { addMicrofront } from '../../app/redux/actions/rootActions';

export const RemoteMicrofront = ({ microfeName }) => {

  const dispatch = useDispatch();

  let refElem = React.useRef(null);

  const handleDataFromMicrofront = () => {
    try {
      refElem.current.addEventListener(`${microfeName}Event`, ({ detail }) => {
        console.log(detail);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const mountMicrofront = (container) => {
    window[`mount${microfeName}`](container);
  };

  const loadMicrofront = async () => {
    const scriptEement = document.querySelector(`script#${microfeName}`);

    if (!scriptEement) {
      try {
        const scriptLoad = document.createElement("script");
        scriptLoad.id = microfeName;
        scriptLoad.setAttribute(
          "src",
          `http://localhost:3000/${microfeName}.js`
        );
        scriptLoad.addEventListener("load", () => {
          mountMicrofront(refElem.current);
        });
        document.head.appendChild(scriptLoad);
        dispatch(addMicrofront(microfeName, refElem.current));
        handleDataFromMicrofront();
      } catch (err) {
        console.error(err);
      }
    }
  };

  React.useEffect(() => {
    loadMicrofront();
  }, []);

  return (
    <React.Fragment>
      <div id={`microfront-container-${microfeName}`} ref={refElem} />
    </React.Fragment>
  );
};
