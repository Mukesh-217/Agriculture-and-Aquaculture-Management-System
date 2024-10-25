import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import AddEvents from "../pages/addEvents/AddEvents";

import Crops from "../pages/crops/Crops"
import  Homepage from "../pages/homepage/Homepage"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import NewEvent from "../pages/newevent/newEvent"
import AboutComponent from "../pages/about/AboutComponent";
import GalleryComponent from "../pages/gallery/GalleryComponent";
import TeamComponent from "../pages/team/ChiefComponents";
import EventsComponent from "../pages/events/EventsComponent";
import AboutMe from "../pages/myintro/AboutMe"
import { settings } from "../portfolio.js";
// import display  from './display.html';
export default function Main(propss) {
    return (
      <div>
        <HashRouter basename="/">
          
            {/* <Route
              path="/Home"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            /> */}
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/addEvent"
              render={(props) => (
                <AddEvents
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/AboutMe"
              render={(props) => (
                <AboutMe
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/events"
              exact
              render={(props) => (
                <EventsComponent
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/new"
              render={(props) => (
                <NewEvent
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/About"
              render={(props) => (
                <AboutComponent
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/gallery"
              render={(props) => (
                <GalleryComponent
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            <Route
              path="/crops"
              render={(props) => (
                <Crops
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
             {/* <Route
              path="/display"
              render={(props) => (
                <display
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            /> */}
              <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
              />
             <Route
              path="/register"
              render={(props) => (
                <Register
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
       
             <Route
              path="/homepage"
              render={(props) => (
                <Homepage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
          />
            <Route
              path="/team"
              render={(props) => (
                <TeamComponent
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  anime={propss.anime} setAnime={propss.setAnime}
                />
              )}
            />
            
          
        </HashRouter>
      </div>
    );
}
