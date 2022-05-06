import React from "react"
import Card from "react-bootstrap/Card"

const  GitHubCard = () => {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/88464576?v=4"/>
        <Card.Body>
            <Card.Title>xsndvl</Card.Title>
            <Card.Text>
                I am a student software developer, I love to learn and code!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard