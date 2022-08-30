import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title } from "../../atoms/title/Title";
import { StoryModal } from "../../molecules/storyModal/StoryModal";
import { StoryForm } from "../../organisms/form/StoryForm";
import { Input } from "../../atoms/input/Input";

import "./header.css";
import { Button } from "../../atoms/button/Button";

export const Header = ({ user, onLogout, onCreateAccount }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <header>
      <div className="wrapper">
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1>Acme</h1>
        </div>
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={showModal} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
        <StoryModal label="Login" isOpen={isModalVisible} onClose={handleClose}>
        <StoryForm label="Login"  >
          <div className="flex py-4 ">
            <Title label="User Name" className="w-10" />
            <Input
              placeholder="username"
              value={userName}
              onChange={handleChangeName}
            />
          </div>
          <div className="flex py-2 ">
            <Title label="Password" />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
        </StoryForm>
      </StoryModal>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({}),
 
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
