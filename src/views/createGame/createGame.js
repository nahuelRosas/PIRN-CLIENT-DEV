import { validationForm } from "../../commonFunction/validatorForm";
import getRandomInt from "../../commonFunction/getRandomInt";
import { useNavigate, useLocation } from "react-router-dom";
import useRecuperator from "../../hooks/useRecuperator";
import { useLoadRestart } from "../../hooks/useLoad";
import React, { useState, useEffect } from "react";
import "../../assets/styles/css/createGame.css";
import { RiStarSLine } from "react-icons/ri";
import { GGDBA } from "../../stores/actions";
import { useDispatch } from "react-redux";
import { FaSadCry } from "react-icons/fa";
import useLoad from "../../hooks/useLoad";
import axios from "axios";

const GetData = () => {
  const { Element: allGenres } = useRecuperator({
    component: "allGenres",
    WOtestArray: true,
  });
  const { Element: allPlatforms } = useRecuperator({
    component: "allPlatforms",
    WOtestArray: true,
  });
  const { Element: allStores } = useRecuperator({
    component: "allStores",
    WOtestArray: true,
  });
  return { allGenres, allPlatforms, allStores };
};

const CG = async ({ payload }) => {
  try {
    return await axios.post("/videogames", payload);
  } catch (error) {
    return error;
  }
};

const CreateGame = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    rating: "",
    released: "",
    background_image: "",
    platforms: [],
    genres: [],
    stores: [],
  });
  const [created, setCreated] = useState(false);

  useLoad();
  useLoadRestart();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (created === 200) {
        dispatch(GGDBA());
        if (location.pathname === "/createGame") {
          navigate("/home");
        }
      }
    }, 3000);
  }, [created, dispatch, location.pathname, navigate]);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i < index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
  };
  const handleOnChange = (element) => {
    setInput({
      ...input,
      [element.target.name]: element.target.value,
    });
    setError(
      validationForm({
        ...input,
        [element.target.name]: element.target.value,
      })
    );
  };
  const handleSelectGenres = (element) => {
    if (
      !input.genres.includes(element.target.value) &&
      element.target.value !== "0"
    ) {
      setInput({
        ...input,
        genres: [...input.genres, element.target.value],
      });
      setError(
        validationForm({
          ...input,
          genres: [...input.genres, element.target.value],
        })
      );
    } else {
      setInput({
        ...input,
      });
    }
  };
  const handleSelectPlatforms = (element) => {
    if (
      !input.platforms.includes(element.target.value) &&
      element.target.value !== "0"
    ) {
      setInput({
        ...input,
        platforms: [...input.platforms, element.target.value],
      });
      setError(
        validationForm({
          ...input,
          platforms: [...input.platforms, element.target.value],
        })
      );
    }
  };
  const handleSelectStores = (element) => {
    if (
      !input.stores.includes(element.target.value) &&
      element.target.value !== "0"
    ) {
      setInput({
        ...input,
        stores: [...input.stores, element.target.value],
      });
      setError(
        validationForm({
          ...input,
          stores: [...input.stores, element.target.value],
        })
      );
    }
  };
  const handleDelete = ({ component, element }) => {
    setInput({
      ...input,
      [component]: input[component].filter((e) => e !== element),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validationForm(input));

    const data = {
      name: input.name,
      description: input.description,
      rating: input.rating,
      released: input.released,
      background_image: input.background_image,
      platforms: input.platforms,
      genres: input.genres,
      stores: input.stores,
    };

    CG({ payload: data }).then((data) => {
      if (data.response) {
        if (data.response.status === 409) setCreated(409);
        if (data.response.status === 500) setCreated(500);
      } else {
        setCreated("ERROR");
      }
      if (data.status === 200) {
        setCreated(200);
        setInput({
          name: "",
          description: "",
          rating: "",
          released: "",
          background_image: "",
          platforms: [],
          genres: [],
          stores: [],
        });
      }
    });
  };

  const { allGenres, allPlatforms, allStores } = GetData();
  const stateStar = clicked.map((e, index) => {
    if (e) return <RiStarSLine key={index} color="yellow" />;
    else return <RiStarSLine key={index} color="grey" />;
  });

  return (
    <>
      <div className="createGame_container">
        <span className="createGame_title">{`create your game </>`} </span>

        {created === 200 && (
          <div className="createGame_created">
            <h1 className="createGame_created_text">
              Game created successfully
            </h1>
          </div>
        )}
        {created === 409 && (
          <div className="createGame_created ">
            <h1 className="createGame_created_error">
              ERROR409 Game already exists
            </h1>
            <FaSadCry className="SVG_home_empty" />
          </div>
        )}
        {created === 500 && (
          <div className="createGame_created">
            <h1 className="createGame_created_error">
              ERROR500 Internal Server Error
            </h1>
          </div>
        )}
        {created === "ERROR" && (
          <div className="createGame_created">
            <h1 className="createGame_created_error">Error creating game</h1>
          </div>
        )}

        {created === false && (
          <form
            className="createGame_form"
            onSubmit={(element) => handleSubmit(element)}>
            <div className="createGame_formName">
              <input
                className="createGame_input"
                type="text"
                value={input.name}
                name="name"
                placeholder="Name of the game"
                onChange={handleOnChange}
              />
              {error.name && (
                <span className="createGame_error">{error.name}</span>
              )}
              <input
                className="createGame_input"
                type="text"
                value={input.background_image}
                placeholder="Image URL"
                name="background_image"
                onChange={handleOnChange}
              />
              {error.background_image && (
                <span className="createGame_error">
                  {error.background_image}
                </span>
              )}
              <input
                className="createGame_input"
                type="date"
                value={input.released}
                placeholder="Date of release"
                name="released"
                onChange={handleOnChange}
              />

              {error.released ? (
                <span className="createGame_error">{error.released}</span>
              ) : (
                <span>Data released</span>
              )}
              <input
                className="createGame_input"
                type="number"
                value={input.rating}
                placeholder="Rating"
                name="rating"
                onChange={(e) => {
                  handleOnChange(e);
                  handleStarClick(e, Math.floor(e.target.value));
                }}
              />
              {error.rating && (
                <span className="createGame_error">{error.rating}</span>
              )}
              {input.rating && (
                <div className="createGame_rating">{stateStar}</div>
              )}

              <select
                className="createGame_input"
                onChange={(element) => handleSelectGenres(element)}>
                <option value="0">Select a genre</option>
                {allGenres.map((element) => {
                  return (
                    <option key={element.id} value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
              </select>
              {error.genres && (
                <span className="createGame_error">{error.genres}</span>
              )}

              <div className="createGame_containerOSelected">
                {input.genres?.map((element) => {
                  return (
                    <div
                      className="createGame_ObjSelected"
                      key={getRandomInt(9999)}
                      onClick={() =>
                        handleDelete({ component: "genres", element })
                      }>
                      {element}
                    </div>
                  );
                })}
              </div>

              <select
                className="createGame_input"
                onChange={(element) => handleSelectPlatforms(element)}>
                <option value="0">Select a platform</option>
                {allPlatforms?.map((element) => {
                  return (
                    <option key={element.id * 999} value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
              </select>

              {error.platforms && (
                <span className="createGame_error">{error.platforms}</span>
              )}

              <div className="createGame_containerOSelected">
                {input.platforms?.map((element) => {
                  return (
                    <div
                      className="createGame_ObjSelected"
                      key={getRandomInt(9999)}
                      onClick={() =>
                        handleDelete({ component: "platforms", element })
                      }>
                      {element}
                    </div>
                  );
                })}
              </div>

              <select
                className="createGame_input"
                onChange={(element) => handleSelectStores(element)}>
                <option value="0">Select a store</option>
                {allStores?.map((element) => {
                  return (
                    <option key={element.id} value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
              </select>

              {error.stores && (
                <span className="createGame_error">{error.stores}</span>
              )}

              <div className="createGame_containerOSelected">
                {input.stores?.map((element) => {
                  return (
                    <div
                      className="createGame_ObjSelected"
                      key={getRandomInt(9999)}
                      onClick={() =>
                        handleDelete({ component: "stores", element })
                      }>
                      {element}
                    </div>
                  );
                })}
              </div>

              <textarea
                className="createGame_input"
                type="text"
                value={input.description}
                placeholder="Description"
                name="description"
                onChange={handleOnChange}
              />
              {error.description && (
                <span className="createGame_error">{error.description}</span>
              )}

              {Object.keys(error).length ? (
                <div className="createGame_containerButton">
                  <span className="createGame_Button">
                    <input
                      className="createGame_Button_input"
                      type="submit"
                      disabled
                      name="Send"
                    />
                  </span>
                </div>
              ) : (
                <div className="createGame_containerButton">
                  <span className="createGame_Button">
                    <input
                      className="createGame_Button_input"
                      type="submit"
                      name="Send"
                    />
                  </span>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default CreateGame;
