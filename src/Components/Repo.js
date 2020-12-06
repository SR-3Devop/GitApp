import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {ListGroup} from 'reactstrap'

const Repo = ({repos_url}) => {
    const [repos,setRepos]= useState([])

    const fetchRepos = async () => {
        const {data} = await axios.get(repos_url)
        setRepos(data)
    }
useEffect(() => {
fetchRepos()
},[repos_url]) 
    return (
      <ListGroup>
          {repos.map(repo => (
              <ListGroup key={repo.id}>
                  <div className="text-primary">{repo.name}</div>
                  <div className="text-secondary">{repo.language}</div>
                  <div className="text-info">{repo.description}</div>
              </ListGroup>
          ))}
      </ListGroup>
    )
}

export default Repo
