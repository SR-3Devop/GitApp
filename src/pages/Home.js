import React, { useState, useContext } from "react";
import axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repo from "../Components/Repo";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
    const context = useContext(UserContext)
    const [query,setQuery] = useState("")
    const [user,setUser] = useState(null)

    const fetchDetails = async () => {
        try {
           const {data} = await axios.get(`https://api.github.com/users/${query}`) 
           setUser(data)
        } catch (error) {
          toast('Not a Able to find the User')  
        }
    }
    if(! context.user?.uid){
        return <Redirect to="/signin"/>
    }
    return (
        <Container>
          <Row className=" mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  placeholder="Please provide the username"
                  onChange={e => setQuery (e.target.value)}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={fetchDetails} color="success">Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
              {user ?<UserCard user={user}/> :null}
            </Col>
            <Col md="7">
                {user ?<Repo repos_url={user.repos_url}/> :null}
            </Col>
          </Row>
        </Container>
      );
}

export default Home
