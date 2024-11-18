import { useState, useEffect } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from './models';
import OpenAIResponseComponent from './ui-components/OpenAIResponseComponent';
import { NavBarSide } from './ui-components';
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import { post } from 'aws-amplify/api';
import { TextInputs, HeroLayout1 } from './ui-components';

Amplify.configure(outputs);


export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [aiResponse, setAIResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    try {
      const profiles = await DataStore.query(UserProfile);
      if (profiles && profiles.length > 0) {
        setUserProfiles(profiles);
      } else {
        console.log("No user profiles found");
      }
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  }

  async function submitNewTextInputs(inputText) {
    try {
      setIsLoading(true);
      setError(null);
      const restOperation = post({
        apiName: 'openaiApiRequest',
        path: '/items',
        options: {
          body: {
            input: inputText
          }
        }
      });

      const response = await restOperation.response;
      const data = await response.body.json();
        
      console.log("Lambda Response:", data);
      setAIResponse(data.body);
    } catch (error) {
      console.error("Error calling Lambda function:", error);
      setAIResponse(`Error: ${error.message || JSON.stringify(error)}`);
    }
  }

  return (
    <Flex direction="row" width="100%">
      <NavBarSide width="385px" />
      <Flex
        className="App"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding="2rem"
        flex="1"
      >
      

      <Heading level={1}>Welcome to Stegosaurus, your accounting helper.</Heading>

      <Divider />

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3">{userprofile.email}</Heading>
            </View>
          </Flex>
        ))}
      </Grid>
      
      
      <TextInputs
        onSubmit={(fields) => {
          const inputText = fields.text.trim();
          submitNewTextInputs(inputText);
        }}
      />
      
      <OpenAIResponseComponent 
        response={aiResponse} 
        error={error}
        loading={isLoading}
      />
	  <Button onClick={signOut}>Sign Out</Button>
      </Flex>
    </Flex>
  );
}
