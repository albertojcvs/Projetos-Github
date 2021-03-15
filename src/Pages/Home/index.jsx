import React, { useRef, useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import ProjectList from "../../Components/ProjectList";

import { FiSearch } from "react-icons/fi";
import { useAlert } from "react-alert";

import { githubService } from "../../Services/github";

import "./style.css";

function Home() {
  const [githubProjects, setGithubprojects] = useState([]);
  const inputRef = useRef(null);

  function isInputValueEmpty() {
    if (!inputRef.current.value) return true;
    return false;
  }

  const alert = useAlert();

  async function getGithubProjects(username) {
    if (!isInputValueEmpty()) {
      try {
        setGithubprojects([]);
        const response = await githubService(`users/${username}/repos`);
        if (response.data.length === 0) {
          alert.show("Usuário não possui nenhum projeto!");
        }

        setGithubprojects(response.data);
      } catch (err) {
        if (err.response.status === 404) {
          alert.show("Usuário não encontrado");
        }
      }
    } else {
      alert.show("Digite um usário");
    }
  }

  return (
    <div className="home-page-container">
      <Header />

      <main className="main-container">
        <div className="search-group">
          <Input
            ref={inputRef}
            autoFocus
            autoComplete="off"
            className="search-input"
            type="text"
            placeholder="Digite um usuário do Github"
          />
          <Button onClick={() => getGithubProjects(inputRef.current.value)}>
            <FiSearch />
          </Button>
        </div>
        {githubProjects.length > 0 && (
          <>
            <ProjectList
              username={inputRef.current.value}
              projectList={githubProjects}
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
